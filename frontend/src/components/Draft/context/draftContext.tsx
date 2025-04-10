import React, { createContext, useEffect, useState } from 'react';
import { socket } from '@/socekt';
import { DraftData, TeamDraft } from '@/types';

export const DraftContext = createContext({
    draftData: null as DraftData | null,
    activeTeamTimeRemaining: 0,
    isBlueBanActive: {
        state: false,
        onBan: 0,
    },
    isRedBanActive: {
        state: false,
        onBan: 0,
    },
    isBluePickActive: {
        state: false,
        onPick: 0,
    },
    isRedPickActive: {
        state: false,
        onPick: 0,
    },

});

export const DraftProvider = ({ children }: { children: React.ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [draftData, setDraftData] = useState<DraftData | null>(null);

    const [isBlueBanActive, setIsBlueBanActive] = useState({
        state: false,
        onBan: 0,
    });
    const [isRedBanActive, setIsRedBanActive] = useState({
        state: false,
        onBan: 0,
    });

    const [isBluePickActive, setIsBluePickActive] = useState({
        state: false,
        onPick: 0,
    });
    const [isRedPickActive, setIsRedPickActive] = useState({
        state: false,
        onPick: 0,
    });
    const [activeTeamTimeRemaining, setActiveTeamTimeRemaining] = useState(0);


    function logicForBlueBanActive() {
        console.log(draftData?.team2, 'draftData?.team2');
        const state = draftData?.activeteam == 2 && !draftData?.pick
        const onBan = getFirstEmptyBan(draftData?.team2)
        setIsBlueBanActive({ state, onBan });
    }

    function logicForRedBanActive() {
        const state = draftData?.activeteam == 3 && !draftData?.pick
        const onBan = getFirstEmptyBan(draftData?.team3)
        console.log(state, 'state Red');
        setIsRedBanActive({ state, onBan });
    }

    function logicForBluePickActive() {
        const state = draftData?.activeteam == 2 && draftData?.pick
        const onPick = getFirstEmptyPick(draftData?.team2)
        setIsBluePickActive({ state, onPick });
    }

    function logicForRedPickActive() {
        const state = draftData?.activeteam == 3 && draftData?.pick
        const onPick = getFirstEmptyPick(draftData?.team3)
        setIsRedPickActive({ state, onPick });
    }

    function getFirstEmptyPick(team: TeamDraft | undefined) {
        if (!team) return 0;
        for (let i = 0; i < 5; i++) {
            const pickKey = `pick${i}_class` as keyof TeamDraft;
            const pick = team[pickKey] as string;
            if (pick.length == 0)
                return i
        }
        return 0
    }

    function getFirstEmptyBan(team: TeamDraft | undefined) {
        if (!team) return 0;
        for (let i = 0; i < 7; i++) {
            const banKey = `ban${i}_class` as keyof TeamDraft;
            const ban = team[banKey] as string;
            if (ban.length == 0)
                return i
        }
        return 0
    }

    const getBans = (team: TeamDraft | undefined) => {
        if (!team) return [];

        const bans = [];
        for (let i = 0; i < 7; i++) {
            const banKey = `ban${i}_class` as keyof TeamDraft;
            const ban = team[banKey] as string;
            bans.push(ban || '');
        }
        return bans;
    };



    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
            console.log('Disconnected from server');
        });

        socket.on('dota-draft', (data: DraftData) => {
            console.log(data, 'data');
            setDraftData(data);


        });
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('dota-draft');
            socket.off('controller');
        };
    }, []);


    useEffect(() => {
        logicForBlueBanActive();
        logicForRedBanActive();
        setActiveTeamTimeRemaining(draftData?.activeteam_time_remaining || 0);
        logicForBluePickActive();
        logicForRedPickActive();
    }, [draftData]);

    return <DraftContext.Provider value={{ draftData, activeTeamTimeRemaining, isBlueBanActive, isRedBanActive, isBluePickActive, isRedPickActive }}>{children}</DraftContext.Provider>;
};
