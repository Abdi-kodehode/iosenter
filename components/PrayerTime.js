import React, { useState, useEffect, useMemo } from 'react';
import { prayerTime } from '@/times/prayer_times';

const PrayerTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerData, setPrayerData] = useState({});

  useEffect(() => {
    const currentDate = currentTime.toISOString().slice(0, 10);
    const selectedPrayerData = prayerTime.find(
      (data) => data.d_date === currentDate
    );
    setPrayerData(selectedPrayerData || {});
    // console.log('currentDate:', currentDate);
    // console.log('prayerTime:', prayerTime);
    // console.log('selectedPrayerData:', selectedPrayerData);
  }, [currentTime]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const getNextPrayer = () => {
    const prayerTimes = [
      'fajr',
      'soloppgang',
      'duhr',
      'asr',
      'maghrib',
      'isha',
    ];
    const currentTimeInMinutes = convertToMinutes(
      currentTime.toLocaleTimeString()
    );

    // Kjører en for loop her igjennom "dagens" array for å finne riktig bønn
    for (const prayer of prayerTimes) {
      if (currentTimeInMinutes < convertToMinutes(prayerData[prayer])) {
        return prayer;
      }
    }

    return null;
  };

  // Bruker useMemo fordi kalkulasjonen skjer en gang om dagen 
  const convertToMinutes = useMemo(() => {
    const memoizedConvertToMinutes = (time) => {
      const [hours, minutes] = time.split(':');
      return parseInt(hours) * 60 + parseInt(minutes);
    };
    return memoizedConvertToMinutes;
  }, []);

  return (
    <div className="flex flex-col items-center py-10 px-8 border-2 border-rose-500">
      <h1 className="text-2xl font-bold mb-4">Prayer Time</h1>
      <div className="w-full">
        <table className="w-full text-left table-collapse">
          <thead>
            <tr>
              <th className="text-xs font-medium p-2 bg-gray-200">Name</th>
              <th className="text-xs font-medium p-2 bg-gray-200">Time</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(prayerData).map(([key, value], index) => {
              if (key === 'd_date') {
                return null;
              }

              const isNext = key === getNextPrayer();

              return (
                <tr
                  key={index}
                  className={`${
                    isNext ? 'bg-gray-300' : ''
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
