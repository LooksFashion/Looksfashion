import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (password === "looksadmin123") {
      localStorage.setItem("auth", "true")
      navigate("/admin")
    } else {
      alert("Senha incorreta")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-heading mb-4 text-center">Login Admin</h2>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2 w-full mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-dark text-white w-full py-2 rounded hover:bg-gold"
        >
          Entrar
        </button>
      </div>
    </div>
  )
}

export default Login
