import React, { createContext, useEffect, useState } from 'react';
import { socket } from '@/socekt';

export const ControllerContext = createContext<{
    isConnected: boolean;
    dotaGSITimestamp: number | null;
}>({
    isConnected: false,
    dotaGSITimestamp: 0,
});

export const ControllerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [dotaGSITimestamp, setDotaGSITimestamp] = useState<number | null>(null);

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('dota-gsi-timestamp', (data: { timestamp: number }) => {
            setDotaGSITimestamp(data.timestamp);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('dota-gsi-timestamp');
        };
    }, []);

    return <ControllerContext.Provider value={{ isConnected, dotaGSITimestamp }}> {children} </ControllerContext.Provider>;
};
