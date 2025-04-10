import React, { useContext } from "react";
import { Picks } from "@/components/Draft/Picks/PicksContainer";
import { BansContainer } from "@/components/Draft/Bans/BansContainer";
import { MiddleSection } from "@/components/Draft/MiddleSection/MiddleSection";
import { AboveMiddleSelection } from "@/components/Draft/MiddleSection/AboveMiddleSelection";
import { DraftContext, } from "@/components/Draft/context/draftContext";

export const DraftContent = () => {
    const {
        draftData,
        blueBanState,
        redBanState,
        bluePickState,
        redPickState
    } = useContext(DraftContext);


    return (
        <div className="w-[1920px] h-[1080px]">
            <div className="absolute bottom-0">
                <div className="flex flex-row justify-between">
                    <BansContainer team={draftData?.team2} banState={blueBanState} />
                    <AboveMiddleSelection />
                    <BansContainer isRightTeam team={draftData?.team3} banState={redBanState} />
                </div>
                <div className="flex flex-row justify-between">
                    <Picks team={draftData?.team2} active={bluePickState.state}
                        pickState={bluePickState}
                    />
                    <MiddleSection draftData={draftData} />
                    <Picks isRightTeam team={draftData?.team3} active={redPickState.state}
                        pickState={redPickState}
                    />
                </div>
            </div>
        </div>
    );
};

