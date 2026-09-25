"use client"
import React, { createContext, useState } from 'react';
import { LibraryDataType } from '../types/LibraryDataType';

interface TodaysPlanContextType{
    todaysPlan:LibraryDataType[];
    addToTodaysPlan:(library:LibraryDataType)=>void;
}


const TodaysPlanContext =createContext<TodaysPlanContextType |undefined>
            (undefined);

export default function TodaysPlanProvider({children,}:{children:React.ReactNode;}){
      
    const [todaysPlan,setTodaysPlan]=useState<LibraryDataType[]>([]);
    const addToTodaysPlan=(library:LibraryDataType)=>{
        setTodaysPlan((previous)=>[...previous,library]);
    };

    return(
        <TodaysPlanContext.Provider value={{todaysPlan,addToTodaysPlan}}>{children}</TodaysPlanContext.Provider>
    )
}

export function useTodayPlan(){
    const context=React.useContext(TodaysPlanContext);
    if(!context){
        throw new Error( "useTodaysPlan must be used inside TodaysPlanProvider");

    }
     return context;
}