import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import styles from './App.module.scss';
import { Favourite } from './components/favourite/favourite';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import {FavoriteContextProvider} from './context/FavoriteContext'
import { SearchContextProvider } from './context/SearchContext';
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <SearchContextProvider> 
                  <Menu />
         <FavoriteContextProvider>
     
        <Container />
            <Favourite />
         </FavoriteContextProvider>
        </SearchContextProvider>
        </div>
    );
}

export default App;
