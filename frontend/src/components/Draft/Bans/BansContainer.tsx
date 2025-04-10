import React, { useContext } from 'react';
import { BanHeroImageBox } from './BanHeroImageBox';
import { TeamDraft } from '@/types';
import { BanState } from '@/state/draftState';
import { getTeamBans } from '../context/useDraftLogic';

interface BansProps {
    isRightTeam?: boolean;
    team?: TeamDraft;
    banState: BanState
}

export const BansContainer: React.FC<BansProps> = ({ team, isRightTeam = false, banState }) => {

    const heroesToShow = getTeamBans(team);


    return (
        <div className={`flex   ${isRightTeam ? 'justify-end flex-row-reverse' : 'justify-start'} 
        border-b-4 border-[#xfxfxf] border-solid bg-[url('/assets/bg-two.jpg')] bg-cover bg-center bg-no-repeat`}>
            {heroesToShow.slice(0, 8).map((hero, index) => (
                <div key={`${hero}-${index}`} className="flex-shrink-0  ">
                    <BanHeroImageBox heroName={hero} active={banState.onBan == index && banState.state}
                        isRightTeam={isRightTeam}
                    />
                </div>
            ))}
        </div>
    );
};