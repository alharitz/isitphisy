import { StringToBoolean } from "class-variance-authority/types";
import { NextResponse } from "next/server";

const GOOGLE_API_KEY = "AIzaSyBwyhas3uMP1JfDNHaPLKqIRMQsxB-EG9Q";

const GOOGLE_SAFE_BROWSING_URL = "https://safebrowsing.googleapis.com/v4/threatMatches:find";

interface SafeBrowsingResponse {
    matches?: Array<{
        threatType: string;
        platformType: string;
        threat: {
            url: string;
        };
    }>;
}

export async function POST(request: Request){
    const { url } = await request.json();

    // construct request body for safe browsing v5 api
    const requestBody = {
        client: {
            clientId: "is-it-phisy", // Optional, can be any string
            clientVersion: "1.0.0", // Optional, can be any string
          },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "POTENTIALLY_HARMFUL_APPLICATION", "UNWANTED_SOFTWARE"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [
                {
                    url: url,
                },
            ],
        },
    };

    try {
        const response = await fetch(`${GOOGLE_SAFE_BROWSING_URL}?key=${GOOGLE_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        const data: SafeBrowsingResponse = await response.json();

        if (data.matches && data.matches.length > 0){
            return NextResponse.json({
                isPhishing: true,
                message: `Phishing or malicious content detected: ${data.matches[0].threatType}`,
            });
        } else {
            return NextResponse.json ({ isPhishing: false, message: "There is no match in our database." });
        }
    } catch (error) {
        console.error("Server error:", error); // Log server-side errors
        return NextResponse.json ({ error: "Failed to check URL."}, { status: 500 });
    }
}