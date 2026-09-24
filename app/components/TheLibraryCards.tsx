import React from 'react';
import { LibraryDataType } from '../types/LibraryDataType';
import Image from 'next/image';
import { Clock3, Flame, Star } from "lucide-react";
import Link from 'next/link';


interface TheLibraryCardProps {
    library: LibraryDataType;
}
const TheLibraryCards = ({ library }: TheLibraryCardProps) => {
    return (

        <Link href={`/DetailsPage/${library.id}`}>
            <div className="w-full overflow-hidden rounded-2xl border border-gray-700 bg-[#15171c] shadow-lg
         transition-transform duration-1oo hover:-translate-y-2">

                <div className="w-full">
                    <Image
                        src={library.image}
                        alt={library.name}
                        width={600}
                        height={400}
                        className="h-48 w-full object-cover sm:h-52"
                    />
                </div>


                <div className="p-4 sm:p-5 lg:p-6">


                    <div className="mb-3 flex flex-wrap gap-2 sm:mb-4">
                        {library.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-lime-400 px-2.5 py-1 text-[10px] font-bold uppercase text-black sm:px-3 sm:text-xs"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>


                    <h2 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
                        {library.name}
                    </h2>


                    <p className="mt-1 text-sm text-gray-400">
                        {library.equipment}
                    </p>


                    <div className="my-3 border-t border-gray-700 sm:my-4" />


                    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-400">


                        <div className="flex items-center gap-1.5">
                            <Clock3 size={16} />
                            <span>{library.duration} min</span>
                        </div>


                        <div className="flex items-center gap-1.5">
                            <Flame size={17} />
                            <span>{library.caloriesBurned} kcal</span>
                        </div>


                        <div className="flex items-center gap-1.5">
                            <Star size={16} />
                            <span>{library.rating}</span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>



    );
};

export default TheLibraryCards;