import React, { useState } from "react";
import "./App.css"; // Burada özel stil dosyanızı ekleyebilirsiniz.

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setError(""); // Hata mesajını sıfırla
    alert(`Hoş geldiniz, ${email}!`); // Gerçek projede burada API çağrısı yapılır.
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default App;
