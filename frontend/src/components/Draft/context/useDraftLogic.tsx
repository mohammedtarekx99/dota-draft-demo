import { useMemo } from 'react';
import { DraftData, TeamDraft } from '@/types';

export function useDraftLogic(draftData: DraftData | null) {
    const blueBanState = useMemo(() => {
        const state = draftData?.activeteam === 2 && !draftData?.pick;
        const onBan = getFirstEmptyBan(draftData?.team2);
        return { state, onBan };
    }, [draftData]);

    const redBanState = useMemo(() => {
        const state = draftData?.activeteam === 3 && !draftData?.pick;
        const onBan = getFirstEmptyBan(draftData?.team3);
        return { state, onBan };
    }, [draftData]);

    const bluePickState = useMemo(() => {
        const state = draftData?.activeteam === 2 && !!draftData?.pick;
        const onPick = getFirstEmptyPick(draftData?.team2);
        return { state, onPick };
    }, [draftData]);

    const redPickState = useMemo(() => {
        const state = draftData?.activeteam === 3 && !!draftData?.pick;
        const onPick = getFirstEmptyPick(draftData?.team3);
        return { state, onPick };
    }, [draftData]);

    const activeTeamTimeRemaining = useMemo(() => {
        return draftData?.activeteam_time_remaining || 0;
    }, [draftData]);

    return {
        blueBanState,
        redBanState,
        bluePickState,
        redPickState,
        activeTeamTimeRemaining,
    };
}

const getFirstEmptyBan = (team: TeamDraft | undefined): number => {
    if (!team) return 0;
    for (let i = 0; i < 7; i++) {
        const banKey = `ban${i}_class` as keyof TeamDraft;
        const ban = team[banKey] as string;
        if (ban.length === 0) return i;
    }
    return 0;
};

const getFirstEmptyPick = (team: TeamDraft | undefined): number => {
    if (!team) return 0;
    for (let i = 0; i < 5; i++) {
        const pickKey = `pick${i}_class` as keyof TeamDraft;
        const pick = team[pickKey] as string;
        if (pick.length === 0) return i;
    }
    return 0;
};

export const getTeamPicks = (team: TeamDraft | undefined) => {
    if (!team) return Array(5).fill('');
    const picks = [];
    for (let i = 0; i < 5; i++) {
        const pickKey = `pick${i}_class` as keyof TeamDraft;
        const pick = team[pickKey] as string;
        picks.push(pick || '');
    }
    return picks;
};

export const getTeamBans = (team: TeamDraft | undefined) => {
    if (!team) return Array(7).fill('');
    const bans = [];
    for (let i = 0; i < 7; i++) {
        const banKey = `ban${i}_class` as keyof TeamDraft;
        const ban = team[banKey] as string;
        bans.push(ban || '');
    }
    return bans;
};

