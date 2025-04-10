import React from 'react';

interface ConnectionStatusProps {
    isConnected: boolean;
}

export const ConnectionStatus: React.FC<ConnectionStatusProps> = ({ isConnected }) => {
    return (
        <div className="flex flex-col gap-5 mb-4 ">
            <div className="flex flex-row items-center gap-2">
                <img src="/assets/program.png" alt="Connection Status" className="w-10 h-10" />
                <h3 className="text-2xl font-bold">Connection Status</h3>
            </div>
            <div className="flex flex-row justify-between gap-10 px-3 py-1 rounded-full font-semibold">
                <div className="flex flex-row items-center gap-2">
                    <img src="/assets/adjustment.png" alt="Backend Socket" className="w-6 h-6 mr-1" />
                    Backend Socket:
                    {isConnected ? (
                        <span className="flex items-center">
                            <img src="/assets/true-mark.png" alt="Connected" className="w-4 h-4 mr-1" />
                            Connected
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <img src="/assets/warning-mark.png" alt="Disconnected" className="w-4 h-4 mr-1" />
                            Disconnected
                        </span>
                    )}
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                    <img src="/assets/adjustment.png" alt="Backend Socket" className="w-6 h-6 mr-1" />
                    GSI server:
                    {isConnected ? (
                        <span className="flex items-center">
                            <img src="/assets/true-mark.png" alt="Connected" className="w-4 h-4 mr-1" />
                            Connected
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <img src="/assets/warning-mark.png" alt="Disconnected" className="w-4 h-4 mr-1" />
                            Disconnected
                        </span>
                    )}
                </div>



            </div>
        </div>
    );
};