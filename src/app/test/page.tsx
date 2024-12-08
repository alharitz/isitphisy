// testing firebase connection

"use client";

import React from "react";

import { useEffect } from "react";
import firebaseApp from "firebase/app";

const TestFirebase = () => {
    useEffect(() => {
        console.log("Firebase App: ", firebaseApp);
    }, []);

    return (
        <div>
            <h1>Testing Firebase</h1>
            <p>Check</p>
        </div>
    );
};

export default TestFirebase;