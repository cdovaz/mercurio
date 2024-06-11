// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, User } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, orderBy, limit, getDocs, addDoc, onSnapshot } from "firebase/firestore";


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
var user: User;


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
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        user = userCredential.user;
        value = true

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message)
        value = false
    })
    return value
}
export async function setUser(customData: { agrupamento: string; cpf: string; nome: any; dataDeNascimento: any; sexo: any; email: any; telefone: any; }) {
    const db = getFirestore();
    const docRef2 = doc(db, 'agrupamento', customData.agrupamento)
    var docGroup = {
        agrupamento: customData.agrupamento
    }
    await setDoc(docRef2, docGroup)
    const docRef = doc(db, 'users', customData.cpf);
    var docUser = {
        CPF: customData.cpf,
        nome: customData.nome,
        dataDeNascimento: customData.dataDeNascimento,
        sexo: customData.sexo,
        email: customData.email,
        telefone: customData.telefone,
        agrupamento: customData.agrupamento,
        registrador: user?.email ? user.email : 'Não acessível'
    }
    await setDoc(docRef, docUser).then(() => {
        return true;
    }).catch((error) => {
        console.log(error.message);
    })
}

export async function getGrouping() {
    const db = getFirestore(app);

    var ref = collection(db, "agrupamento");
    var agrupamentoQuery = query(ref, orderBy("agrupamento"))

    const snapshot = await getDocs(agrupamentoQuery);
    const data = snapshot.docs.map((doc) => doc.data());
    return data;

}
export async function getMembersOfAGrouping(group: unknown) {
    const db = getFirestore(app);

    var ref = collection(db, "users");
    var membersQuery = query(ref, where("agrupamento", "==", group))
    const snapshot = await getDocs(membersQuery);
    const data = snapshot.docs.map((doc) => doc.data());
    return data
}
export async function getAllUsers() {
    const db = getFirestore(app);

    var ref = collection(db, "users");
    var usersQuery = query(ref, orderBy("nome"))
    const snapshot = await getDocs(usersQuery);
    const data = snapshot.docs.map((doc) => doc.data());
    return data

}
