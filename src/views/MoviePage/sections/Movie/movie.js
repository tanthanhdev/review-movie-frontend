import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import cogoToast from 'cogo-toast';
import { Axios } from '../../../../services/Axios';
import { fetchReviewFx } from '../../../../services';
import styles from './movie.module.css';
import PublicMovieService from "../../../../services/movie.service"
import { convertDateTimeToDate, convertNumberToTime } from "../../../../helpers"
import useDocumentTitle from '../../../../helpers/useDocumentTitle'

export default function Movie() {
    const [movie, setMovie] = useState({});
    const { slug } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    useDocumentTitle(movie.title + " — Review Movie DTU");

    const getMovie = slug => {
        PublicMovieService.get(slug)
        .then(response => {
            setMovie(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };
    
    useEffect(() => {
        getMovie(slug);
    }, [slug]);

    const NewlineText = props => {
        const text = props.text;
        const newText = text.split('\n').map(str => <p>{str}</p>);
        return newText;
    }

    // form validation rules 
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(3, 'Title must be at least 3 characters'),
    content: Yup.string()
      .required('Content is required')
      .min(10, 'Content must be at least 10 characters'),
          
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;


    const onSubmit = async (values) => {
        try {
            console.log('Values in review', values);
            await Axios.post('/reviews/?product=' + slug, values);
        // await fetchReviewFx(values, slug);
        cogoToast.info('Tạo review thành công.');
        } catch {
            cogoToast.error('Gửi review không hợp lệ!');
        }
    };

    return (
        <div>
            <div className="main">
                <div className="grid pt-48">
                    <div className="grid wide">
                        <div className={styles.backdrop_path} style={{backgroundImage: "url(" + "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces" + movie.backdrop_path + ")"}}>
                            <div className={styles.overlay_background + " row"} >
                                <div className="col l-3">
                                    <img className="image radius" src={(movie.domain === "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces")
                                                ? ("https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + movie.poster_path)
                                                : movie.domain + movie.poster_path} alt="" />
                                </div>
                                <div className="col l-9">
                                    <div className="dec">
                                        <div className="dec__header">
                                            <h1 className="dec__header-name">
                                                {movie.title}
                                            </h1>
                                            <p className="dec__header-date">{convertDateTimeToDate(movie.release_date) + " "}
                                                (US) - {movie.genre && movie.genre.map((genre, index) => {
                                                    let genreName = genre.name + ((movie.genre.length !== index+1) ? ', ' : '');
                                                    return (
                                                        genreName
                                                    )
                                                })} - {convertNumberToTime(movie.runtime)}</p>
                                            <div className="dec__header-rating">
                                                <i className={"fas fa-star" + (movie.vote_average >= 2 ? " active" : "")} />
                                                <i className={"fas fa-star" + (movie.vote_average >= 4 ? " active" : "")} />
                                                <i className={"fas fa-star" + (movie.vote_average >= 5 ? " active" : "")} />
                                                <i className={"fas fa-star" + (movie.vote_average >= 6 ? " active" : "")} />
                                                <i className={"fas fa-star" + (movie.vote_average >= 10 ? " active" : "")} />
                                            </div>
                                            <span>Count Rating: {movie.vote_count}</span>
                                        </div>
                                        <div className="dec__center">
                                            <h2 className="dec__center-name">Overview</h2>
                                            <p className="dec__center-dec">
                                                {movie.overview}
                                            </p>
                                        </div>
                                        {/* <div className="dec__footer grid">
                                            <div className="row">
                                                <div className="col l-4">
                                                    <h2>Andrew Stanton</h2>
                                                    <p>Director, Screenplay</p>
                                                </div>
                                                <div className="col l-4">
                                                    <h2>Bob Peterson</h2>
                                                    <p>Screenplay</p>
                                                </div>
                                                <div className="col l-4">
                                                    <h2>David Reynolds</h2>
                                                    <p>Screenplay</p>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top">
                            <h2>
                                Top Billed Cast
                            </h2>
                        </div>
                        <div className="row ">
                            <div className="col l-10">
                                <div className="actor__list scrollbar" id="scrollbar-movie">
                                <div className="force-overflow"></div>
                                {movie.cast && movie.cast.map((cast, index) => {
                                    return (
                                        <div className="actor__item"  key={cast.name + index}>
                                            <img src={(cast.profile_path && cast.domain) ? cast.domain + cast.profile_path : "/assets/img/default.jpg"} alt="" />
                                            <div className="actor__item-dec">
                                                <div className="actor__item-dec-name">
                                                    <p>{cast.name}</p>
                                                    <p>{cast.character}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                            <div className="col l-2">
                                <div className="rice">
                                    <div className="rice-status">
                                        <p><b>Status</b></p>
                                        <p>{movie.status}</p>
                                    </div>
                                    <div className="rice-status">
                                        <p><b>Original Language</b></p>
                                        <p>{movie.original_language}</p>
                                    </div>
                                    <div className="rice-status">
                                        <p><b>Budget</b></p>
                                        <p>${movie.budget}.00</p>
                                    </div>
                                    <div className="rice-status">
                                        <p><b>Revenue</b></p>
                                        <p>${movie.revenue}.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col l-10">
                                <div className="review">
                                    <header className="review__header">
                                        Reviews {movie.reviews_products && (
                                            movie.reviews_products.length
                                        )}
                                    </header>
                                    {movie.reviews_products && movie.reviews_products.map((review, index) => {
                                        return (
                                            <div className="row" key={review.author + index}>
                                                <div className="col l-1">
                                                    <img className="review__icon" src={(!review.user ? "/assets/img/default.jpg" : (review.user.avatar ?  process.env.REACT_APP_API_DOMAIN +  review.user.avatar : "/assets/img/default.jpg"))} alt="" />
                                                </div>
                                                <div className="col l-11">
                                                    <a className="review-dec" target="_blank" href={review.url || ""}>
                                                        A review by {review.user ? review.user.first_name : review.author}
                                                    </a>
                                                    <div className="review__date">
                                                        Written by {review.user ? review.user.first_name : review.author} on {convertDateTimeToDate(review.created_at)}
                                                    </div>
                                                    <div className="review__footer">
                                                        <NewlineText text={review.content} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className={styles.reviews_post}>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <span>Full Name: </span> 
                                        <span for="fname">{user.first_name} </span>
                                        <span for="lname">{user.last_name}</span>

                                        <div className="row">
                                            <div className="col">
                                                <label for="title">Title</label>
                                                <InputText id="title" type="text" placeholder="Tiêu đề" {...register('title')} 
                                                    title="Nhập tiêu đề" 
                                                    required />
                                            </div>
                                            <div className="col">
                                                <label for="content">Your review</label>
                                                <InputTextarea id="content" type="text" placeholder="Đánh giá" {...register('content')} 
                                                    title="Nhập đánh giá" 
                                                    required />
                                            </div>
                                        </div>
                                        <Button type="submit" label="Submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col l-10 videos">
                                <div className="row">
                                    <header>
                                        <ul className="videos__list">
                                            <li className="videos__item">
                                                <a href="#" className="videos__link">Media</a>
                                            </li>
                                            <li className="videos__item">
                                                <a href="#" className="videos__link">Video</a>
                                            </li>
                                            <li className="videos__item">
                                                <a href="#" className="videos__link">Poster</a>
                                            </li>
                                        </ul>
                                    </header>
                                    {/* Video */}
                                    {movie.videos_products && movie.videos_products.map((video, index) => {
                                        return (
                                            <div className="col l-6 m-6 c-12" key={video.name + index}>
                                                {video.key !== undefined && (
                                                    <div className="videos__video">
                                                        {/* <i className="fas fa-pause" /> */}
                                                        <iframe src={"https://www.youtube.com/embed/" + video.key} className="videos__video-img"></iframe>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}