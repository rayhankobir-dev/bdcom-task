import { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { socket } from "./socket";

export function Ram() {
  const [ram, setRam] = useState(0);

  useEffect(() => {
    socket.on("stats", (data) => {
      setRam(data.ram);
    });
    return () => {
      socket.off();
    };
  }, []);

  return (
    <div className="w-48 bg-black">
      <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={ram / 100} />
    </div>
  );
}
