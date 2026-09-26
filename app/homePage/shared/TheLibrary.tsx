import TheLibraryCards from '@/app/components/TheLibraryCards';
import { LibraryDataType } from '@/app/types/LibraryDataType';
import React from 'react';

const LibraryData = async () => {
    const response = await fetch('https://api.api-store.workers.dev/api/fitlog');
    

      if (!response.ok) {
    throw new Error("Failed to fetch libraries");
  }
  const data = response.json();
    return data;
}

const TheLibrary = async () => {
    const libraries = await LibraryData() as LibraryDataType[];

    return (
        <div id="library"className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className='mt-18 pb-7'>
                <h1 className='font-bold text-4xl'>THE LIBRARY</h1>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="w-max-full grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                libraries.map((library: LibraryDataType) => (<TheLibraryCards key={library.id} library={library} />))

            }
            </div>
            
        </div>

    );
};

export default TheLibrary;