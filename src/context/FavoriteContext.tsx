import React, {createContext, useReducer} from 'react';

interface Movie  {
  id : number,
  poster_path : string,
  title : string,
  vote_average : number,
  release_date : number
}

interface State {
    favorites : Movie[]
}

interface FavoriteAction {
    type : string,
    payload : Movie
}
interface ProviderProps {
    children : React.ReactNode
}
const INITIAL_STATE : State = {
    favorites : []
}


const FavoriteReducer = (state : State, action : FavoriteAction) => {
    switch(action.type){
        case "ADD_MOVIE" : 
       return {
        favorites : [...state.favorites, action.payload]
       }
       case "REMOVE_MOVIE" : 
       return {
        favorites : state.favorites.filter(movie => movie.id !== action.payload.id)
       }
       default : 
      return state
    }
}

export const FavoritesContext = createContext<{
  state: State;
  dispatch: React.Dispatch<FavoriteAction>;
}>({ state: INITIAL_STATE, dispatch: () => null });


export const FavoriteContextProvider = ({children} : ProviderProps) => {
    const [state, dispatch] = useReducer(FavoriteReducer, INITIAL_STATE);
    return <FavoritesContext.Provider value={{state, dispatch}}>
     {children}
    </FavoritesContext.Provider>
}

