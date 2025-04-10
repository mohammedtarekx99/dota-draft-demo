import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { downloadAll } from './apis';

export const ActionItems: React.FC = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = async () => {
        setIsDownloading(true);
        setIsDownloaded(false);
        try {
            await downloadAll();
            setIsDownloaded(true);
            setTimeout(() => {
                setIsDownloaded(false);
            }, 3000);
        } catch (error) {
            console.error("Download failed:", error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="flex flex-row justify-around relative">
            <Link
                to="/draft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black rounded-md hover:text-gray-300 flex items-center text-l font-bold
                    hover:bg-[#021526] p-2 border-2 border-[#f1d9c1]"
            >
                <img src="/assets/arrow.png" alt="Draft UI" className="w-10 h-10 mr-1" />
                OPEN DRAFT UI
            </Link>

            <button
                onClick={handleDownload}
                className="text-black rounded-md hover:text-gray-300 flex items-center text-l font-bold
                    border-2 border-[#f1d9c1] hover:bg-[#021526] p-2 gap-2 min-w-[220px]"
                disabled={isDownloading}
            >
                {isDownloading ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-[#f1d9c1] border-r-transparent border-b-transparent border-l-transparent"></div>
                ) : (
                    <img src="/assets/download.png" alt="Download Assets" className="w-10 h-10 mr-1" />
                )}

                {isDownloaded && !isDownloading ? (
                    <span >Downloaded !</span>
                ) : (
                    <span>{isDownloading ? "Downloading assets" : "Download Assets"}</span>
                )}
            </button>
        </div>
    );
};