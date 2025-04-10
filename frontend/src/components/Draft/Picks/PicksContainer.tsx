import React from 'react';
import { PickHeroVideoBox } from './PickHeroVideoBox';
import { TeamDraft } from '@/types';
import { PickState } from '@/state/draftState';

interface PicksProps {
    team?: TeamDraft;
    isRightTeam?: boolean;
    activeTeamTimeRemaining?: number;
    active: boolean;
    pickState: PickState

}

export const Picks: React.FC<PicksProps> = ({ team, isRightTeam = false, activeTeamTimeRemaining, active, pickState }) => {

    const getPicks = () => {
        if (!team) return Array(5).fill('');
        const picks = [];
        for (let i = 0; i < 5; i++) {
            const pickKey = `pick${i}_class` as keyof TeamDraft;
            const pick = team[pickKey] as string;
            picks.push(pick || '');
        }
        return picks;
    };


    const heroesToShow = getPicks();

    return (
        <div className={`flex  ${isRightTeam ? 'justify-end flex-row-reverse' : 'justify-start'}
        bg-[url('/assets/bg-two.jpg')] bg-cover bg-center bg-no-repeat
        `}>
            {heroesToShow.slice(0, 8).map((hero, index) => (
                <div key={`${hero}-${index}`} className="flex-shrink-0">
                    <PickHeroVideoBox heroName={hero}
                        active={pickState.onPick == index && active}
                        isRightTeam={isRightTeam} />
                </div>
            ))}
        </div>
    );
};