import Header from "@/components/Header/Header"
import styles from "./Login.module.css"
import { signIn } from "next-auth/react"

export default function Login(){

    async function submitForm(e){
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        const result = await signIn('credentials', {
            email: email,
            password: password,
            redirect: false
        })

        if (!result) {
            return alert('Erro ao fazer login');
        }

        window.location.href = "/";
    }

    return(
        <>
            <Header title={"LOGIN"} />
            <form className={styles.mainContainer} onSubmit={(e)=>submitForm(e)}>
                <input type="text" name="email" placeholder="E-mail"/>
                <input type="password" name="password" placeholder="Senha"/>
                <button>ENTRAR</button>
            </form>
        </>
    )
}