import React from 'react';

const MyPlanPage = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            <div className="my-4">
                <h1 className='font-bold text-4xl'>MY PLAN</h1>
                <p>Cap of five lifts for today. Finish them, then load more.</p>
            </div>

            {/* exercise,calories and minutes */}
            <div className="flex justify-between my-5 bg-slate-600 px-12 py-8 rounded-2xl">
                <div>
                    <h1>Exercises</h1>
                    <p className="text-yellow-400 font-bold text-4xl">2</p>
                </div>
                <div>
                    <h1>Minutes</h1>
                    <p className="font-bold text-4xl">132</p>
                </div>
                <div>
                    <h1>Calories</h1>
                    <p className="font-bold text-4xl">54</p>
                </div>
            </div>

            {/* badges and sort-By */}
            <div>
                <div>
                    <div role="tablist" className="tabs tabs-lift">
                        <a role="tab" className="tab hover:bg-yellow-200 hover:text-black">Today's Plan</a>
                        <a role="tab" className="tab tab-active hover:bg-yellow-200 hover:text-black">Saved</a>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    );
};

export default MyPlanPage;