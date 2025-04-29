import { Header } from "../components/header";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navBar";
import { Footer } from "../components/footer";

export function Home(){

    return(
        <>

            <Header/>
            <NavBar/>
            <Outlet/> 
            <Footer/>
        </>
        

    )
}