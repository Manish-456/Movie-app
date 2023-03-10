import React, {createContext, useReducer} from 'react';



interface State {
    sortBy : string,
    genre : string,
    query : string
}
interface SearchAction {
    type : string,
    payload : string
}
interface ProviderProps {
    children : React.ReactNode
}
const INITIAL_STATE : State = {
    sortBy : "popularity.desc",
    genre : "",
    query : ""
}


const SearchReducer = (state : State, action : SearchAction ) => {
    switch(action.type){
        case "SORT_BY" : 
        return {
            ...state,
            sortBy : action.payload,
            query : ''
        }
        case "ADD_GENRE" : 
        return {
            ...state,
            genre : action.payload,
            query : ""
        }
        case "ADD_QUERY" : 
        return {
            ...state,
            query : action.payload,
            
        }
        default : 
        return state


    }
}

export const SearchContext = createContext<{
  state: State;
  dispatch: React.Dispatch<SearchAction>;
}>({ state: INITIAL_STATE, dispatch: () => null });


export const SearchContextProvider = ({children} : ProviderProps) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
    return <SearchContext.Provider value={{state, dispatch}}>
     {children}
    </SearchContext.Provider>
}

