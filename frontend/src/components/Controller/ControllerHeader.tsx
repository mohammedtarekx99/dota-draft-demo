import React from 'react';

export const ControllerHeader: React.FC = () => {
    return (
        <div className="flex w-full flex-row my-6 justify-center items-center gap-4 mt-20 ">
            <img src="/assets/dota-2-logo.png"
                className="w-24 h-24"
            />
            <h1 className="text-5xl font-bold  text-[#130b0e]">Dota 2 GSI Tool for Drafting</h1>
        </div>
    );
};