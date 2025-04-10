export interface BanState {
    state: boolean;
    onBan: number;
}

export interface PickState {
    state: boolean;
    onPick: number;
}

export interface DraftState {
    isBlueBanActive: BanState;
    isRedBanActive: BanState;
    isBluePickActive: PickState;
    isRedPickActive: PickState;
}

export const initialDraftState: DraftState = {
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
}; 