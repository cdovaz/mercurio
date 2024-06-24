// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBwkMYTHKzSQc_EEFpbLthSPQz0Qtrqz-Y",
    authDomain: "mapinguari-90117.firebaseapp.com",
    projectId: "mapinguari-90117",
    storageBucket: "mapinguari-90117.appspot.com",
    messagingSenderId: "1001914017693",
    appId: "1:1001914017693:web:a7cb0c3ca211a883967174",
    measurementId: "G-9D5TTXK8BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export function createAccount(email: string, password: string, customData: any) {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;


        updateProfile(user, customData).then(() => {

        }).catch((error) => {
            console.log(error.message);
        })

    }).catch((error) => {
        console.log(error.message);
    })
}
export async function login(email: string, password: string) {
    var value
    await signInWithEmailAndPassword(auth, email, password).then(() => {
        value = true

    }).catch((error) => {
        console.log(error.message)
        value = false
    })
    return value
}

export async function getData(){
    const db = getFirestore(app);
    var ref = collection(db, 'data');
    var dataQuery = query(ref);
    const snapshot = await getDocs(dataQuery);
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
}
