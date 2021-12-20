import React, { useEffect, useState } from 'react'
import PublicMovieService from "../../services/movie.service"
import { convertDateTimeToDate, convertNumberToTime } from "../../helpers"
// import Container from '../Container'
import Content from './components/content/content'
import Nav from './components/nav/nav'
import Banner from './components/banner/banner'
import styles from './home.module.css'
import useDocumentTitle from '../../helpers/useDocumentTitle'

export default function Movie() {
    const [movieLatest, setMovieLatest] = useState({});
    const [moviePopular, setMoviePopular] = useState({});
    const [moviePopularOne, setMoviePopularOne] = useState({});

    useDocumentTitle('Review Movie DTU')

    const getMovie = (page, page_size) => {
        PublicMovieService.getPagination(page, page_size)
        .then(response => {
            setMovieLatest(response.data.results);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const getMoviePopularOne = (page, page_size) => {
        PublicMovieService.getPopular(page, page_size)
        .then(response => {
            setMoviePopularOne(response.data.results);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const getMoviePopular = (page, page_size) => {
        PublicMovieService.getPopular(page, page_size)
        .then(response => {
            setMoviePopular(response.data.results);
        })
        .catch(e => {
            console.log(e);
        });
    };
    
    useEffect(() => {
        getMovie(1, 6);
        getMoviePopular(1, 5);
        getMoviePopularOne(1, 1);
    }, []);

    return (
        <React.Fragment>
            <Banner movie={moviePopularOne} />
            <Nav movie={moviePopular}></Nav>
            {/* <Container/> */}
            <div className="grid content">
                <div className="grid wide content-fiml-border">
                    <div className="row content-fiml-row">
                        {movieLatest.length > 0 && movieLatest.map((movie, index) => {
                            return (
                                <a href={"movie/" + movie.slug} className="col l-4 c-12 m-6 content-fiml mt-48">
                                    <div className="content__fiml-hot">
                                        <img src={
                                            (movie.domain === "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces")
                                                ? ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path)
                                                : movie.domain + movie.poster_path
                                            } alt="poster path" className="content__fiml-img" />
                                        <div className="content__fiml-hot-status">
                                            <h3 className="content__fiml-name-vn webkit">
                                                {movie.title}
                                            </h3>
                                            <span className="content__fiml-name-eng webkit">
                                                {movie.original_title}
                                            </span>
                                            <span className="content__fiml-view">
                                                Lượt rating: {movie.vote_count} 
                                            </span>
                                            <div className="content__fiml-rating">
                                                <i className={"rating--" + (movie.vote_average >= 2 ? "have" : "no") + " fas fa-star"} />
                                                <i className={"rating--" + (movie.vote_average >= 4 ? "have" : "no") + " fas fa-star"} />
                                                <i className={"rating--" + (movie.vote_average >= 5 ? "have" : "no") + " fas fa-star"} />
                                                <i className={"rating--" + (movie.vote_average >= 6 ? "have" : "no") + " fas fa-star"} />
                                                <i className={"rating--" + (movie.vote_average >= 10 ? "have" : "no") + " fas fa-star"} />
                                            </div>
                                        </div>
                                        <div className="status content__fiml-status">
                                            <span className="content__fiml-status-sub">
                                                {movie.original_language}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Content/>
        </React.Fragment>
    )
}