import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import Projects from "./pages/Projects"
import FooterCom from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
      <FooterCom></FooterCom>
    </BrowserRouter>
  )
}

export default App