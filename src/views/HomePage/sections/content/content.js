import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import styles from './content.module.css';
import PublicMovieService from "../../../../services/movie.service"

export default function Content() {
    
    const [movieAction, setMovieAction] = useState({});
    const [movieScienceFiction, setMovieScienceFiction] = useState({});
    const [movieDrama, setMovieDrama] = useState({});

    const getMovie = (page, page_size, genre) => {
        PublicMovieService.getPagination(page, page_size, genre)
        .then(response => {
            if (genre === "Action") {
                setMovieAction(response.data.results);
            } else if (genre === "Science Fiction") {
                setMovieScienceFiction(response.data.results);
            } else if (genre === "Drama") {
                setMovieDrama(response.data.results);
            }
        })
        .catch(e => {
            console.log(e);
        });
    };
    

    
    useEffect(() => {
        getMovie(1, 6, "Action");
        getMovie(1, 6, "Science Fiction");
        getMovie(1, 6, "Drama");
    }, []);

    return (
        <div className="grid content__footer">
            <div className="grid wide content__footer-wide">
                <div className="row content__footer-row">
                    <header className="content__footer-header">
                        <i className="content__footer-header-icon fas fa-moon" />
                        <h2 className="content__footer-header-name">
                            Phim hành động
                        </h2>
                    </header>
                    {movieAction.length > 0 && movieAction.map((movie, index) => {
                        return (
                            <div className="col l-2 m-4 c-6" key={movie.title + index}>
                                <a className="content__item" href={"/movie/" + movie.slug}>
                                    <img
                                        src={movie.domain && movie.poster_path
                                            ? ((movie.domain === "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces")
                                                    ? ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path)
                                                    : movie.domain + movie.poster_path)
                                            : './assets/img/default.jpg'}
                                        alt=""
                                        className="content__list-img" />
                                    <h3 className="content__item-name-vn webkit">
                                        {movie.title}
                                    </h3>
                                    <span className="content__item-name-eng webkit">
                                        {movie.original_title}
                                    </span>
                                    <div className="content__item-status">
                                        {/* <span className="content__item-status-view">
                                            Lượt xem: 10219
                                        </span> */}
                                        <div className="content__item-status-rating">
                                            <i className={"rating--" + (movie.vote_average >= 2 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 4 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 5 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 6 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 10 ? "have" : "no") + " fas fa-star"} />
                                        </div>
                                    </div>
                                    <div className="status content__footer-status">
                                        <span className="content__item-status-sub">{movie.original_language}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                    <header className="content__footer-header">
                        <i className="content__footer-header-icon fas fa-moon" />
                        <h2 className="content__footer-header-name">
                            Phim viễn tưởng
                        </h2>
                    </header>
                    {movieScienceFiction.length > 0 && movieScienceFiction.map((movie, index) => {
                        return (
                            <div className="col l-2 m-4 c-6" key={movie.title + index}>
                                <a className="content__item"  href={"/movie/" + movie.slug}>
                                    <img
                                        src={movie.domain && movie.poster_path
                                            ? ((movie.domain === "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces")
                                                    ? ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path)
                                                    : movie.domain + movie.poster_path)
                                            : './assets/img/default.jpg'}
                                        alt=""
                                        className="content__list-img" />
                                    <h3 className="content__item-name-vn webkit">
                                        {movie.title}
                                    </h3>
                                    <span className="content__item-name-eng webkit">
                                        {movie.original_title}
                                    </span>
                                    <div className="content__item-status">
                                        {/* <span className="content__item-status-view">
                                            Lượt xem: 10219
                                        </span> */}
                                        <div className="content__item-status-rating">
                                            <i className={"rating--" + (movie.vote_average >= 2 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 4 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 5 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 6 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 10 ? "have" : "no") + " fas fa-star"} />
                                        </div>
                                    </div>
                                    <div className="status content__footer-status">
                                        <span className="content__item-status-sub">{movie.original_language}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                    <header className="content__footer-header">
                        <i className="content__footer-header-icon fas fa-moon" />
                        <h2 className="content__footer-header-name">
                            Phim cổ trang
                        </h2>
                    </header>
                    {movieDrama.length > 0 && movieDrama.map((movie, index) => {
                        return (
                            <div className="col l-2 m-4 c-6" key={movie.title + index}>
                                <a className="content__item"  href={"/movie/" + movie.slug}>
                                    <img
                                        src={movie.domain && movie.poster_path
                                            ? ((movie.domain === "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces")
                                                    ? ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path)
                                                    : movie.domain + movie.poster_path)
                                            : './assets/img/default.jpg'}
                                        alt=""
                                        className="content__list-img" />
                                    <h3 className="content__item-name-vn webkit">
                                        {movie.title}
                                    </h3>
                                    <span className="content__item-name-eng webkit">
                                        {movie.original_title}
                                    </span>
                                    <div className="content__item-status">
                                        {/* <span className="content__item-status-view">
                                            Lượt xem: 10219
                                        </span> */}
                                        <div className="content__item-status-rating">
                                            <i className={"rating--" + (movie.vote_average >= 2 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 4 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 5 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 6 ? "have" : "no") + " fas fa-star"} />
                                            <i className={"rating--" + (movie.vote_average >= 10 ? "have" : "no") + " fas fa-star"} />
                                        </div>
                                    </div>
                                    <div className="status content__footer-status">
                                        <span className="content__item-status-sub">{movie.original_language}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
