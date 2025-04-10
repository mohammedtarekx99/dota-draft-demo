import React from 'react';
import { PickHeroVideoBox } from './PickHeroVideoBox';
import { TeamDraft } from '@/types';
import { PickState } from '@/state/draftState';
import { getTeamPicks } from '../context/useDraftLogic';

interface PicksProps {
    team?: TeamDraft;
    isRightTeam?: boolean;
    activeTeamTimeRemaining?: number;
    pickState: PickState

}

export const Picks: React.FC<PicksProps> = ({ team, isRightTeam = false, pickState }) => {

    const heroesToShow = getTeamPicks(team);

    return (
        <div className={`flex  ${isRightTeam ? 'justify-end flex-row-reverse' : 'justify-start'}
        bg-[url('/assets/bg-two.jpg')] bg-cover bg-center bg-no-repeat
        `}>
            {heroesToShow.slice(0, 8).map((hero, index) => (
                <div key={`${hero}-${index}`} className="flex-shrink-0">
                    <PickHeroVideoBox heroName={hero}
                        active={pickState.onPick == index && pickState.state}
                        isRightTeam={isRightTeam} />
                </div>
            ))}
        </div>
    );
};