"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  Check,
  Trash2,
  Dumbbell,
  BarChart3,
  Repeat,
  Clock3,
  Flame,
  Star,
} from "lucide-react";

import { LibraryDataType } from "@/app/types/LibraryDataType";

interface TodaysPlanCardProps {
  library: LibraryDataType;
  onDelete: (id: number) => void;
  onMarkDone: (id: number) => void;
}

const TodaysPlanCard = ({
  library,
  onDelete,
  onMarkDone,
}: TodaysPlanCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#151923] p-4 shadow-lg transition hover:border-slate-600 sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row">
        
        {/* Image */}
        <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl sm:h-60 lg:h-40 lg:w-56">
          <Image
            src={library.image}
            alt={library.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          
          {/* Title + Buttons */}
          <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            
            {/* Title and description */}
            <div className="min-w-0">
              <h2 className="text-xl font-bold uppercase text-white sm:text-2xl">
                {library.name}
              </h2>

              <p className="mt-1 line-clamp-2 text-sm text-slate-400">
                {library.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-3 flex flex-wrap gap-2">
                {library.muscleGroups.map((muscle, index) => (
                  <span
                    key={`${muscle}-${index}`}
                    className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex shrink-0 flex-wrap items-center gap-2">
              
              <Link
                href={`/DetailsPage/${library.id}`}
                className="btn btn-sm rounded-full border border-slate-600 bg-transparent px-4 text-white hover:bg-slate-700"
              >
                <Eye size={16} />
                View Details
              </Link>

              <button
                onClick={() => onMarkDone(library.id)}
                className="btn btn-sm rounded-full border-none bg-[#C2F800] px-4 text-black hover:bg-[#aee000]"
              >
                <Check size={16} />
                Mark as Done
              </button>

              <button
                onClick={() => onDelete(library.id)}
                aria-label={`Delete ${library.name}`}
                className="btn btn-circle btn-sm border-none bg-red-500 text-white hover:bg-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Workout Information */}
          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-700 pt-4 sm:grid-cols-3 lg:grid-cols-6">

            {/* Equipment */}
            <div className="flex items-center gap-2">
              <Dumbbell className="shrink-0 text-violet-400" size={22} />

              <div>
                <p className="text-xs text-slate-400">Equipment</p>
                <p className="text-sm font-semibold text-white">
                  {library.equipment}
                </p>
              </div>
            </div>

            {/* Difficulty */}
            <div className="flex items-center gap-2">
              <BarChart3 className="shrink-0 text-lime-400" size={22} />

              <div>
                <p className="text-xs text-slate-400">Difficulty</p>
                <p className="text-sm font-semibold text-white">
                  {library.difficulty}
                </p>
              </div>
            </div>

            {/* Sets */}
            <div className="flex items-center gap-2">
              <Repeat className="shrink-0 text-cyan-400" size={22} />

              <div>
                <p className="text-xs text-slate-400">Sets</p>
                <p className="text-sm font-semibold text-white">
                  {library.sets}
                </p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock3 className="shrink-0 text-purple-400" size={22} />

              <div>
                <p className="text-xs text-slate-400">Duration</p>
                <p className="text-sm font-semibold text-white">
                  {library.duration} min
                </p>
              </div>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <Flame className="shrink-0 text-orange-400" size={22} />

              <div>
                <p className="text-xs text-slate-400">Calories</p>
                <p className="text-sm font-semibold text-white">
                  {library.caloriesBurned} kcal
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <Star className="shrink-0 fill-yellow-400 text-yellow-400" size={22} />

              <div>
                <p className="text-xs text-slate-400">Rating</p>
                <p className="text-sm font-semibold text-white">
                  {library.rating}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysPlanCard;