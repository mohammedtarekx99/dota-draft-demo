import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Draft from '@/components/Draft';
import Controllers from '@/components/Controllers';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/draft" element={<Draft />} />
            <Route path="/" element={<Controllers />} />
        </Routes>
    );
};

export default AppRoutes; 