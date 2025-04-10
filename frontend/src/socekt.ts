import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { DraftData } from './types';

const URL = import.meta.env.PROD ? undefined : 'http://localhost:4000';

export const socket = io(URL as string | undefined);



export const useCustomEvent = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [draftData, setDraftData] = useState<DraftData | null>(null);
    const [controllerData, setControllerData] = useState<any>(null);


    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
            console.log('Disconnected from server');
        });



        socket.on('dota-draft', (data: DraftData) => {
            setDraftData(data);
            console.log(data);
        });

        socket.on('controller', (data: any) => {
            setControllerData(data);
            console.log('Controller data received:', data);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('dota-draft');
            socket.off('controller');
        };
    }, []);



    return {
        isConnected,
        draftData,
        controllerData,
    };
};