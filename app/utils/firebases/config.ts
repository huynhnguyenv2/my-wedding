// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

interface FirebaseConfigType {
  fetching: number
  currentToken: string
  createdAt: number
  fetchToken: (cb: (token: string | null) => void) => void
  onMessageListener: (cb: (payload: any) => void) => void
}

class FirebaseConfig implements FirebaseConfigType {
  public firebaseApp: any
  private messaging: any
  private vapidKey: string | undefined
  static instance: FirebaseConfig | null = null

  constructor() {
    if (typeof navigator === 'undefined') return
    if (FirebaseConfig.instance) {
      return FirebaseConfig.instance
    }
    this.initialize()
    FirebaseConfig.instance = this
  }

  initialize() {
    this.firebaseApp = initializeApp(firebaseConfig)
    this.messaging = getMessaging(this.firebaseApp)
    this.vapidKey =
      'BI34EZKmrD_2otEKCSVGfht3ewebzO9RPtXu14ltwqLLnDFIHBmoDo5VpSIkLeKCE7qWpnGHcUKttRwlZdxMApI'
  }

  fetching = 0
  currentToken = ''
  createdAt = new Date().getTime()

  fetchToken = async (cb: (token: string | null) => void) => {
    try {
      if (this.currentToken || this.fetching == 1) return

      this.fetching = 1

      const currentToken = await getToken(this.messaging, {
        vapidKey: this.vapidKey,
      })

      if (currentToken) {
        this.fetching = 0
        this.currentToken = currentToken
        cb(this.currentToken)
      } else {
        console.log(
          'No registration token available. Request permission to generate one.',
        )
        cb(null)
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err)
    }
  }

  onMessageListener = (cb: (payload: any) => void) => {
    return onMessage(this.messaging, (payload) => {
      cb(payload)
    })
  }
}
const firebaseApp = new FirebaseConfig()
export default firebaseApp
