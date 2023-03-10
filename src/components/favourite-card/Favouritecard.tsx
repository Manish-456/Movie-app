import classNames from 'classnames';
import styles from './favourite-card.module.scss';
import {useContext} from 'react';
import { FavoritesContext } from '../../context/FavoriteContext';

export interface FavouriteCardProps {
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

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favourite-cards-and-templates
 */
export const FavouriteCard = ({ className, movie }: FavouriteCardProps) => {
    const {dispatch} = useContext(FavoritesContext)
    return (
        <div className={classNames(styles.root, className)}>
            <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.favimg} />
            <div className={styles.favmoviedetail}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average.toFixed(1)}</span>
            </div>
            <div className={styles.delete}>
                <img
                  onClick={() => dispatch({type : "REMOVE_MOVIE", payload : movie})}
                    src="https://fiverrclone-v2.onrender.com/img/delete.png"
                    className={styles.icon}
                />
            </div>
        </div>
    );
};
