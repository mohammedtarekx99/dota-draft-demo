import React, { useContext } from 'react';



interface TeamSideProps {
    teamName: string;
    timer?: number;
    active: boolean;
}

export const TeamSide: React.FC<TeamSideProps> = ({ teamName, timer = 0, active }) => {
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };


    return (
        <div className={`flex flex-col items-center gap-4 p-[11px] ${active ? 'scale-110 transition-transform' : ''}`}>
            <div className="text-2xl font-bold text-white">
                {teamName}
            </div>
            <div className={`bg-black rounded-lg px-4 py-2 border border-gray-700 shadow-lg shadow-gray-900/50 transform hover:scale-105 transition-transform ${active ? 'scale-150' : ''}`}>
                <span className="text-lg font-mono font-bold text-white">
                    {formatTime(timer)}
                </span>
            </div>
        </div>
    );
};