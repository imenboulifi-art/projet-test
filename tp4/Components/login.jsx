
import {useState} from "react";

function login()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[erreur,setErreur]=useState("");

    function handleSubmit(e){
        e.preventDefault();

        let newErreur={};

        if(email.trim()==="")
            newErreur.email="veuillez introduire un email !"
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
            newErreur.email="veuillez introduire un email valide !";

        if (password.trim()==="")
            newErreur.password="veuillez introduire le mot de passe "
        else if(password.length<8)
            newErreur.password="la taille du mot de passe doit etre superieur ou egale a 8 !";
        else if (!/[A-Z]/.test(password))
            newErreur.password="vottre mot de passe doit contenir au moins une lettre majiscule !";
        else if (!/[0-9]/.test(password))
            newErreur.password="vottre mot de passe doit contenir au moins une chiffre!";
        else if (!/[^A-Za-z0-9]/.test(password))
            newErreur.password="vottre mot de passe doit contenir au moins un caractere special !";

        if(Object.keys(newErreur).length===0){
            alert ("enregistrement avec succes !");
            console.log("email:"+email+"password"+password);
        }
        else {
            setErreur(newErreur);
            console.log(newErreur);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">mail</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default login;
