export const config = {
    // the following three lines MUST be updated
    clientId: "{YOUR_AUTH0_CLIENT_ID}",
    domain: "{YOUR_AUTH0_DOMAIN}",
    // For production, redirect and logoutUrl should be on port 3005
    redirect: "http://localhost:3000/callback",
    audience: 'https://{YOUR_AUTH0_DOMAIN}/userinfo'
};