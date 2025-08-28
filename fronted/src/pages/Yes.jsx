import React, { useEffect } from "react";

export default function Yes() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-4">
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-md p-6 bg-white/90 rounded-xl shadow-lg">
        
        <div
          className="tenor-gif-embed rounded-lg w-full max-w-[220px] h-auto"
          data-postid="253027946666209433"
          data-share-method="host"
          data-aspect-ratio="1.37853"
          data-width="100%"
        >
          <a href="https://tenor.com/view/mochi-cat-mochi-and-goma-goma-and-peach-mochi-mochi-peach-cat-gif-gif-253027946666209433">
            Mochi Cat GIF
          </a>{" "}
          from <a href="https://tenor.com/search/mochi-gifs">Mochi GIFs</a>
        </div>

        <h1 className="text-3xl font-bold">Hehehehe, I knew it! Love you a lot 😘</h1>

        <div className="fixed bottom-2 right-4 text-sm font-bold text-black/70">
          Srijon 💖
        </div>
      </div>
    </div>
  );
}
