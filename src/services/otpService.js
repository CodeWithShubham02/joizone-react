const API_URL =
    "https://fms.bizipac.com/apinew/ws_new/userverification.php?";

export async function sendOtp(mobile, password) {

    try {

        const response = await fetch(API_URL, {
            method: "POST",

            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },

            body: new URLSearchParams({
                mobile: mobile,
                password: password,
            }),
        });

        const responseText = await response.text();

        console.log("STATUS:", response.status);
        console.log("RESPONSE:", responseText);

        if (!response.ok) {
            throw new Error(
                `Server Error ${response.status}: ${responseText}`
            );
        }

        return JSON.parse(responseText);

    } catch (error) {

        console.error("OTP API ERROR:", error);

        throw error;
    }
}