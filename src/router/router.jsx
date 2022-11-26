import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import ViewHome from "../components/main/home/ViewHome"
import About from "../components/main/company/About"
import ContactUs from "../components/main/company/ContactUs"
import Support from "../components/main/company/Support"
import TermsOfUse from "../components/main/company/TermsOfUse"
import PrivacyPolicy from "../components/main/company/PrivacyPolicy"
import MovieContainer from "../components/main/movieDetail/MovieContainer"
import FavoritesList from "../components/main/favorites/FavoritesList"
import Profile from "../components/main/Profile"
import Signup from "../components/forms/Signup"
import Login from "../components/forms/Login"
import NowPlayingContainer from "../components/main/moviesByFilter/NowPlayingContainer"
import ViewPopular from "../components/main/moviesByFilter/ViewPopular"
import ViewNewest from "../components/main/moviesByFilter/ViewNewest"
import ViewTopRated from "../components/main/moviesByFilter/ViewTopRated"

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            errorElement: "Error",
            children: [
                {
                    path: "/",
                    element: <ViewHome/> 
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
                    element: <ViewPopular/>
                },
                {
                    path: "/movies/newest",
                    element: <ViewNewest/>
                },
                {
                    path: "/movies/top-rated",
                    element: <ViewTopRated/>
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