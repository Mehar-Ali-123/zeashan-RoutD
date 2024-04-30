import React, { Fragment } from 'react'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'
import {
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import TopBar from '../../components/TopBar/TopBar';
import HeroCards from '../../components/HearoCards/HeroCards';
import RegularCard from '../../components/RegularCard/RegularCard';
import OrderDetails from '../../components/OrderDetails/OrderDetails';

const Layout = () => {
    //The created store
    document.querySelector("body")?.classList.add("ltr", "main-body", "app", "sidebar-mini");
    document.querySelector("body")?.classList.remove("error-page1", "bg-primary");

    const responsiveSidebarclose = () => {
        //leftsidemenu
        if (window.innerWidth < 992) {
            document.querySelector(".app")?.classList.remove("sidenav-toggled");
        }
        //rightsidebar
        document.querySelector(".sidebar-right")?.classList.remove("sidebar-open");
        //swichermainright
        document.querySelector(".demo_changer")?.classList.remove("active");
        let Rightside: any = document.querySelector(".demo_changer")
        Rightside.style.right = "-270px";
    };


    function Sidebargone(gone: any) {
        // If media query matches
        if (gone.matches) {
            document.querySelector("body")?.classList.add("sidebar-gone");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-gone");
            document.querySelector("body")?.classList.remove("sidenav-toggled");
        }
    }

    let gone = window.matchMedia("(max-width: 1024px)")
    Sidebargone(gone) // Call listener function at run time
    gone.addListener(Sidebargone)
    return (
        <Fragment>
            <div className="horizontalMenucontainer">
                <div className="page">
                    <div className="open">
                        <Header />
                        <Sidebar />
                    </div>
                    <div
                        className="main-content app-content"
                        onClick={() => { responsiveSidebarclose() }}
                    >
                        <div className="side-app">
                            <div
                                className="main-container container-fluid mt-5"
                            >
                               <TopBar/>
                               <HeroCards/>
                               <RegularCard/>
                               <OrderDetails/>
                                <i className="fab fa-500px"></i>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    {/* <RightSidebar />
                    <Switcher />
                    <Footer /> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Layout