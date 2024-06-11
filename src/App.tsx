import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./screens/Login/login"
import Home from "./screens/home/home"
import CreateAccount from "./screens/Cadastro/createAccount"
import styles from'./App.module.css'
import Menu from "./screens/Menu/menu"
import './index.css';

function App() {
  return (
    <div className={styles.app}>
     <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/main" Component={Menu} />
        <Route path="/login" Component={Login} />
        <Route path="/cadastro" Component={CreateAccount} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
