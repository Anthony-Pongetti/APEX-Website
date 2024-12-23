import React from 'react';

function App() {
  const handleLogin = () => {
    console.log("Login button clicked");
  
    const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
    const redirectUri = encodeURIComponent(import.meta.env.VITE_REDIRECT_URI);
  
    console.log("Client ID:", clientId);
    console.log("Redirect URI:", redirectUri);
  
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
  
    console.log("Redirecting to:", discordAuthUrl);
  
    window.location.href = discordAuthUrl; // Redirect to Discord OAuth
  };

  return (
    <div className="flex justify-center items-center min-h-screen custom-background"> {/* Applied custom class here */}
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">APEX member access only</h1>
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login with Discord
        </button>
      </div>
    </div>
  );
}

export default App;

