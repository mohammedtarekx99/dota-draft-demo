import React, { createContext, useState } from 'react';
import { socket } from '@/socekt';
import { DraftData } from '@/types';
import { useDraftLogic } from '@/components/Draft/context/useDraftLogic';
import { useEffect } from 'react';
import { BanState, PickState } from '@/state/draftState';
type DraftContextType = {
    draftData: DraftData | null;
    activeTeamTimeRemaining: number;
    blueBanState: BanState;
    redBanState: BanState;
    bluePickState: PickState;
    redPickState: PickState;
};

export const DraftContext = createContext<DraftContextType>({
    draftData: null,
    activeTeamTimeRemaining: 0,
    blueBanState: { state: false, onBan: 0 },
    redBanState: { state: false, onBan: 0 },
    bluePickState: { state: false, onPick: 0 },
    redPickState: { state: false, onPick: 0 },
});

export const DraftProvider = ({ children }: { children: React.ReactNode }) => {
    const [draftData, setDraftData] = useState<DraftData | null>(null);

    useEffect(() => {
        socket.on('dota-draft', (data: DraftData) => {
            setDraftData(data);
        });

        return () => {
            socket.off('dota-draft');
        };
    }, []);

    const {
        blueBanState,
        redBanState,
        bluePickState,
        redPickState,
        activeTeamTimeRemaining,
    } = useDraftLogic(draftData);

    return (
        <DraftContext.Provider
            value={{
                draftData,
                activeTeamTimeRemaining,
                blueBanState,
                redBanState,
                bluePickState,
                redPickState,
            }}
        >
            {children}
        </DraftContext.Provider>
    );
};
