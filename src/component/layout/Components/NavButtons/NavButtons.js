import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import LogButton from '../LogButton/LogButton';
import styles from './NavButtons.module.css';
import { logoutEvent } from '../../../../services/Auth.service';

const NavButtons = ({ isLogined }) => {
    const history = useNavigate();
    const elms = document.querySelectorAll(".navbar .dropdown-menu");
    const [ value, setValue ] = useState();

    const handleLogout = () => {
        logoutEvent();
        Array.from(elms).forEach((x) => {
            x.style.display = "none";
        })
        history('/profile');
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            {/* Top navbar */}
            <nav className="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
            <div className="container-fluid">
                {/* Brand */}
                <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="/" >Home</a>
                {/* Form */}
                <form className="navbar-search navbar-search-dark d-none form-inline mr-3 d-md-flex ml-lg-auto">
                <div className="form-group mb-0">
                    <div className="input-group input-group-alternative">
                    <div className="input-group-prepend">
                        <span className="input-group-text" style={{cursor: "pointer"}} onClick={() => {history('/filter?q=' + value); window.location.reload()}} ><i className="fas fa-search"></i></span>
                    </div>
                    <input className="form-control" placeholder="Search" type="text" value={value} onChange={handleChange} />
                    </div>
                </div>
                </form>
                {/* User */}
                <ul className="navbar-nav align-items-center d-md-flex">
                <li className="nav-item dropdown">
                    <LogButton isLogined={isLogined} />
                    <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" style={{display: "none",}}>
                        <div className=" dropdown-header noti-title">
                            <h6 className="text-overflow m-0">Welcome!</h6>
                        </div>
                        <a href="/profile" className="dropdown-item">
                            <i className="ni ni-single-02"></i>
                            <span>My profile</span>
                        </a>
                        {/* <a href="/assets/img/logo.jpg" className="dropdown-item">
                            <i className="ni ni-settings-gear-65"></i>
                            <span>Settings</span>
                        </a>
                        <a href="/assets/img/logo.jpg" className="dropdown-item">
                            <i className="ni ni-calendar-grid-58"></i>
                            <span>Activity</span>
                        </a>
                        <a href="/assets/img/logo.jpg" className="dropdown-item">
                            <i className="ni ni-support-16"></i>
                            <span>Support</span>
                        </a> */}
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item" onClick={handleLogout}>
                            <i className="ni ni-user-run"></i>
                            <span>Logout</span>
                        </a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>

        {/* <div className="header__list">
            <ul className="header__menu-items">
                <li className="header__menu-item header__menu-item-category">
                    <Link to="filter" className="header__menu-item-link">Thể Loại</Link>

                    <i className="header__menu-item-icon fas fa-chevron-down" />
                    <ul className="header__menu-nav .header__menu-col-5 header__menu-nav-category">
                        <li className="header__menu-nav-item">
                            <a href="/filter?genre=Action" className="header__menu-nav-link">Phim hành động</a>
                        </li>
                        <li className="header__menu-nav-item">
                            <a href="/filter?genre=Science Fiction" className="header__menu-nav-link">Phim viễn tưởng</a>
                        </li>
                        <li className="header__menu-nav-item">
                            <a href="/filter?genre=Popular" className="header__menu-nav-link">Phim phổ  biến</a>
                        </li>
                        <li className="header__menu-nav-item">
                            <a href="/filter?genre=Up Comming" className="header__menu-nav-link">Phim sắp chiếu</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="header__user">
            <div className="header__user-search">
                <input type="text" className="header__user-input" placeholder="Nhập từ khóa tìm kiếm" />
                <i className="header__user-search-icon fas fa-search" />
            </div> */}
            {/* responsive mobile & tablet */}
            {/* <label htmlFor="nav-tablet-mobile-input" className="header__list-mobile-tablet-bar">
                <i className="header__list-mobile-tablet-bar-icon fas fa-bars" />
                <input type="checkbox" hidden name id="nav-tablet-mobile-input" className="nav-tablet-mobile-checked" />
                <label htmlFor="nav-tablet-mobile-input" className="header__list-mobile-tablet-block">
                </label>
                <nav className="nav-mobile-tablet">
                    <label htmlFor="nav-tablet-mobile-input" className="nav-mobile-tablet-button">
                        <i className="nav-mobile-tablet-icon fas fa-window-close" />
                    </label>
                    <ul className="header__list-mobile-tablet-list">
                        <li className="header__list-mobile-tablet-item">
                        <input type="checkbox" hidden name id="header__list-mobile-tablet-item-input" className="header__list-mobile-tablet-item-btn" />
                        <label htmlFor="header__list-mobile-tablet-item-input" className="header__list-mobile-tablet-item-checked">Thể loại</label>
                        <i className="header__list-mobile-tablet-icon fas fa-sort-down" />
                        
                        <ul className="header__list-mobile-tablet-sub-list">
                            <li className="header__list-mobile-tablet-sub-item">
                                <a href="/filter?genre=Action" className="header__list-mobile-tablet-sub-item-link">Phim hành động</a>
                            </li>
                            <li className="header__list-mobile-tablet-sub-item">
                                <a href="/filter?genre=Science Fiction" className="header__list-mobile-tablet-sub-item-link">Phim viễn tưởng</a>
                            </li>
                            <li className="header__list-mobile-tablet-sub-item">
                                <a href="/filter?genre=Popular" className="header__list-mobile-tablet-sub-item-link">Phim phổ  biến</a>
                            </li>
                            <li className="header__list-mobile-tablet-sub-item">
                                <a href="/filter?genre=Up Comming" className="header__list-mobile-tablet-sub-item-link">Phim sắp chiếu</a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </nav>
            </label>
        </div> */}
        </>
    );
};

export default NavButtons;
