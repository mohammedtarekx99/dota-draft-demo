import React from 'react';
import { useCustomEvent } from '@/socekt';
import { ActionItems } from './Controller/ActionItems';
import { ConnectionStatus } from './Controller/ConnectionStatus';
import { ControllerHeader } from './Controller/ControllerHeader';


export const Controllers: React.FC = () => {
    const { isConnected } = useCustomEvent();

    return (
        <div className="w-full min-h-screen items-center flex flex-col  bg-gray-100 ">
            <ControllerHeader />
            <div className="flex flex-col justify-center  p-4
            rounded-md bg-gray-200 border-2 border-[#f1d9c1]">
                <ConnectionStatus isConnected={isConnected} />
                <hr className="border-t border-[#53526e] mt-5 mb-10" />
                <ActionItems />
            </div>
        </div>
    );
};

export default Controllers;