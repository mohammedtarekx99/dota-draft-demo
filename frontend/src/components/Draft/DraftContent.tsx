import React, { useContext } from "react";
import { Picks } from "@/components/Draft/Picks/PicksContainer";
import { BansContainer } from "@/components/Draft/Bans/BansContainer";
import { MiddleSection } from "@/components/Draft/MiddleSection/MiddleSection";
import { AboveMiddleSelection } from "@/components/Draft/MiddleSection/AboveMiddleSelection";
import { DraftContext, } from "@/components/Draft/context/draftContext";

export const DraftContent = () => {
    const {
        draftData,
        isBlueBanActive,
        isRedBanActive,
        isBluePickActive,
        isRedPickActive
    } = useContext(DraftContext);

    if (!draftData) return null;

    return (
        <div className="w-[1920px] h-[1080px]">
            <div className="absolute bottom-0">
                <div className="flex flex-row justify-between">
                    <BansContainer team={draftData?.team2} banState={isBlueBanActive} />
                    <AboveMiddleSelection />
                    <BansContainer isRightTeam team={draftData?.team3} banState={isRedBanActive} />
                </div>
                <div className="flex flex-row justify-between">
                    <Picks team={draftData?.team2} active={isBluePickActive.state} />
                    <MiddleSection draftData={draftData} />
                    <Picks isRightTeam team={draftData?.team3} active={isRedPickActive.state} />
                </div>
            </div>
        </div>
    );
};

