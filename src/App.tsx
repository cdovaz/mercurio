import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./screens/Login/login"
import Home from "./screens/home/home"
import CreateAccount from "./screens/Cadastro/createAccount"
import styles from'./App.module.css'
import Menu from "./screens/Menu/menu"

function App() {

  return (
    <div className={styles.app}>
     <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/cadastro" Component={CreateAccount} />
        <Route path="/" Component={Menu} />
        <Route path="/menu" Component={Home}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
