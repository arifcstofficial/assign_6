import { useTodayPlan } from '@/app/context/TodaysPlanContext';
import React from 'react';

const TodaysPlanStatistics = () => {
    const { todaysPlan } = useTodayPlan();
    return (
        <div className="my-5 bg-slate-600 px-12 py-8 rounded-2xl">
            <div>
                <div className='flex  justify-between'>
                    <div>
                        <h2 className="text-xs sm:text-sm lg:text-base">
                            Exercises
                        </h2>

                        <p className="text-3xl font-bold text-yellow-400 sm:text-4xl">
                            {todaysPlan.length}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xs sm:text-sm lg:text-base">
                           Minutes
                        </h2>

                        <p className="text-3xl font-bold sm:text-4xl">
                             {
                            todaysPlan.reduce(
                                 (total, library) => total + library.duration,0)
                            }
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xs sm:text-sm lg:text-base">
                            Calories
                        </h2>

                        <p className="text-3xl font-bold sm:text-4xl">
                             {
                            todaysPlan.reduce(
                                 (total, library) => total + library.caloriesBurned,0)
                            }
                        </p>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default TodaysPlanStatistics;