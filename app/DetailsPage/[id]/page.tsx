import { LibraryDataType } from '@/app/types/LibraryDataType';
import Image from "next/image";
import { notFound } from 'next/navigation';
import { Bookmark, Calendar } from 'lucide-react';
import AddToTodaysPlanBtn from '@/app/components/addToTodaysPlanBtn';
import SaveForlaterBtn from '@/app/components/saveForLaterBtn';

const GetData = async () => {
    const response = await fetch(
        'https://api.api-store.workers.dev/api/fitlog'
    );

    if (!response.ok) {
        throw new Error("Failed to fetch libraries");
    }

    const data = await response.json();
    return data;
}

export default async function Page({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    const libraries = await GetData() as LibraryDataType[];

    const library = libraries.find(
        (item) => Number(item.id) === Number(id)
    );

    if (!library) {
        notFound();
    }

    return (
        <div className="mb-4 px-4 sm:px-6 lg:px-8">

            <div className="card card-side bg-base-100 shadow-sm grid grid-cols-1 lg:grid-cols-2">

                {/* Image */}
                <figure className="w-full">
                    <Image
                        className="w-full rounded-2xl object-cover"
                        src={library.image}
                        alt="Image of workouts"
                        height={748}
                        width={600}
                    />
                </figure>

                {/* Content */}
                <div className="mx-0 p-4 sm:p-6 lg:mx-12 lg:p-0">

                    {/* Title + Description */}
                    <div>

                        <h2 className="card-title text-2xl font-bold sm:text-3xl lg:text-4xl">
                            {library.name}
                        </h2>

                        <p className="mt-2 text-sm sm:text-base">
                            {library.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-2 pt-4 sm:gap-4">

                            {library.muscleGroups.map((item, index) => (
                                <div
                                    key={index}
                                    className="badge badge-warning"
                                >
                                    {item}
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Workout Information */}
                    <div className="mt-4 space-y-3 rounded-2xl bg-[#222837] px-4 py-5 sm:px-5 sm:py-6">

                        <p className="flex justify-between gap-4">
                            <span>Equipment:</span>
                            <span className="text-right">{library.equipment}</span>
                        </p>

                        <p className="flex justify-between gap-4">
                            <span>Difficulty:</span>
                            <span className="text-right">{library.difficulty}</span>
                        </p>

                        <p className="flex justify-between gap-4">
                            <span>Sets:</span>
                            <span>{library.sets}</span>
                        </p>

                        <p className="flex justify-between gap-4">
                            <span>Reps:</span>
                            <span>{library.reps}</span>
                        </p>

                        <p className="flex justify-between gap-4">
                            <span>Duration:</span>
                            <span>{library.duration} min</span>
                        </p>

                        <p className="flex justify-between gap-4">
                            <span>Calories:</span>
                            <span>{library.caloriesBurned} kcal</span>
                        </p>

                        <p className="flex justify-between gap-4">
                            <span>Rating:</span>
                            <span>{library.rating}</span>
                        </p>

                    </div>

                    {/* Instructions */}
                    <div>

                        <div className="mb-8">

                            <h1 className="my-5 text-2xl sm:text-3xl">
                                Instructions
                            </h1>

                            <div className="space-y-4">

                                {library.instructions.map((instruction, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 sm:gap-4"
                                    >
                                        <span className="shrink-0 font-bold">
                                            {index + 1}.
                                        </span>

                                        <p className="text-sm sm:text-base">
                                            {instruction}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-3 pb-4 sm:flex-row sm:gap-6">

                            <div>
                                <AddToTodaysPlanBtn key={library.id} library={library}></AddToTodaysPlanBtn></div>
                        </div>
                        <div>
                         <SaveForlaterBtn key={library.id} library={library}></SaveForlaterBtn></div>

                        </div>

                    </div>
                </div>
            </div>

    

    )
};