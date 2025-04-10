import React from "react";
import { TeamSide } from "./TeamSide";
import { DraftData, TeamDraft } from "@/types";


interface MiddleSectionProps {
    draftData: DraftData | null;
}

export const MiddleSection: React.FC<MiddleSectionProps> = ({ draftData }) => {
    return (
        <div className="flex flex-row items-center justify-between min-h-max 
        bg-gradient-to-r from-black to-[#484846]  shadow-md
        ">
            <TeamSide teamName="Team 1" timer={draftData?.radiant_bonus_time} />
            <p className="text-white text-2xl font-bold px-7">
                DOTA
            </p>
            <TeamSide teamName="Team 2" timer={draftData?.dire_bonus_time} />
        </div>
    );
};