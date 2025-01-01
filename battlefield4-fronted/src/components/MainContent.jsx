import { useState } from "react";
import { useEffect } from "react";
import { Buttons } from "../utils/data";

function MainContent() {
  const [infoData, setInfoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/server-info`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch server info");
        }
        const data = await response.json();

        setInfoData(data.serverInfo[0]);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading server info...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section
      id="mainContent"
      className="absolute z-10 top-[145px] h-full w-full md:w-[65%] md:max-h-[630px] overflow-y-auto text-white px-4 md:px-0"
    >
      <div className="max-w-4xl rounded-lg shadow-lg ">
        {/* Header Section */}
        <div className="text-start text-gray-300">
          <h1 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            ! RC3-BASEMAPS
          </h1>
          <p className="text-sm md:text-base tracking-widest flex items-center gap-x-2 justify-start">
            <img
              src="/germany-flag.svg"
              alt="germany-flag"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ
          </p>
          <p className="mt-2 text-gray-300 text-xs md:text-sm font-semibold">
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
            Request, Appeal, Visit us: www.epg.gg | Discord
            <br />
            https://discord.gg/3r5NK4d join
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row w-full text-xs gap-2 md:gap-4 mt-6">
          {Buttons.map((btn, index) => (
            <button
              key={index}
              className="border-gray-600 text-white border hover:bg-white hover:text-black w-full font-medium px-4 py-2"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Server Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 w-full md:w-[50%]">
          {infoData && (
            <>
              <div className="font-semibold leading-3 text-center sm:text-left">
                <h3 className="text-sm">PLAYERS</h3>
                <p className="text-xl">{infoData.players}</p>
              </div>
              <div className="font-semibold leading-3 text-center sm:text-left">
                <h3 className="text-sm">PING</h3>
                <p className="text-xl">{infoData.ping}</p>
              </div>
              <div className="font-semibold leading-3 text-center sm:text-left">
                <h3 className="text-sm">TICKRATE</h3>
                <p className="text-xl">{infoData.tickrate}</p>
              </div>
            </>
          )}
        </div>

        {/* Settings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3 uppercase">
          {/* Settings Column */}
          {infoData && (
            <div>
              <h3 className="text-sm font-semibold mb-1 uppercase">Settings</h3>
              <ul className="space-y-2 text-xs md:text-lg ml-2 font-base">
                <li>
                  Region: <span>{infoData.settings.region}</span>
                </li>
                <li>
                  PunkBuster: <span>{infoData.settings.punkbuster}</span>
                </li>
                <li>
                  FairFight: <span>{infoData.settings.fairfight}</span>
                </li>
                <li>
                  Password: <span>{infoData.settings.password}</span>
                </li>
                <li>
                  Preset: <span>{infoData.settings.preset}</span>
                </li>
              </ul>
            </div>
          )}

          {/* Advanced Column */}
          {infoData && (
            <div>
              <h3 className="text-sm font-semibold mb-1 uppercase">Advanced</h3>
              <ul className="space-y-2 text-xs md:text-lg ml-2 font-base">
                {Object.entries(infoData.settings.advanced).map(
                  ([key, value]) => (
                    <li key={key}>
                      {key.replace(/([A-Z])/g, " $1")}: <span>{value}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Rules Column */}
          {infoData && (
            <div>
              <h3 className="text-sm font-semibold mb-1 uppercase">Rules</h3>
              <ul className="space-y-2 text-xs md:text-lg ml-2 font-base">
                {Object.entries(infoData.rules).map(([key, value]) => (
                  <li key={key}>
                    {key.replace(/([A-Z])/g, " $1")}: <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default MainContent;
