import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: "blog-kaioum-2e74e.firebaseapp.com",
    projectId: "blog-kaioum-2e74e",
    storageBucket: "blog-kaioum-2e74e.firebasestorage.app",
    messagingSenderId: "346671475954",
    appId: "1:346671475954:web:f7f7a3ed5ed1c04664346b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);