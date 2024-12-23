
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DiscordLogin = () => {
  const navigate = useNavigate();

  const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID; // Fetch from .env
  const redirectUri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI); // Fetch from .env
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify%20guilds.members.read`;

  const handleLogin = () => {
    window.location.href = discordAuthUrl;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange the code for an access token
      axios
        .post('https://discord.com/api/oauth2/token', null, {
          params: {
            client_id: clientId,
            client_secret: import.meta.env.REACT_APP_DISCORD_CLIENT_SECRET, // Fetch from .env
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: import.meta.env.VITE_REDIRECT_URI, // Fetch from .env
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .then(async (response) => {
          const { access_token } = response.data;

          // Fetch the user's guild memberships
          const guildMemberData = await axios.get('https://discord.com/api/users/@me/guilds/1151794217073516575/member', {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          });

          const { roles } = guildMemberData.data;

          if (roles.includes('1187146603782492243')) {
            // User has the required role
            navigate('/dashboard');
          } else {
            alert('You do not have the required role to access this site.');
          }
        })
        .catch((error) => {
          console.error('Error during Discord OAuth flow:', error);
        });
    }
  }, [navigate]);

  return (
    <div>
      <button onClick={handleLogin}>Login with Discord</button>
    </div>
  );
};

export default DiscordLogin;
