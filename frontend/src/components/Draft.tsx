import React from "react";
import { DraftContent } from "@/components/Draft/DraftContent";
import { DraftProvider } from "./Draft/context/draftContext";

export const Draft = () => {
    return (
        <DraftProvider>
            <DraftContent />
        </DraftProvider>
    );
};

export default Draft;