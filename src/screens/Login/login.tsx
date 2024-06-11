import styles from './login.module.css'
import { login } from '../../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        
        try {

            const emailInput = document.getElementById("email") as HTMLInputElement;
            const passwordInput = document.getElementById('senha') as HTMLInputElement;
            if (emailInput && passwordInput) {
                await login(emailInput.value, passwordInput.value);
                navigate('/main')
            } else {
                console.error("Inputs não encontrados.");
            }

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
                <h1>Entre</h1>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <label htmlFor="email">Email</label>
                    <input className={styles.input} type="email" id="email" required />
                    <label htmlFor="senha">Senha</label>
                    <input className={styles.input} type="password" id="senha" required />
                    <button className={styles.button}>Entrar</button>

                </form>
                <p className={styles.bottomText}>Não possui cadastro? <Link to="/cadastro">Cadastre-se</Link></p>
            </div>
        </div>
    )
}