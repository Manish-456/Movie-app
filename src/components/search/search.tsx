import classNames from 'classnames';
import React, { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import styles from './search.module.scss';
import { useEffect, useState } from 'react';

export interface SearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-searchs-and-templates
 */
export const Search = ({ className }: SearchProps) => {
    const { dispatch } = useContext(SearchContext);
    const [inpVal, setInpVal] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInpVal(e.target.value);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <input
                className={styles.input}
                aria-placeholder="Search"
                onChange={handleChange}
                placeholder="Search"
            />
            <button className={styles.button} onClick={() => dispatch({ type: 'ADD_QUERY', payload: inpVal })}>Search</button>
        </div>
    );
};
