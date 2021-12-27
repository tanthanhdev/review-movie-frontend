import React from 'react';
import { Link } from "react-router-dom";
import styles from './banner.module.css';

export default function Banner({
    movie,
  }) {
    
    console.log(movie);

    return (
        <>
            {movie.length > 0 && movie.map((movie, index) => {
                return (
                    <Link to={"movie/" + movie.slug} className="baner" key={movie.title + index} style={{ backgroundImage: 'url('+ (
                        movie.domain && movie.backdrop_path ? movie.domain + movie.backdrop_path : './assets/img/baner.jpg'
                    ) +')' }}>
                    </Link>
                )
            })}
        </>
    )
}
