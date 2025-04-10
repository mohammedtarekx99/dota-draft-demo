import React from 'react';
import { useCustomEvent } from '@/socekt';
import { Link } from 'react-router-dom';
import { downloadAnimations, downloadImages, downloadAll } from './apis';

export const Controllers: React.FC = () => {
    const { controllerData, isConnected } = useCustomEvent();

    return (
        <div className="w-full h-full bg-white p-4">
            <nav className="bg-gray-800 p-4">
                <div className="flex gap-4">
                    <Link to="/draft" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">Draft</Link>
                    <Link to="/" className="text-white hover:text-gray-300">Controllers</Link>
                </div>
            </nav>
            <h1 className="text-2xl font-bold mb-4">Controllers</h1>
            <div className="mb-4">
                <div className={`inline-block px-3 py-1 rounded-full font-semibold ${isConnected ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    Socket: {isConnected ? 'Connected' : 'Disconnected'}
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex gap-4">
                    <button
                        onClick={downloadAnimations}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Download Animations
                    </button>
                    <button
                        onClick={downloadImages}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Download Images
                    </button>
                    <button
                        onClick={downloadAll}
                        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Download All Assets
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {controllerData && (
                    <pre className="bg-gray-100 p-4 rounded">
                        {JSON.stringify(controllerData, null, 2)}
                    </pre>
                )}
            </div>
        </div>
    );
};

export default Controllers; 