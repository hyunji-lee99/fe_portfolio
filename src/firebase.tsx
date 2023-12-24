// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const MessagesCollectionRef=collection(db, 'messages');


export async function getMessage(){
  const MessageData=await getDocs(MessagesCollectionRef);
  return MessageData;
}

type postMessageProps={
  author:string,
  content:string,
  createdAt:number
}

export async function postMessage(props:postMessageProps){
  const DocRef=await addDoc(MessagesCollectionRef, {
    author: props.author,
    content: props.content,
    createdAt: props.createdAt
  });
}





