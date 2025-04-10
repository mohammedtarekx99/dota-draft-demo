export interface GameState {
    provider?: {
        name: string;
        appid: number;
        version: number;
        timestamp: number;
    };
    map?: {
        name: string;
        matchid: string;
        game_time: number;
        clock_time: number;
        daytime: boolean;
        nightstalker_night: boolean;
        radiant_score: number;
        dire_score: number;
        game_state: string;
        paused: boolean;
        win_team: string;
        customgamename: string;
        radiant_ward_purchase_cooldown: number;
        dire_ward_purchase_cooldown: number;
        roshan_state: string;
        roshan_state_end_seconds: number;
        radiant_win_chance: number;
    };

    draft?: {
        activeteam: number;
        pick: boolean;
        activeteam_time_remaining: number;
        radiant_bonus_time: number;
        dire_bonus_time: number;
        team2: TeamDraft;
        team3: TeamDraft;
    };

    added?: {
        player?: {
            team2?: boolean;
            team3?: boolean;
        };
        draft?: {
            activeteam: boolean;
            pick: boolean;
            activeteam_time_remaining: boolean;
            radiant_bonus_time: boolean;
            dire_bonus_time: boolean;
            team2: boolean;
            team3: boolean;
        };
    };
    auth?: {
        token: string;
    };
}


export interface TeamDraft {
    home_team: boolean;
    pick0_id: number;
    pick0_class: string;
    pick1_id: number;
    pick1_class: string;
    pick2_id: number;
    pick2_class: string;
    pick3_id: number;
    pick3_class: string;
    pick4_id: number;
    pick4_class: string;
    ban0_id: number;
    ban0_class: string;
    ban1_id: number;
    ban1_class: string;
    ban2_id: number;
    ban2_class: string;
    ban3_id: number;
    ban3_class: string;
    ban4_id: number;
    ban4_class: string;
    ban5_id: number;
    ban5_class: string;
    ban6_id: number;
    ban6_class: string;
} 