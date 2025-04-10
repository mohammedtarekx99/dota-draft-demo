import React from 'react';
import { PickHeroVideoBox } from './PickHeroVideoBox';
import { TeamDraft } from '@/types';

interface PicksProps {
    team?: TeamDraft;
    isRightTeam?: boolean;
    activeTeamTimeRemaining?: number;
    active: boolean;
}

export const Picks: React.FC<PicksProps> = ({ team, isRightTeam = false, activeTeamTimeRemaining, active }) => {
    const dummyPicks = [
        'axe',
        'crystal_maiden',
        'lina',
        'pudge',
        'magnataur'
    ];


    const getPicks = () => {
        if (!team) return dummyPicks;

        const picks = [];
        for (let i = 0; i < 5; i++) {
            const pickKey = `pick${i}_class` as keyof TeamDraft;
            const pick = team[pickKey] as string;
            picks.push(pick || '');
        }
        return picks;
    };

    const nextActive = () => {
        if (!team) return null;

        for (let i = 0; i < 5; i++) {
            const pickKey = `pick${i}_class` as keyof TeamDraft;
            const pick = team[pickKey] as string;
            if (pick.length == 0)
                return i
        }
        return null
    }

    const heroesToShow = getPicks();

    return (
        <div className={`flex  ${isRightTeam ? 'justify-end flex-row-reverse' : 'justify-start'}
        bg-[url('/assets/bg-two.jpg')] bg-cover bg-center bg-no-repeat
        `}>
            {heroesToShow.slice(0, 8).map((hero, index) => (
                <div key={`${hero}-${index}`} className="flex-shrink-0">
                    <PickHeroVideoBox heroName={hero}
                        activeTeamTimeRemaining={activeTeamTimeRemaining} active={nextActive() == index && active}
                        isRightTeam={isRightTeam} />
                </div>
            ))}
        </div>
    );
};