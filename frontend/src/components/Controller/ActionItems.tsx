import React from 'react';
import { Link } from 'react-router-dom';
import { downloadAll } from './apis';

export const ActionItems: React.FC = () => {
    return (
        <div className="flex flex-row justify-around ">
            <Link to="/draft" target="_blank" rel="noopener noreferrer"
                className="text-black rounded-md hover:text-gray-300 flex items-center text-l font-bold
                    hover:bg-[#021526] p-2
                    border-2 border-[#f1d9c1]
                    ">
                <img src="/assets/arrow.png" alt="Draft UI" className="w-10 h-10 mr-1" />
                OPEN DRAFT UI
            </Link>
            <button
                onClick={downloadAll}
                className="text-black rounded-md hover:text-gray-300 flex items-center text-l font-bold
                    border-2 border-[#f1d9c1] hover:bg-[#021526] p-2"
            >
                <img src="/assets/download.png" alt="Download  Assets" className="w-10 h-10 mr-1" />
                Download  Assets
            </button>
        </div>
    );
};