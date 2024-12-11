import React from 'react';

interface AqiBoxProps {
    city: string;
    date: string;
    aqi: number;
    className?: string; 
}

const AqiBox: React.FC<AqiBoxProps> = ({ city, date, aqi }) => {
    const aqiColor = () => {
        if (aqi <= 50) {
            return 'bg-green-500';
        } else if (aqi <= 100) {
            return 'bg-yellow-500';
        } else if (aqi <= 200) {
            return 'bg-orange-500';
        } else {
            return 'bg-red-500';
        }
    };

    return (
        <div className="bg-blue-800 text-white p-4 rounded-lg ${className}">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm font-bold">{city}</p>
                    <p className="text-xs">{date}</p>
                </div>
                <div>
                    <p className="text-sm font-bold">09:45 PM</p>
                </div>
            </div>

            <div className="flex items-center mt-4">
                <div className="w-full h-4 bg-gray-200 rounded-full">
                    <div
                        className={`h-4 rounded-full ${aqiColor()}`}
                        style={{ width: `${(aqi / 600) * 100}%` }}
                    ></div>
                </div>
                <div className="ml-4">
                    <p className="text-2xl font-bold">{aqi}</p>
                    <p className="text-sm">
                        The air quality is unhealthy for those sensitive to air
                        pollution. If you experience...
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-xs">Source: Central Pollution Control Board</p>
            </div>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md mt-4">
                See Today's AQI →
            </button>
        </div>
    );
};

export default AqiBox;