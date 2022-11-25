import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../components/main/home/Home"
import About from "../components/main/company/About"
import ContactUs from "../components/main/company/ContactUs"
import Support from "../components/main/company/Support"
import TermsOfUse from "../components/main/company/TermsOfUse"
import PrivacyPolicy from "../components/main/company/PrivacyPolicy"
import PopularContainer from "../components/main/moviesByFilter/PopularContainer"
import NewestContainer from "../components/main/moviesByFilter/NewestContainer"
import TopRatedContainer from "../components/main/moviesByFilter/TopRatedContainer"
import MovieContainer from "../components/main/movieDetail/MovieContainer"
import FavoritesList from "../components/main/favorites/FavoritesList"
import Profile from "../components/main/Profile"
import Signup from "../components/forms/Signup"
import Login from "../components/forms/Login"
import NowPlayingContainer from "../components/main/moviesByFilter/NowPlayingContainer"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            errorElement: "Error",
            children: [
                {
                    path: "/",
                    element: <Home/> 
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: "/contact-us",
                    element: <ContactUs/>
                },
                {
                    path: "/support",
                    element: <Support/>
                },
                {
                    path: "/terms-of-use",
                    element: <TermsOfUse/>
                },
                {
                    path: "/privacy-policy",
                    element: <PrivacyPolicy/>
                },
                {
                    path: "/movies",
                    element: <PopularContainer/>
                },
                {
                    path: "/movies/newest",
                    element: <NewestContainer/>
                },
                {
                    path: "/movies/top-rated",
                    element: <TopRatedContainer/>
                },
                {
                    path: "/movies/:genre",
                    element: "<genreContainer/>"
                },
                {
                    path: "/movie/:id",
                    element: <MovieContainer/>
                },
                {
                    path: "/movies/favorite",
                    element: <FavoritesList/>
                },
                {
                    path: "/profile",
                    element: <Profile/>
                },
                {
                    path: "/nowp",
                    element: <NowPlayingContainer/>
                }
            ]
        },
        {
            path: "/signup",
            element: <Signup/>
        },
        {
            path: "/login",
            element: <Login/>
        }

    ]
)

export default router