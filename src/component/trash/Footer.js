import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="grid footer">
                <div className="grid wide footer__wide">
                    <div className="row footer__row">
                        <div className="col l-3 m-4">
                            <h3 className="footer__name">
                                THE BASICS
                            </h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        About Review Movie DTU
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-4">
                            <h3 className="footer__name">
                                THE MOVIE
                            </h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <span href className="footer__item-link">
                                        Popular
                                    </span>
                                </li>
                                <li className="footer__item">
                                    <span href className="footer__item-linkk footer__item-link">
                                        Upcoming
                                    </span>
                                </li>
                                <li className="footer__item">
                                    <a href="#" className="footer__item-link">
                                        Top Rated
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-3 m-4">
                            <h3 className="footer__name">
                                COMMUNITY
                            </h3>
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                    Guidelines
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                    Discussions
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                    Leaderboard
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a href className="footer__item-link">
                                    Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>

        )
    }
}
