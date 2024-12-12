import firebaseConfig from 'utils/firebases/config'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  setDoc,
  doc,
  updateDoc,
  getDoc,
  increment,
  DocumentData,
  DocumentReference,
} from 'firebase/firestore'
import { PAGE_SIZE } from 'configs/data'
import { INewMessage } from 'containers/Chat/type'
interface ChatServiceType {
  createMessage: (channelId: string, message: INewMessage) => void
  getMessages: (
    channelId: string | null,
    lastMsgIndex: number | null,
  ) => { messagesQuery: any; onSnapshot: any } | {}
  listenChannel: (channelId: string) =>
    | {
        channelRef: DocumentReference<DocumentData, DocumentData> | undefined
        onSnapshot: any
      }
    | {}
  listenUserChat: (
    channelId: string,
    userId: string,
  ) =>
    | {
        userChatRef: DocumentReference<DocumentData, DocumentData> | undefined
        onSnapshot: any
      }
    | {}
  updateTypingMessage: (
    channelId: string,
    userId: string,
    isTyping: boolean,
  ) => void
  updateTimeActivity: (channelId: string, userId: string) => void
}

class ChatService implements ChatServiceType {
  private db: any
  static instance: ChatService | null = null

  constructor() {
    if (!firebaseConfig.firebaseApp) return
    this.db = getFirestore(firebaseConfig.firebaseApp)

    if (ChatService.instance) {
      return ChatService.instance
    }
    ChatService.instance = this
  }

  createMessage(channelId: string, message: INewMessage) {
    if (this.db === undefined) return
    const messagesDoc = doc(
      collection(this.db, 'channelMessages', channelId, 'messages'),
    )

    setDoc(messagesDoc, {
      ...message,
      msgIndex: increment(1),
      createdAt: new Date().getTime(),
    })
  }

  getMessages(channelId: string | null, lastMsgIndex: number | null) {
    if (this.db === undefined) return {}
    if (!channelId) return {}
    const messagesDoc = collection(
      this.db,
      'channelMessages',
      channelId,
      'messages',
    )

    const messagesQuery = lastMsgIndex
      ? query(
          messagesDoc,
          orderBy('msgIndex', 'desc'),
          startAfter(lastMsgIndex),
          limit(PAGE_SIZE),
        )
      : query(messagesDoc, orderBy('msgIndex', 'desc'), limit(PAGE_SIZE))

    return { messagesQuery, onSnapshot }
  }

  updateTypingMessage(channelId: string, userId: string, isTyping: boolean) {
    if (this.db === undefined) return

    const channelRef = doc(this.db, 'channelMessages', channelId)

    getDoc(channelRef).then((docSnap) => {
      if (docSnap.exists()) {
        updateDoc(channelRef, {
          actions: {
            ...docSnap.data().actions,
            typings: {
              ...docSnap.data().actions?.typings,
              [userId]: isTyping ? new Date().getTime() : null,
            },
          },
        })
      }
    })
  }

  updateTimeActivity(channelId: string, userId: string) {
    if (this.db === undefined) return
    if (!userId) return
    if (!channelId) return

    const userChatDoc = doc(this.db, 'userChats', channelId, 'users', userId)
    setDoc(userChatDoc, {
      lastActivity: new Date().getTime(),
    })
  }

  updateLastReadIndex(channelId: string, userId: string, msgIndex: number) {
    if (this.db === undefined) return
    if (!userId) return
    if (!channelId) return

    const userChatDoc = doc(this.db, 'userChats', channelId, 'users', userId)
    setDoc(userChatDoc, {
      lastReadIndex: msgIndex,
    })
  }

  listenChannel(channelId: string | null) {
    if (this.db === undefined) return {}
    if (!channelId) return {}
    const channelRef = doc(this.db, 'channelMessages', channelId)

    return {
      channelRef,
      onSnapshot,
    }
  }

  listenUserChat(channelId: string, userId: string) {
    if (this.db === undefined) return {}
    if (!userId) return {}
    if (!channelId) return {}

    const userChatRef = doc(this.db, 'userChats', channelId, 'users', userId)

    return {
      userChatRef,
      onSnapshot,
    }
  }
}

export default new ChatService()
