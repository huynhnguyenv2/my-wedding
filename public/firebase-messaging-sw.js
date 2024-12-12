// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js")

// const firebaseConfig = {
//   apiKey: 'AIzaSyCRwcC5_E3jHrYZQZz3i7LtjpH4H04XYMA',
//   authDomain: 'koomimarket-procure.firebaseapp.com',
//   databaseURL:
//     'https://koomimarket-procure-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'koomimarket-procure',
//   storageBucket: 'koomimarket-procure.appspot.com',
//   messagingSenderId: '805147007611',
//   appId: '1:805147007611:web:f748f38dbccf65ece720de',
//   measurementId: 'G-6S7KD45D7B',
// }
const firebaseConfig = {
  apiKey: "AIzaSyDnqBk4dWnvOfGepxNt_DhW3ykItVJKd_A",
  authDomain: "my-wedding-app-5effc.firebaseapp.com",
  projectId: "my-wedding-app-5effc",
  storageBucket: "my-wedding-app-5effc.firebasestorage.app",
  messagingSenderId: "181559480291",
  appId: "1:181559480291:web:2b4826b1c979fef09d5ad6",
  measurementId: "G-VKZ5QBQ960",
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  )

  const notificationTitle = payload.data.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener("notificationclick", (event) => {
  console.log("Click:", event)
  event.notification.close()

  event.waitUntil(
    clients
      .matchAll({ type: "window" })
      .then((clientList) => {
        console.log("what is client list", clientList)
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus()
        }
        if (clients.openWindow && Boolean(event.notification.data.link_url))
          return clients.openWindow(event.notification.data.link_url)
      })
      .catch((err) => {
        console.log("There was an error waitUntil:", err)
      })
  )
})
