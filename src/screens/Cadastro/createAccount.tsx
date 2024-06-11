import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from '../../firebase/firebase';
import styles from '../Login/login.module.css';

export default function CreateAccount() {
    const navigate = useNavigate();
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const nameInput = document.getElementById("name") as HTMLInputElement;
            const emailInput = document.getElementById("email") as HTMLInputElement;
            const passwordInput = document.getElementById('senha') as HTMLInputElement;

            var customData = {
                nome: nameInput.value,
                email: emailInput.value
            }
            if (emailInput && passwordInput) {
                await createAccount(emailInput.value, passwordInput.value, customData);
            } else {
                console.error("Inputs não encontrados.");
            }

            navigate("/login")
        } catch (error: any) {
            console.log(error.message)
        }
    }


    return (
        <div className={styles.mainDiv}>
            <div className={styles.mainText}>
                <h1>
                    Dispositivo de Detecção de Mercúrio nos rios.
                </h1>
                <p>
                    Projeto que visa desenvolver um dispositivo que
                    faça a identificação rápida e eficiente da presença
                    de mercúrio nos rios.
                </p>
            </div>
            <div className={styles.mainInputs}>
                <h1>Cadastre-se</h1>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <label htmlFor="name">Nome</label>
                    <input className={styles.input} type="text" id="name" required />
                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" id="email" required />
                    <label htmlFor="senha">Senha</label>
                    <input className={styles.input} type="password" id="senha" required />
                    <button className={styles.button}>Criar conta</button>

                </form>
                <p className={styles.bottomText}>Já tem uma conta? <Link to="/login">Faça o Login</Link> </p>
            </div>
        </div>
    )
}