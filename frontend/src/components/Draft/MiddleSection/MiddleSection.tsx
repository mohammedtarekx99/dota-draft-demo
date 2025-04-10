import React, { useContext } from "react";
import { TeamSide } from "./TeamSide";
import { DraftData, TeamDraft } from "@/types";
import { DraftContext } from "../context/draftContext";



export const MiddleSection: React.FC = () => {
    const { activeTeamTimeRemaining, draftData } = useContext(DraftContext);

    const activeTeamRemainingIsZero = activeTeamTimeRemaining === 0;

    return (
        <div className="flex flex-row items-center justify-around min-h-max 
        bg-gradient-to-r from-black to-[#484846]  shadow-md  w-[330px]
        ">
            <TeamSide teamName="Team 1" timer={draftData?.radiant_bonus_time} active={draftData?.activeteam === 2
                && activeTeamRemainingIsZero
            } />
            <TeamSide teamName="Team 2" timer={draftData?.dire_bonus_time} active={draftData?.activeteam === 3
                && activeTeamRemainingIsZero
            } />
        </div>
    );
};