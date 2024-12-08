"use client";

import { useState } from "react";

const Home = () => {
    const [url, setUrl] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // send post request to api
        const response = await fetch("api/checkPhishing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
        });

        const data = await response.json();

        if (data.isPhishing) {
            setStatus(`Warning: ${data.message}`);
        } else {
            setStatus(data.message);
        }
    };

    return (
        <div>
            <h1>Phishing Link Checker</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="url"
                    placeholder="Is It Phisy?"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <button type="submit">Check URL</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Home;