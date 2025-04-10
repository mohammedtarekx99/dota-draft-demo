import React from "react";
import { ControllerContent } from "./Controller/ControllerContent";
import { ControllerProvider } from "./Controller/context";

export const Controllers = () => {
    return (
        <ControllerProvider>
            <ControllerContent />
        </ControllerProvider>
    );
};

export default Controllers;