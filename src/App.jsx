import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"
import UserContext from "./Context/UserContext"
import { ScrollRestoration } from "react-router-dom";
import FavContext from "./Context/FavContext";

function App() {

  return (
    <>
    <UserContext>
    <ScrollRestoration />
    <FavContext>
      
      <Header/>
      <Main/>
      <Footer/>
      </FavContext>
      </UserContext>
    </>
  )
}

export default App
