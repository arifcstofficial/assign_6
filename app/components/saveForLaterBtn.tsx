"use client";
import { Calendar } from 'lucide-react';
import React from 'react';
import { useTodayPlan } from '../context/TodaysPlanContext';
import { LibraryDataType } from '../types/LibraryDataType';
import { toast } from 'react-toastify';

interface SaveForLaterBtnProps {
    library: LibraryDataType;
}

const SaveForlaterBtn = ({ library }: SaveForLaterBtnProps) => {
    const { savedPlan, addToSaveLater } = useTodayPlan();

    const handleAddToSaveLater = () => {
        const alreadyExists = savedPlan.some(
            (item) => item.id === library.id
        );

        if (alreadyExists) {
            toast.warning("Already added to Save for Later");
            return;
        }

        addToSaveLater(library);

        toast.success("Added to Save for Later");
    };
    return (

        <div>
            <button onClick={() => handleAddToSaveLater()} className="btn w-full bg-[#C2F800] text-black sm:w-auto">
                <Calendar size={20} />
                Save For Later
            </button>
        </div>
    );
};

export default SaveForlaterBtn;