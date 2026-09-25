"use client";
import { Calendar } from 'lucide-react';
import React from 'react';
import { useTodayPlan } from '../context/TodaysPlanContext';
import { LibraryDataType } from '../types/LibraryDataType';
import { toast } from 'react-toastify';

interface AddToTodaysPlanBtnProps{
    library:LibraryDataType;
}
 
const AddToTodaysPlanBtn = ({library}:AddToTodaysPlanBtnProps) => {
const {todaysPlan,addToTodaysPlan}=useTodayPlan();
    
   const handleAddToPlan = () => {
        const alreadyExists = todaysPlan.some(
            (item) => item.id === library.id
        );

        if (alreadyExists) {
            toast.warning("Already added to today's plan");
            return;
        }

        addToTodaysPlan(library);

        toast.success("Added to today's plan");
    };
    return (
          
        <div>
            <button onClick={()=>handleAddToPlan()}className="btn w-full bg-[#C2F800] text-black sm:w-auto">
        <Calendar size={20} />
        Add to today's plan
    </button>
        </div>
    );
};

export default AddToTodaysPlanBtn;