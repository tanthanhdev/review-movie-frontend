import React, { Component } from 'react';
import {
    BrowserRouter,
    Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
class Header extends Component {
    render() {
        return (
                <header id="header" className="header">
                    <Link to="/" className="header__logo">
                        <img className="header__logo-img" src="../assets/img/logo.jpg" alt="Logo" />
                    </Link>
                    <div className="header__list">
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
                            {/* <li className="header__menu-item header__menu-item-anime">
                                <a href className="header__menu-item-link">Anime</a>
                                <i className="header__menu-item-icon fas fa-chevron-down" />
                                <ul className="header__menu-nav header__menu-nav-anime">
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Tổng hợp</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Nhạc phim</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">AMV</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Video truyện</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">One Piece</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Naruto</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Boruto</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Conan</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Doraemon</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Dragon Ball</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">One punch man</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Black clover</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Isekai</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Attack on Titan</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Thất đại tội</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__menu-item header__menu-item-odd">
                                <a href className="header__menu-item-link">Phim Lẻ</a>
                                <i className="header__menu-item-icon fas fa-chevron-down" />
                                <ul className="header__menu-nav header__menu-nav-odd">
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2021</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2020</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2019</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2018</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2017</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2016</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2015</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2014</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2013</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim lẻ 2012 về trước</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__menu-item header__menu-item-series">
                                <a href className="header__menu-item-link">Phim Bộ</a>
                                <i className="header__menu-item-icon fas fa-chevron-down" />
                                <ul className="header__menu-nav header__menu-nav-series">
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim bộ Hàn Quốc</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim bộ Trung Quốc</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim bộ Nhật Bản</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim bộ Việt Nam</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim bộ Thái Lan</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Phim bộ Khác</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__menu-item header__menu-item-country">
                                <a href className="header__menu-item-link">Quốc gia</a>
                                <i className="header__menu-item-icon fas fa-chevron-down" />
                                <ul className="header__menu-nav header__menu-nav-country">
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Nhật Bản</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Âu Mỹ</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Trung Quốc</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Hàn Quốc</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">VietSub</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Thái Lan</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">Việt Nam</a>
                                    </li>
                                    <li className="header__menu-nav-item">
                                        <a href className="header__menu-nav-link">đề cử</a>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <div className="header__user">
                        <div className="header__user-search">
                            <input type="text" className="header__user-input" placeholder="Nhập từ khóa tìm kiếm" />
                            <i className="header__user-search-icon fas fa-search" />
                        </div>
                        {/* responsive mobile & tablet */}
                        <label htmlFor="nav-tablet-mobile-input" className="header__list-mobile-tablet-bar">
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
                                    {/* <li className="header__list-mobile-tablet-item">
                                        <input type="checkbox" hidden name id="Anime" className="anime" />
                                        <label htmlFor="Anime">Anime</label>
                                        <i className="header__list-mobile-tablet-icon fas fa-sort-down" />
                                        <ul className="header__list-mobile-tablet-sub-list-anime">
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Tổng hợp
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Nhạc phim
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    AMV
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Video truyện
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    One Piece
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Naruto
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Boruto
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Conan
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Doraemon
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Dragon Ball
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    one punch man
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Black clover
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Isekai
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Attack on tion
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Thất đại tội
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header__list-mobile-tablet-item">
                                        <input type="checkbox" hidden name id="phimle" className="phimle" />
                                        <label htmlFor="phimle">Phim lẻ</label>
                                        <i className="header__list-mobile-tablet-icon fas fa-sort-down" />
                                        <ul className="header__list-mobile-tablet-sub-list-phimle">
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2021
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2020
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2019
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2018
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2017
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2016
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2015
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim lẻ 2014
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Về trước
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header__list-mobile-tablet-item">
                                        <input type="checkbox" hidden name id="phimbo" className="phimbo" />
                                        <label htmlFor="phimbo">Phim bộ</label>
                                        <i className="header__list-mobile-tablet-icon fas fa-sort-down" />
                                        <ul className="header__list-mobile-tablet-sub-list-phimbo">
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim bộ Hàn Quốc
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim bộ Trung Quốc
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim bộ Nhật Bản
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim bộ Việt Nam
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim bộ Thái Lan
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Phim bộ khác
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header__list-mobile-tablet-item">
                                        <input type="checkbox" hidden name id="phim18" className="phim18" />
                                        <label htmlFor="phim18">Phim 18+</label>
                                        <i className="header__list-mobile-tablet-icon fas fa-sort-down" />
                                        <ul className="header__list-mobile-tablet-sub-list-phim18">
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Hàn Quốc
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Trung Quốc
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Nhật Bản
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Việt Nam
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Thái Lan
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Âu Mỹ
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Vietsub
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    18+ Đề cử
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header__list-mobile-tablet-item">
                                        <input type="checkbox" hidden name id="phimquocgia" className="phimquocgia" />
                                        <label htmlFor="phimquocgia">Quốc gia</label>
                                        <i className="header__list-mobile-tablet-icon fas fa-sort-down" />
                                        <ul className="header__list-mobile-tablet-sub-list-phimquocgia">
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Hàn Quốc
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Trung Quốc
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Nhật Bản
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Việt Nam
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Thái Lan
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Âu Mỹ
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Vietsub
                                                </a>
                                            </li>
                                            <li className="header__list-mobile-tablet-sub-item">
                                                <a href className="header__list-mobile-tablet-sub-item-link">
                                                    Đề cử
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </nav>
                        </label>

                    </div>
                </header>
        );
    }
}

export default Header;