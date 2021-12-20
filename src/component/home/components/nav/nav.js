import React from 'react';
import { Link } from "react-router-dom";
import styles from './nav.module.css';

export default function Nav({
    movie,
  }) {
    
    console.log(movie);

    return (
        <div className="grid nav">
            <div className="grid wide sub-nav">
                <div className="row">
                    { movie.length > 0 && movie.map((movie, index) => {
                        return (
                            <Link to={"movie/" + movie.slug} className="col l-2-4 m-4 c-6" key={movie.title + index}>
                                <div className="nav__item">
                                    <div className="nav__item-img" style={{ backgroundImage: 'url('+ (
                                        movie.domain && movie.poster_path ? ( 
                                            (movie.domain === "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces")
                                                ? ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path)  : movie.domain + movie.poster_path
                                        ) : './assets/img/default.jpg'
                                    ) +')' }}>
                                    </div>
                                    {/* <span className="nav__status"> */}
                                        {/* HD Vietsub */}
                                    {/* </span> */}
                                    <div className="nav__bottom">
                                        <h3 className="nav__bottom-name--vn nav__bottom-name">
                                            {movie.title}
                                        </h3>
                                        <h3 className="nav__bottom-name--eng nav__bottom-name">
                                            {movie.original_title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) }
                </div>
            </div>
        </div>

    )
}
