import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import UserContext from "./Context/UserContext"
import { ScrollRestoration } from "react-router-dom";

function App() {

  return (
    <>
    <UserContext>
    <ScrollRestoration />
      <Header/>
      <Main/>
      <Footer/>
      </UserContext>
    </>
  )
}

export default App
