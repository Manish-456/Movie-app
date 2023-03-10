import classNames from 'classnames';
import styles from './cards.module.scss';
import { Card } from '../card/card';
import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface CardsProps {
    className?: string;
}

export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState([]);
    const { state } = useContext(SearchContext);
    const { genre, query, sortBy } = state;

    useEffect(() => {
        fetch(
            query
                ? `https://api.themoviedb.org/3/search/movie?api_key=d1dbe15f70e1849bf8b32dfc5d91e768&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=d1dbe15f70e1849bf8b32dfc5d91e768&sort_by=${sortBy}&with_genres=${genre}`
        )
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setMovies(res.results);
            })
            .catch((err) => console.log(err));
    }, [state]);
    return (
        <div className={classNames(styles.root, className)}>
          
    

            {movies?.map((item, i) => {
                return <Card key={i} movie={item} />;
            })}
        </div>
    );
};
