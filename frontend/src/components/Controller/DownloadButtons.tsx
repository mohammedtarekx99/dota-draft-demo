import React from 'react';
import { downloadAnimations, downloadImages, downloadAll } from './apis';

export const DownloadButtons: React.FC = () => {
    return (
        <button
            onClick={downloadAll}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
            Download All Assets
        </button>
    );
};