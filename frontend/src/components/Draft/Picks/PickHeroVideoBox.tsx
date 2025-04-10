import React from 'react';

interface VideoBoxProps {
    heroName: string;
    activeTeamTimeRemaining?: number;
    active: boolean;
    isRightTeam?: boolean;
}

export const PickHeroVideoBox: React.FC<VideoBoxProps> = ({ heroName, activeTeamTimeRemaining, active, isRightTeam }) => {
    const videoUrl = `http://localhost:3000/public/animated_heroes/npc_dota_hero_${heroName}.webm`;
    const glowColor = isRightTeam ? 'rgba(239, 68, 68, 1)' : 'rgba(34, 197, 94, 1)';

    return (
        <div className={`relative w-[159.5px] h-[200px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300
        border-l-[3px] border-[#424340] border-solid ${active && 'animate-glow'}`}
            style={{ '--glow-color': glowColor } as React.CSSProperties}>
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoUrl} type="video/webm" />
            </video>

            {!heroName && activeTeamTimeRemaining !== undefined && active && (
                <div className="absolute inset-0 flex items-center justify-center bg-red w-[159.5px] h-[200px]">
                    <span className="text-white text-2xl font-bold opacity-70">
                        {activeTeamTimeRemaining}
                    </span>
                </div>
            )}
            {active && (
                <div
                    className="absolute inset-0 animate-pulse opacity-50"
                />
            )}
        </div>
    );
};