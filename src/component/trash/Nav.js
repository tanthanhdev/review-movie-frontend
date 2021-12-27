import React, { Component } from 'react'
import {
    BrowserRouter,
    Link
  } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <div className="grid nav">
                <div className="grid wide sub-nav">
                    <div className="row">
                        <Link to="Watch" className="col l-2-4 m-4 c-6">
                            <div className="nav__item">
                                <div className="nav__item-img" style={{ backgroundImage: 'url(./assets/img/langkhach.jpg)' }}>
                                </div>
                                <span className="nav__status">
                                    HD Vietsub
                                </span>
                                <div className="nav__bottom">
                                    <h3 className="nav__bottom-name--vn nav__bottom-name">
                                        Lãng Khách Kenshin
                                    </h3>
                                    <h3 className="nav__bottom-name--eng nav__bottom-name">
                                        Wanderer Kenshin
                                    </h3>
                                </div>
                            </div>
                        </Link>
                        <a className="col l-2-4 m-4 c-6" href="#">
                            <div className="nav__item">
                                <div className="nav__item-img" style={{ backgroundImage: 'url(./assets/img/xac_song_phan11.jpg)' }}>
                                </div>
                                <span className="nav__status">
                                    HD Tập 1 VietSub
                                </span>
                                <div className="nav__bottom">
                                    <h3 className="nav__bottom-name--vn nav__bottom-name">
                                        Xác sống: phần 11
                                    </h3>
                                    <h3 className="nav__bottom-name--eng nav__bottom-name">
                                        The Walking Dead Season 11
                                    </h3>
                                </div>
                            </div>
                        </a>
                        <a className="col l-2-4 m-4 c-6" href="#">
                            <div className="nav__item">
                                <div className="nav__item-img" style={{ backgroundImage: 'url(./assets/img/bot_hon_3.jpg)' }}>
                                </div>
                                <span className="nav__status">
                                    HD Vietsub
                                </span>
                                <div className="nav__bottom">
                                    <h3 className="nav__bottom-name--vn nav__bottom-name">
                                        Bốt hôn 3 The Kissing Booth 3The Kissing Booth 3
                                    </h3>
                                    <h3 className="nav__bottom-name--eng nav__bottom-name">
                                        The Kissing Booth 3 The Kissing Booth 3The Kissing Booth 3The Kissing Booth 3The Kissing Booth 3The Kissing Booth 3
                                    </h3>
                                </div>
                            </div>
                        </a>
                        <a className="col l-2-4 m-4 c-6" href="#">
                            <div className="nav__item">
                                <div className="nav__item-img" style={{ backgroundImage: 'url(./assets/img/naruto.jpg)' }}>
                                </div>
                                <span className="nav__status">
                                    HD Full 500/500
                                </span>
                                <div className="nav__bottom">
                                    <h3 className="nav__bottom-name--vn nav__bottom-name">
                                        Naruto shippuden
                                    </h3>
                                    <h3 className="nav__bottom-name--eng nav__bottom-name">
                                        Naruto shippuden
                                    </h3>
                                </div>
                            </div>
                        </a>
                        <a className="col l-2-4 m-4 c-6" href="#">
                            <div className="nav__item">
                                <div className="nav__item-img" style={{ backgroundImage: 'url(./assets/img/ban_cua_con_gai.jpg)' }}>
                                </div>
                                <span className="nav__status">
                                    HD Vietsub
                                </span>
                                <div className="nav__bottom">
                                    <h3 className="nav__bottom-name--vn nav__bottom-name nav__bottom-name">
                                        Bạn của con gái
                                    </h3>
                                    <h3 className="nav__bottom-name--eng nav__bottom-name nav__bottom-name">
                                        Daughter's friend
                                    </h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        )
    }
}
