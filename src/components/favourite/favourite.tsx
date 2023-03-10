import classNames from 'classnames';
import styles from './favourite.module.scss';
import { FavouriteCard } from '../favourite-card/Favouritecard';
import { useContext } from 'react';
import { FavoritesContext } from '../../context/FavoriteContext';

export interface FavouriteProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favourites-and-templates
 */
export const Favourite = ({ className }: FavouriteProps) => {
    const {state} = useContext(FavoritesContext)

    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.favTitle}>Favorites</h1>
        {
            state?.favorites.map((movie, id) => (    <FavouriteCard key={id} movie={movie}/>))
        }
            
        </div>
    );
};
