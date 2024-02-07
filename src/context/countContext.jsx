import {createContext, useContext} from 'react'

export const Context = createContext({
    count:0,
    add:()=>{},
    remove:()=>{}
})

export const useCount=()=>{
    return useContext(Context)
}

export const CountProvider= Context.Provider;