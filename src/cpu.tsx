import { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import { socket } from "./socket";

export function Cpu() {
  const [cpu, setCpu] = useState(0);
  useEffect(() => {
    socket.on("stats", (data) => {
      setCpu(data.cpu);
    });
    return () => {
      socket.off();
    };
  }, []);

  return (
    <div className="w-48 bg-black">
      <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={cpu / 100} />
    </div>
  );
}
