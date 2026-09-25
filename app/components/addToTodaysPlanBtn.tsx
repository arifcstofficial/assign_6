"use client";
import { Calendar } from 'lucide-react';
import React from 'react';
import { useTodayPlan } from '../context/TodaysPlanContext';

 
const AddToTodaysPlanBtn = () => {
const {addToTodaysPlan}=useTodayPlan();
    
    return (
          
        <div>
            <button className="btn w-full bg-[#C2F800] text-black sm:w-auto">
        <Calendar size={20} />
        Add to today's plan
    </button>
        </div>
    );
};

export default AddToTodaysPlanBtn;