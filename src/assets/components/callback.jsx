import React, { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code'); // Extract "code" parameter from URL

    if (code) {
      const clientId = process.env.REACT_APP_DISCORD_CLIENT_ID;
      const clientSecret = process.env.REACT_APP_DISCORD_CLIENT_SECRET;
      const redirectUri = process.env.REACT_APP_REDIRECT_URI;
      const tokenUrl = 'https://discord.com/api/oauth2/token';

      // Exchange authorization code for access token
      axios
        .post(
          tokenUrl,
          new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
          }),
          {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        )
        .then((response) => {
          console.log('Access Token:', response.data.access_token);
          // Here, you can save the token to state, localStorage, or context
        })
        .catch((error) => {
          console.error('Error fetching token:', error);
        });
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-2xl">Authenticating...</h2>
    </div>
  );
};

export default Callback;
