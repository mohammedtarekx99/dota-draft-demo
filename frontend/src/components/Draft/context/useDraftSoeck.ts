import { socket } from "@/socekt";
import { DraftData } from "@/types";
import { useEffect } from "react";

export function useDraftSocket(setDraftData: (data: DraftData) => void) {
    useEffect(() => {
        socket.on('dota-draft', setDraftData);
        return () => {
            socket.off('dota-draft', setDraftData);
            return;
        };
    }, [setDraftData]);
}
