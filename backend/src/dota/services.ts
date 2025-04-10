import { server as socketServer } from '../socket';
import { GameState } from '../types/gamestate';


export function emitDraftData(data: GameState) {
    if (data.map?.game_state !== 'DOTA_GAMERULES_STATE_HERO_SELECTION' && !data.draft) return;
    const draftData = data.draft
    socketServer.io.emit('dota-draft', { ...draftData });
}

export function emitDotaGSISate(data: GameState) {
    socketServer.io.emit('dota-gstate', { ...data });
}