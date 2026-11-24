import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erreur, setErreur] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErreur = {};

    if (email.trim() === "") {
      newErreur.email = "Veuillez introduire un email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErreur.email = "Veuillez introduire un email valide !";
    }

    if (password.trim() === "") {
      newErreur.password = "Veuillez introduire le mot de passe !";
    } else if (password.length < 8) {
      newErreur.password =
        "Le mot de passe doit contenir au moins 8 caractères !";
    } else if (!/[A-Z]/.test(password)) {
      newErreur.password =
        "Le mot de passe doit contenir au moins une lettre majuscule !";
    } else if (!/[0-9]/.test(password)) {
      newErreur.password = "Le mot de passe doit contenir au moins un chiffre !";
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      newErreur.password =
        "Le mot de passe doit contenir au moins un caractère spécial !";
    }

    setErreur(newErreur);

    if (Object.keys(newErreur).length === 0) {
      alert("Enregistrement avec succès !");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="login-card" id="inscription">
      <h2>Créer un compte</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="champ">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Entrer votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {erreur.email && <p className="erreur">{erreur.email}</p>}
        </div>

        <div className="champ">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Entrer votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {erreur.password && <p className="erreur">{erreur.password}</p>}
        </div>

        <button type="submit" className="btn-inscrire">
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default Login;