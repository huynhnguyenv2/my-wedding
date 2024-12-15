// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getMessaging, getToken, onMessage } from "firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyDnqBk4dWnvOfGepxNt_DhW3ykItVJKd_A",
  authDomain: "my-wedding-app-5effc.firebaseapp.com",
  projectId: "my-wedding-app-5effc",
  storageBucket: "my-wedding-app-5effc.firebasestorage.app",
  messagingSenderId: "181559480291",
  appId: "1:181559480291:web:2b4826b1c979fef09d5ad6",
  measurementId: "G-VKZ5QBQ960",
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
    if (typeof navigator === "undefined") return
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
      "BB1YxHDPPHtQSEuC9Ij21jNBx7Hvy5VK9jnahchn1npvFzN-JKQAcqikGdoymPHEcJPUUl5ZPtYkLLC_jDp6tlQ"
  }

  fetching = 0
  currentToken = ""
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
          "No registration token available. Request permission to generate one."
        )
        cb(null)
      }
    } catch (err) {
      console.log("An error occurred while retrieving token. ", err)
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
