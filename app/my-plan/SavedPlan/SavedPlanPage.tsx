
"use client";

import React from "react";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

import SavedPlanCard from "./SavedPlanCard";
import EmptySavedPlanCard from "./EmptySavedPlanCard";

import { useTodayPlan } from "@/app/context/TodaysPlanContext";

interface SavedPlanPageProps {
  sortBy: string;
}

const SavedPlanPage = ({ sortBy }: SavedPlanPageProps) => {
  const { savedPlan, removeFromSavedPlan } = useTodayPlan();

  // Mark saved workout as done
  const handleMarkDone = (id: number) => {
    const exercise = savedPlan.find((library) => library.id === id);

    removeFromSavedPlan(id);

    toast.success(`${exercise?.name || "Workout"} marked as done!`, {
      icon: <FaCheck />,
    });
  };

  // Sort saved plan
  const sortedPlan = [...savedPlan].sort((a, b) => {
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
      {savedPlan.length === 0 ? (
        <div>
          <EmptySavedPlanCard />
        </div>
      ) : (
        sortedPlan.map((library) => (
          <SavedPlanCard
            key={library.id}
            library={library}
            onDelete={removeFromSavedPlan}
            onMarkDone={handleMarkDone}
          />
        ))
      )}
    </div>
  );
};

export default SavedPlanPage;
