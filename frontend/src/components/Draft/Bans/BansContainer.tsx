import React, { useContext } from 'react';
import { BanHeroImageBox } from './BanHeroImageBox';
import { TeamDraft } from '@/types';
import { BanState } from '@/state/draftState';

interface BansProps {
    isRightTeam?: boolean;
    team?: TeamDraft;
    banState: BanState
}

export const BansContainer: React.FC<BansProps> = ({ team, isRightTeam = false, banState }) => {
    const getBans = () => {
        if (!team) return dummyBans;

        const bans = [];
        for (let i = 0; i < 7; i++) {
            const banKey = `ban${i}_class` as keyof TeamDraft;
            const ban = team[banKey] as string;
            bans.push(ban || '');
        }
        return bans;
    };

    const dummyBans = [
        'axe',
        'crystal_maiden',
        'lina',
        'pudge',
        'alchemist',
        'invoker',
        'juggernaut',
    ];

    const heroesToShow = getBans() || dummyBans;


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