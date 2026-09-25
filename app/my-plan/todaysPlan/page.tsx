"use client"
import { useTodayPlan } from '@/app/context/TodaysPlanContext';
import React from 'react';
import TodaysPlanCard from './TodaysPlanCard';

const TodaysPlanPage = () => {
    const { todaysPlan,removeFromTodaysPlan } = useTodayPlan();
    return (
        <div className="space-y-4">
            {todaysPlan.map((library) => (
                <TodaysPlanCard
                    key={library.id}
                    library={library}
                    onDelete={removeFromTodaysPlan}
                    onMarkDone={(id) => console.log("Done:", id)}
                />
            ))}
        </div>
    );
};

export default TodaysPlanPage;