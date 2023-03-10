import classNames from 'classnames';
import styles from './card.module.scss';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoriteContext';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

export const Card = ({ className, movie }: CardProps) => {
    const { state, dispatch } = useContext(FavoritesContext);
    const handleClick = (movie: CardProps['movie']) => {
        dispatch({ type: 'ADD_MOVIE', payload: movie });
    };

    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className={styles.cardImg}
            />
            <div className={styles.detail}>
                <h1 className={styles.movieTitle}>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average.toFixed(1)}</span>
                <p className={styles.desc}>{movie.overview.substring(0, 220)}</p>
                <button onClick={() => handleClick(movie)} className={styles.btn}>
                    +
                </button>
            </div>
        </div>
    );
};
