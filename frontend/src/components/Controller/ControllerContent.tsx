import React, { useContext } from 'react';
import { ActionItems } from './components/ActionItems';
import { ConnectionStatus } from './components/ConnectionStatus';
import { ControllerHeader } from './components/ControllerHeader';
import { ControllerContext } from './context';


export const ControllerContent: React.FC = () => {
    const { isConnected } = useContext(ControllerContext);

    return (
        <div className="w-full min-h-screen items-center flex flex-col  bg-gray-100 ">
            <ControllerHeader />
            <div className="flex flex-col justify-center  p-4
            rounded-md bg-gray-200 border-2 border-[#f1d9c1] min-w-[850px]">
                <ConnectionStatus isConnected={isConnected} />
                <hr className="border-t border-[#53526e] mt-5 mb-10" />
                <ActionItems />
            </div>
        </div>
    );
};

export default ControllerContent;