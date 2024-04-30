import React from 'react'
import { Navbar, Button, Dropdown } from 'react-bootstrap'
import Scrollbars from 'react-custom-scrollbars';
import { Link } from "react-router-dom";
import { BRAND_IMAGES } from '../../../assets/images/brand';
import { IMAGES } from '../../../assets/images/faces';
import { IconContext } from 'react-icons'
import { FaAlignLeft } from 'react-icons/fa'

const Header = () => {

    //leftsidemenu
    const openCloseSidebar = () => {
        document.querySelector("body")?.classList.toggle("sidenav-toggled");
    };
    // responsivesearch
    const responsivesearch = () => {
        document.querySelector(".navbar-form")?.classList.toggle("active");
    };
    return (
        <Navbar className="main-header side-header sticky nav nav-item">
            <div className="main-container container-fluid">
                <div className="main-header-left ">
                    <div className="responsive-logo">
                        <Link to={`/dashboard`} className="header-logo">
                            <img
                                src={BRAND_IMAGES.LOGO}
                                className="mobile-logo logo-1"
                                alt="logo"
                            />
                            <img
                                src={BRAND_IMAGES.LOGO_WHITE}
                                className="mobile-logo dark-logo-1"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div
                        className="app-sidebar__toggle"
                        data-bs-toggle="sidebar"
                        onClick={() => openCloseSidebar()}
                    >
                        <Link className="open-toggle" to="#">
                            <IconContext.Provider value={{ style: { lineHeight: '1.8 !important', fontSize: '2.5rem !important' } }}>
                                <FaAlignLeft />
                            </IconContext.Provider>
                            {/* <i className="header-icon fe fe-align-left"></i> */}
                        </Link>
                        <Link className="close-toggle" to="#">
                            <i className="header-icon fe fe-x"></i>
                        </Link>
                    </div>
                    <div className="logo-horizontal">
                        <Link to={`/dashboard`} className="header-logo">
                            <img
                                src={BRAND_IMAGES.LOGO}
                                className="mobile-logo logo-1"
                                alt="logo"
                            />
                            <img
                                src={BRAND_IMAGES.LOGO_WHITE}
                                className="mobile-logo dark-logo-1"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="main-header-center ms-4 d-sm-none d-md-none d-lg-block form-group">
                        <input
                            className="form-control"
                            placeholder="Search..."
                            type="search"
                        />
                        <Button variant="" className="btn">
                            <i className="fas fa-search"></i>
                        </Button>
                    </div>
                </div>
                <div className="main-header-right">
                    <Navbar.Toggle
                        className="navresponsive-toggler d-lg-none ms-auto"
                        type="button"
                    >
                        <span className="navbar-toggler-icon fe fe-more-vertical"></span>
                    </Navbar.Toggle>
                    <div className="mb-0 navbar navbar-expand-lg   navbar-nav-right responsive-navbar navbar-dark p-0">
                        <Navbar.Collapse className="collapse" id="navbarSupportedContent-4">
                            <ul className="nav nav-item header-icons navbar-nav-right ">
                                <Dropdown className="dropdown nav-item  main-header-message ">
                                    <Dropdown.Toggle className="new nav-link" variant="">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="header-icon-svgs"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                                        </svg>
                                        <span className="badge bg-secondary header-badge text-white">5</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="slid1">
                                        <div className="menu-header-content text-start border-bottom">
                                            <div className="d-flex">
                                                <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">
                                                    Messages
                                                </h6>
                                                <span className="badge badge-pill badge-warning ms-auto my-auto float-end">
                                                    Mark All Read
                                                </span>
                                            </div>
                                            <p className="dropdown-title-text subtext mb-0 op-6 pb-0 tx-12 ">
                                                You have 4 unread messages
                                            </p>
                                        </div>
                                        <Scrollbars style={{ height: 280 }}>
                                            <div className="main-message-list chat-scroll">
                                                <Dropdown.Item
                                                    href={`/pages/mail/chat`}
                                                    className="dropdown-item d-flex border-bottom"
                                                >
                                                    <img
                                                        className="  drop-img  cover-image  "
                                                        alt=""
                                                        src={IMAGES.FACES_3}
                                                    />
                                                    <span className="avatar-status bg-teal avatar-status1"></span>

                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Teri Dactyl</h5>
                                                        </div>
                                                        <p className="mb-0 desc">
                                                            I'm sorry but i'm not sure how to help you with
                                                            that......
                                                        </p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                                                            Mar 15 3:55 PM
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href={`/pages/mail/chat`}
                                                    className="dropdown-item d-flex border-bottom"
                                                >
                                                    <img
                                                        className="drop-img cover-image"
                                                        alt=""
                                                        src={IMAGES.FACES_2}
                                                    />
                                                    <span className="avatar-status bg-teal avatar-status2"></span>

                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Allie Grater</h5>
                                                        </div>
                                                        <p className="mb-0 desc">
                                                            All set ! Now, time to get to you now......
                                                        </p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                                                            Mar 06 01:12 AM
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href={`/pages/mail/chat`}
                                                    className="dropdown-item d-flex border-bottom"
                                                >
                                                    <img
                                                        className="drop-img cover-image"
                                                        alt=""
                                                        src={IMAGES.FACES_5}
                                                    />
                                                    <span className="avatar-status bg-teal avatar-status3"></span>

                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Aida Bugg</h5>
                                                        </div>
                                                        <p className="mb-0 desc">
                                                            Are you ready to pickup your Delivery...
                                                        </p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                                                            Feb 25 10:35 AM
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href={`/pages/mail/chat`}
                                                    className="dropdown-item d-flex border-bottom"
                                                >
                                                    <img
                                                        className="drop-img cover-image"
                                                        alt=""
                                                        src={IMAGES.FACES_5}
                                                    />
                                                    <span className="avatar-status bg-teal avatar-status4"></span>
                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">John Quil</h5>
                                                        </div>
                                                        <p className="mb-0 desc">
                                                            Here are some products ...
                                                        </p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                                                            Feb 12 05:12 PM
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    href={`/pages/mail/chat`}
                                                    className="dropdown-item d-flex border-bottom"
                                                >
                                                    <img
                                                        className="drop-img cover-image"
                                                        alt=""
                                                        src={IMAGES.FACES_5}
                                                    />
                                                    <span className="avatar-status bg-teal avatar-status5"></span>

                                                    <div className="wd-90p">
                                                        <div className="d-flex">
                                                            <h5 className="mb-0 name">Liz Erd</h5>
                                                        </div>
                                                        <p className="mb-0 desc">
                                                            I'm sorry but i'm not sure how...
                                                        </p>
                                                        <p className="time mb-0 text-start float-start ms-2 mt-2">
                                                            Jan 29 03:16 PM
                                                        </p>
                                                    </div>
                                                </Dropdown.Item>
                                            </div>
                                        </Scrollbars>
                                        <div className="text-center dropdown-footer">
                                            <Link
                                                className="btn btn-primary btn-sm btn-block text-center"
                                                to={`/pages/mail/chat`}
                                            >
                                                VIEW ALL
                                            </Link>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className=" nav-item main-header-notification d-flex">
                                    <Dropdown.Toggle className="new nav-link" variant="">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="header-icon-svgs"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" />
                                        </svg>
                                        <span className=" pulse"></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="slid1">
                                        <div className="menu-header-content text-start border-bottom">
                                            <div className="d-flex">
                                                <h6 className="dropdown-title mb-1 tx-15 font-weight-semibold">
                                                    Notifications
                                                </h6>
                                                <span className="badge badge-pill badge-warning ms-auto my-auto float-end">
                                                    Mark All Read
                                                </span>
                                            </div>
                                            <p className="dropdown-title-text subtext mb-0 op-6 pb-0 tx-12 ">
                                                You have 4 unread Notifications
                                            </p>
                                        </div>
                                        <Scrollbars style={{ height: 280 }}>
                                            <div className="main-notification-list Notification-scroll">
                                                <Dropdown.Item
                                                    className="d-flex p-3 border-bottom"
                                                    href={`/pages/mail/mail`}
                                                >
                                                    <div className="notifyimg bg-pink">
                                                        <i className="far fa-folder-open text-white"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">
                                                            New files available
                                                        </h5>
                                                        <div className="notification-subtext">
                                                            10 hour ago
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="d-flex p-3  border-bottom"
                                                    href={`/pages/mail/mail`}
                                                >
                                                    <div className="notifyimg bg-purple">
                                                        <i className="fab fa-delicious text-white"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">
                                                            Updates Available
                                                        </h5>
                                                        <div className="notification-subtext">
                                                            2 days ago
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="d-flex p-3 border-bottom"
                                                    href={`/pages/mail/mail`}
                                                >
                                                    <div className="notifyimg bg-success">
                                                        <i className="fa fa-cart-plus text-white"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">
                                                            New Order Received
                                                        </h5>
                                                        <div className="notification-subtext">
                                                            1 hour ago
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="d-flex p-3 border-bottom"
                                                    href={`/pages/mail/mail`}
                                                >
                                                    <div className="notifyimg bg-warning">
                                                        <i className="far fa-envelope-open text-white"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">
                                                            New review received
                                                        </h5>
                                                        <div className="notification-subtext">
                                                            1 day ago
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="d-flex p-3 border-bottom"
                                                    href={`/pages/mail/mail`}
                                                >
                                                    <div className="notifyimg bg-danger">
                                                        <i className="fab fa-wpforms text-white"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">
                                                            22 verified registrations
                                                        </h5>
                                                        <div className="notification-subtext">
                                                            2 hour ago
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted"></i>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="d-flex p-3 border-bottom"
                                                    href={`/pages/mail/mail`}
                                                >
                                                    <div className="">
                                                        <i className="far fa-check-square text-white notifyimg bg-success"></i>
                                                    </div>
                                                    <div className="ms-3">
                                                        <h5 className="notification-label mb-1">
                                                            Project has been approved
                                                        </h5>
                                                        <span className="notification-subtext">
                                                            4 hour ago
                                                        </span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <i className="las la-angle-right text-end text-muted"></i>
                                                    </div>
                                                </Dropdown.Item>
                                            </div>
                                        </Scrollbars>
                                        <div className="dropdown-footer">
                                            <Link
                                                className="btn btn-primary btn-sm btn-block"
                                                to={`/pages/mail/mail`}
                                            >
                                                VIEW ALL
                                            </Link>
                                        </div>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="main-profile-menu nav nav-item nav-link ps-lg-2">
                                    <Dropdown.Toggle
                                        className="new nav-link profile-user d-flex"
                                        variant=""
                                    >
                                        <img
                                            alt=""
                                            src={IMAGES.FACES_1}
                                            className=""
                                        />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <div className="menu-header-content p-3 border-bottom">
                                            <div className="d-flex wd-100p">
                                                <div className="main-img-user">
                                                    <img
                                                        alt=""
                                                        src={IMAGES.FACES_1}
                                                        className=""
                                                    />
                                                </div>
                                                <div className="ms-3 my-auto">
                                                    <h6 className="tx-15 font-weight-semibold mb-0">
                                                        Teri Dactyl
                                                    </h6>
                                                    <span className="dropdown-title-text subtext op-6  tx-12">
                                                        Premium Member
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Dropdown.Item className="dropdown-item" href={`/pages/profile`}>
                                            <i className="far fa-user-circle"></i>Profile
                                        </Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href={`/pages/mail/chat`}>
                                            <i className="far fa-smile"></i> chat
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            className="dropdown-item"
                                            href={`/pages/mail/readmail`}
                                        >
                                            <i className="far fa-envelope "></i>Inbox
                                        </Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href={`/pages/mail/mail`}>
                                            <i className="far fa-comment-dots"></i>Messages
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                            className="dropdown-item"
                                            href={`/pages/mail/mailsettings`}
                                        >
                                            <i className="far fa-sun"></i> Settings
                                        </Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item"
                                        // onClick={() => { auth.signOut(); routeChange() }} 
                                        >
                                            <i className="far fa-arrow-alt-circle-left"></i> Sign Out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </ul>
                        </Navbar.Collapse>
                    </div>
                </div>
            </div>
        </Navbar>
    )
}

export default Header