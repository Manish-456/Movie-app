import classNames from 'classnames';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import styles from './menu.module.scss';

export interface MenuProps {
    className?: string;
}

// [28, 35, 27, 10770, 10749, 53]

const sortBy: { q: string; text: string }[] = [
    {
        q: 'popularity.desc',
        text: 'Popularity',
    },
    {
        q: 'vote_count.desc',
        text: 'Most Voted',
    },
    {
        q: 'release_date.desc',
        text: 'Release Date',
    },
];
const genre: { id: string; text: string }[] = [
    { id: '28', text: 'Action' },
    { id: '12', text: 'Adventure' },
    { id: '16', text: 'Animation' },
    { id: '35', text: 'Comedy' },
    { id: '27', text: 'Horror' },
    { id: '878', text: 'Sci-fi' },
    { id: '10749', text: 'Romance' },
    { id: '53', text: 'Thriller' },
];

export const Menu = ({ className }: MenuProps) => {
    const {state,  dispatch } = useContext(SearchContext);

    
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    about="https://i.imgur.com/zYa4iMN.png"
                    src={'https://i.imgur.com/zYa4iMN.png'}
                    className={styles.logoimg}
                />
                <span className={styles.logotext}>Netflix</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.lists}>
                {sortBy.map((item) => (
                    <li
                        key={item.q}
                        className={styles.listitem}
                        onClick={() => dispatch({ type: 'SORT_BY', payload: item.q })}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.lists}>
                {genre.map((item) => (
                    <li key={item.id} className={styles.listitem} onClick={() => dispatch({type : "ADD_GENRE", payload : item.id})}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
