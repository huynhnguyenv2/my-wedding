import firebaseConfig from "./config"
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
  where,
} from "firebase/firestore"

interface INewMessage {
  name: string
  message: string
}

const PAGE_SIZE = 10
interface ChatServiceType {
  createMessage: (message: INewMessage) => void
  getMessages: (
    lastMsgIndex: number | null
  ) => { messagesQuery: any; onSnapshot: any } | {}
}

class ChatService implements ChatServiceType {
  private db: any
  static instance: ChatService | null = null

  constructor() {
    try {
      if (!firebaseConfig.firebaseApp) return
      this.db = getFirestore(firebaseConfig.firebaseApp)
    } catch (e) {
      console.error("Error initializing ChatService", e)
    }

    if (ChatService.instance) {
      return ChatService.instance
    }
    ChatService.instance = this
  }

  createMessage(message: INewMessage) {
    if (this.db === undefined) return
    const messagesDoc = doc(collection(this.db, "messages"))

    setDoc(messagesDoc, {
      ...message,
      msgIndex: increment(1),
      createdAt: new Date().getTime(),
    })
  }

  getMessages(lastMsgIndex: number | null) {
    if (this.db === undefined) return {}
    const messagesDoc = collection(this.db, "messages")

    const messagesQuery = query(
      messagesDoc,
      where("reviewed", "==", true),
      orderBy("createdAt", "desc"),
      limit(PAGE_SIZE)
    )

    return { messagesQuery, onSnapshot }
  }
}

export default ChatService
