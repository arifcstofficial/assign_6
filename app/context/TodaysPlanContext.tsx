"use client"
import React, { createContext, useState } from 'react';
import { LibraryDataType } from '../types/LibraryDataType';


interface TodaysPlanContextType{
    todaysPlan:LibraryDataType[];
    addToTodaysPlan:(library:LibraryDataType)=>void;
    removeFromTodaysPlan:(id:number)=>void;
    savedPlan:LibraryDataType[];
    addToSaveLater:(library:LibraryDataType)=>void;
    removeFromSavedPlan:(id:number)=>void;
}


const TodaysPlanContext =createContext<TodaysPlanContextType |undefined>
            (undefined);

export default function TodaysPlanProvider({children,}:{children:React.ReactNode;}){
      
    const [todaysPlan,setTodaysPlan]=useState<LibraryDataType[]>([]);
    const [savedPlan,setSavedPlan]=useState<LibraryDataType[]>([]);
    
    const addToTodaysPlan=(library:LibraryDataType)=>{
        setTodaysPlan((previous)=>{
            const alreadyExists=previous.some((item)=>item.id===library.id)
          if(alreadyExists)
          {
            return previous;
          }
             
            else
                {
                return [...previous,library];}
        });
    };

    const removeFromTodaysPlan=(id:number)=>{
         setTodaysPlan((previous)=>previous.filter((library)=>library.id !== id))
    }
    
     const addToSaveLater=(library:LibraryDataType)=>{
        setSavedPlan((previous)=>{
            const alreadyExists=previous.some((item)=>item.id===library.id)
          if(alreadyExists)
          {
            return previous;
          }
             
            else
                {
                return [...previous,library];}
        });
    };
    const removeFromSavedPlan=(id:number)=>{
         setSavedPlan((previous)=>previous.filter((library)=>library.id !== id))
    }

    return(
        <TodaysPlanContext.Provider value={{todaysPlan,addToTodaysPlan,removeFromTodaysPlan,savedPlan,addToSaveLater,removeFromSavedPlan}}>{children}</TodaysPlanContext.Provider>
    )
}

export function useTodayPlan(){
    const context=React.useContext(TodaysPlanContext);
    if(!context){
        throw new Error( "useTodaysPlan must be used inside TodaysPlanProvider");

    }
     return context;
}