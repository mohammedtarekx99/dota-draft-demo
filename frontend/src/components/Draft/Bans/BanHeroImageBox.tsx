import { DraftContext } from '@/components/Draft/context/draftContext';
import React, { useContext } from 'react';

interface BanHeroImageBoxProps {
    heroName: string;
    active: boolean;
    isRightTeam?: boolean;
}

export const BanHeroImageBox: React.FC<BanHeroImageBoxProps> = ({ heroName, active, isRightTeam }) => {
    const { activeTeamTimeRemaining } = useContext(DraftContext);

    const imageUrl = `http://localhost:3000/public/hero_images/${heroName}.webp`;
    const glowColor = isRightTeam ? 'rgba(239, 68, 68, 1)' : 'rgba(34, 197, 94, 1)';


    return (
        <div className={`relative w-[114.2px] h-[69px] border-r-[6px] border-[#424340] border-solid overflow-hidden 
            shadow-lg hover:shadow-xl transition-shadow duration-300  ${active && 'animate-glow'}`}
            style={{ '--glow-color': glowColor } as React.CSSProperties}>
            {heroName && (
                <img
                    className="w-full h-full object-cover opacity-60"
                    src={imageUrl}
                    alt={`Hero ${heroName}`}
                />
            )}
            {!heroName && activeTeamTimeRemaining !== undefined && activeTeamTimeRemaining !== 0 && active && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold opacity-50">
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
