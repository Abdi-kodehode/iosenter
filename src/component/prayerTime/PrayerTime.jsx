import React, { useState, useEffect } from "react";
import { pTimes } from "../../data/prayerData/pTimes";

const PrayerTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerData, setPrayerData] = useState({});

  useEffect(() => {
    const currentDate = currentTime.toISOString().slice(0, 10);
    const selectedPrayerData = pTimes.find(
      (data) => data.d_date === currentDate
    );
    setPrayerData(selectedPrayerData || {});
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getNextPrayer = () => {
    const { fajr, soloppgang, duhr, asr, maghrib, isha } = prayerData;
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinutes;

    if (currentTimeInMinutes < convertToMinutes(fajr)) {
      return "fajr";
    } else if (currentTimeInMinutes < convertToMinutes(soloppgang)) {
      return "soloppgang";
    } else if (currentTimeInMinutes < convertToMinutes(duhr)) {
      return "duhr";
    } else if (currentTimeInMinutes < convertToMinutes(asr)) {
      return "asr";
    } else if (currentTimeInMinutes < convertToMinutes(maghrib)) {
      return "maghrib";
    } else if (currentTimeInMinutes < convertToMinutes(isha)) {
      return "isha";
    }
  };

  const convertToMinutes = (time) => {
    const [hours, minutes] = time.split(":");
    return parseInt(hours) * 60 + parseInt(minutes);
  };

  return (
    <div className="flex flex-col items-center py-20 px-4">
      <h1 className="text-2xl font-bold mb-4">Prayer Time</h1>
      <div className="w-full max-w-sm">
        <table className="w-full text-left table-collapse">
          <thead>
            <tr>
              <th className="text-xs font-medium p-2 bg-gray-200">Name</th>
              <th className="text-xs font-medium p-2 bg-gray-200">Time</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(prayerData).map(([key, value], index) => {
              if (key === "d_date") {
                return null;
              }

              const isNext = key === getNextPrayer();

              return (
                <tr
                  key={index}
                  className={`${
                    isNext ? "bg-gray-300" : ""
                  } p-4 hover:bg-gray-400`}
                >
                  <td className="font-bold">{key}</td>
                  <td>{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrayerTime;
