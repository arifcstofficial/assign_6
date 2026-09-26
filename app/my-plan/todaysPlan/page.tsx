"use client";

import React from "react";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

import { useTodayPlan } from "@/app/context/TodaysPlanContext";
import TodaysPlanCard from "./TodaysPlanCard";
import EmptyPlanCard from "./EmptyPlanCard";

interface TodaysPlanPageProps {
  sortBy: string;
}

const TodaysPlanPage = ({ sortBy }: TodaysPlanPageProps) => {
  const { todaysPlan, removeFromTodaysPlan } = useTodayPlan();

  // Mark workout as done
  const handleMarkDone = (id: number) => {
    const exercise = todaysPlan.find((library) => library.id === id);

    removeFromTodaysPlan(id);

    toast.success(`${exercise?.name || "Workout"} marked as done!`, {
      icon: <FaCheck />,
    });
  };

  // Sort today's plan
  const sortedPlan = [...todaysPlan].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <div className="space-y-4">
      {todaysPlan.length === 0 ? (
        <EmptyPlanCard />
      ) : (
        sortedPlan.map((library) => (
          <TodaysPlanCard
            key={library.id}
            library={library}
            onDelete={removeFromTodaysPlan}
            onMarkDone={handleMarkDone}
          />
        ))
      )}
    </div>
  );
};

export default TodaysPlanPage;