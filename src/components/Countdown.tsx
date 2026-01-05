import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface CountdownProps {
  releaseDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ releaseDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(releaseDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="mx-1">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-zinc-800 to-slate-900 shadow-lg text-white p-4 rounded-lg">
      <div className="flex items-center mb-2">
        <Calendar className="w-5 h-5 mr-2" />
        <span className="font-semibold">Release Date: {new Date(releaseDate).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center">
        <Clock className="w-5 h-5 mr-2" />
        <div className="font-semibold">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </div>
  );
};

export default Countdown;