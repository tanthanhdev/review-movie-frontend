import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import styles from './filter.module.css'
import PublicMovieService from "../../../../services/movie.service"
import useDocumentTitle from '../../../../helpers/useDocumentTitle'

export default function Filter() {
    const size = 6;
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(size);
    const queryParams = new URLSearchParams(window.location.search);
    const [value, setValue] = useState({
        genre: queryParams.get('genre') ? queryParams.get('genre') : '',
        query: queryParams.get('q') ? queryParams.get('q') : '',
        country: '',
    });
    const [movie, setMovie] = useState({});

    useDocumentTitle('Filter Movie — Review Movie DTU')

    const getMovie = (page, page_size, genre, english_name, query) => {
        PublicMovieService.getPagination(page, page_size, genre, english_name, query)
        .then(response => {
            setMovie(response.data.results);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const getMoviePopular = (page, page_size, english_name) => {
        PublicMovieService.getPopular(page, page_size, english_name)
        .then(response => {
            setMovie(response.data.results);
        })
        .catch(e => {
            console.log(e);
        });
    };

    useEffect(() => {
        console.log(value);
        if (value.genre === "Popular") {
            getMoviePopular(page, pageSize, value.country);
        } else if (value.genre === "Up Comming") {
            getMovie(page, pageSize, "", value.country, value.genre);
        } else {
            getMovie(page, pageSize, value.genre, value.country, value.query);
        }
    }, [value, pageSize]);

    const handelGenreFilter = e => {
        setValue(prevState => ({
            ...prevState,    // keep all other key-value pairs
            genre: e.target.value       // update the value of specific key
        }));
    }

    const handelCountryFilter = e => {
        setValue(prevState => ({
            ...prevState,    
            country: e.target.value  
        }));
    }

    return (
        <div className="grid content__footer" style={{ marginTop: 'var(--height-header)' }}>
            <div className="grid wide content__footer-wide">
                <div className="row content__footer-row">
                    <div className="col l-6 option">
                        <h3 style={{color: 'white'}}>Thể Loại</h3>
                        <select className="form-select" onChange={handelGenreFilter} value={value.genre} style={{ width: '100%', height: '40px', fontSize: '1.4rem', backgroundColor: '#999', marginTop: '10px', marginBottom: '24px'}} aria-label="Default select example">
                            <option value="">Tất cả</option>
                            <option value="Action">Hành động</option>
                            <option value="Science Fiction">Viễn tưởng</option>
                            <option value="Popular">Phổ biến</option>
                            <option value="Up Comming">Sắp chiếu</option>
                        </select>
                    </div>
                    <div className="col l-6 option">
                        <h3 style={{color: 'white'}}>Quốc gia</h3>
                        <select className="form-select" onChange={handelCountryFilter} value={value.country} style={{ width: '100%', height: '40px', fontSize: '1.4rem', backgroundColor: '#999', marginTop: '10px', marginBottom: '24px' }} aria-label="Default select example">
                            <option value="">Tất cả</option>
                            <option value="United States of America">United States of America</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>
                        {movie.length > 0 && movie.map((movie, index) => {
                            return (
                                <div className="col l-2 m-4 c-6" key={movie.title + index}>
                                    <a className="content__item" href={"movie/" + movie.slug}>
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
                        {movie.length === 0 && (
                            <h3 style={{color: 'white'}}>Movie not found</h3>
                        )}
                </div>
                {movie.length === pageSize && (
                    <button style={{color: 'white'}} onClick={() => {
                        setPageSize(pageSize + size);
                    }}>
                        <span style={{color: 'green', fontWeight: 'bold', cursor: 'pointer'}}>Load More</span>
                    </button>
                )}
            </div>
        </div>
    )
}