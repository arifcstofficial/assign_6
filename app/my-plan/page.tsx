"use client";

import React, { useState } from "react";

import TodaysPlanPage from "./todaysPlan/page";
import SavedPlanPage from "./SavedPlan/SavedPlanPage";

import TodaysPlanStatistics from "./todaysPlan/TodaysPlanStatistics";
import SavedPlanStatistics from "./SavedPlan/SavedPlanStatistics";

const MyPlanPage = () => {
  const [showTodaysPlanPage, setShowTodaysPlanPage] = useState(true);

  // Default sorting
  const [sortBy, setSortBy] = useState("duration");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="my-4">
        <h1 className="text-4xl font-bold">MY PLAN</h1>
        <p>Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      {/* Statistics */}
      <div>
        {showTodaysPlanPage ? (
          <TodaysPlanStatistics />
        ) : (
          <SavedPlanStatistics />
        )}
      </div>

      {/* Tabs + Sort By */}
      <div className="flex justify-between lg:p-5 mt-27 lg:mt-25">
        {/* Tabs */}
        <div>
          <div role="tablist" className="tabs tabs-lift gap-3">
            <button
              onClick={() => setShowTodaysPlanPage(true)}
              role="tab"
              className={
                showTodaysPlanPage
                  ? "tab-active text-[#C2F800]"
                  : "tab opacity-50 hover:bg-yellow-200 hover:text-black hover:opacity-100"
              }
            >
              Today's Plan
            </button>

            <button
              onClick={() => setShowTodaysPlanPage(false)}
              role="tab"
              className={
                !showTodaysPlanPage
                  ? "tab tab-active text-[#C2F800]"
                  : "tab opacity-50 hover:bg-yellow-200 hover:text-black hover:opacity-100"
              }
            >
              Saved
            </button>
          </div>
        </div>

        {/* Sort By */}
        <div className="flex items-center gap-2">
          <label htmlFor="sortBy" className="font-medium">
            Sort By
          </label>

          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-sm border-gray-300 bg-transparent focus:outline-none"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Current Plan */}
      {showTodaysPlanPage && (
        <TodaysPlanPage sortBy={sortBy} />
      )}

      {!showTodaysPlanPage && (
        <SavedPlanPage sortBy={sortBy} />
      )}
    </div>
  );
};

export default MyPlanPage;