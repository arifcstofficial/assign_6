import React from "react";
import Link from "next/link";

const EmptySavedPlanCard = () => {
    return (
        <div
            className="
                w-full
                min-h-[220px]
                sm:min-h-[260px]
                md:min-h-[300px]
                lg:min-h-[330px]
                flex
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-slate-700
                bg-[#0d1014]
                px-4
                py-8
                sm:px-6
                md:px-8
            "
        >
            <div className="flex max-w-md flex-col items-center text-center">

                {/* Heading */}
                <h2
                    className="
                        text-lg
                        font-extrabold
                        tracking-wide
                        text-white
                        sm:text-xl
                        md:text-2xl
                    "
                >
                    NOTHING HERE YET
                </h2>

                {/* Description */}
                <p
                    className="
                        mt-2
                        max-w-sm
                        text-xs
                        leading-relaxed
                        text-slate-400
                        sm:text-sm
                    "
                >
                    Browse the library and add a lift to get today moving.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="
                        mt-4
                        rounded-full
                        bg-[#C2F800]
                        px-5
                        py-2
                        text-xs
                        font-semibold
                        text-black
                        transition
                        duration-200
                        hover:scale-105
                        hover:bg-[#d4ff33]
                        sm:px-6
                        sm:py-2.5
                        sm:text-sm
                    "
                >
                    Go to workouts
                </Link>

            </div>
        </div>
    );
};

export default EmptySavedPlanCard;