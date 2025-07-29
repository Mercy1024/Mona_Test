import React, { useState, useEffect, useRef } from "react";

const AnimatedChart = () => {
  const [pathLength, setPathLength] = useState(0);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    value: 0,
  });
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (path) {
      const length = path.getTotalLength();
      setPathLength(length);
    }
  }, []);

  const handleMouseOver = (e, value) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY - 20,
      value,
    });
  };

  const handleMouseOut = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const handleClick = (value) => {
    alert(`Clicked data point: ${value}`);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg width="100%" height="100%" viewBox="0 0 800 300">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Chart Line */}
        <path
          ref={pathRef}
          d="M 50 200 Q 150 150 200 180 Q 250 210 300 160 Q 350 120 400 140 Q 450 160 500 120 Q 550 80 600 100 Q 650 120 700 90 Q 750 70 800 50"
          fill="none"
          stroke="#22c55e"
          strokeWidth="3"
          strokeDasharray={pathLength}
          strokeDashoffset={pathLength}
          style={{
            animation: "draw 2s ease-out forwards",
          }}
        />

        {/* Chart Area Fill */}
        <path
          d="M 50 200 Q 150 150 200 180 Q 250 210 300 160 Q 350 120 400 140 Q 450 160 500 120 Q 550 80 600 100 Q 650 120 700 90 Q 750 70 800 50 L 800 250 L 50 250 Z"
          fill="url(#chartGradient)"
        />

        {/* Data Points with Hover, Animation, Click */}
        {[
          { cx: 200, cy: 180, value: 1620 },
          { cx: 400, cy: 140, value: 2678 },
          { cx: 600, cy: 100, value: 3402 },
        ].map((point, index) => (
          <circle
            key={index}
            cx={point.cx}
            cy={point.cy}
            r="4"
            fill="#22c55e"
            style={{
              animation: `bounce 0.6s ease ${index * 0.2}s forwards`,
              opacity: 0,
              cursor: "pointer",
            }}
            onMouseOver={(e) => handleMouseOver(e, point.value)}
            onMouseOut={handleMouseOut}
            onClick={() => handleClick(point.value)}
          />
        ))}

        {/* Sales Badge with Animation */}
        <foreignObject x="480" y="40" width="120" height="60">
          <div
            style={{
              backgroundColor: "#1e293b",
              color: "white",
              padding: "8px 12px",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "12px",
              animation: "fadeIn 1.5s ease-out forwards",
              opacity: 0,
            }}
          >
            <div style={{ fontSize: "10px", opacity: 0.7 }}>Sales</div>
            <div style={{ fontSize: "16px", fontWeight: "bold" }}>2,678</div>
          </div>
        </foreignObject>

        {/* Month Labels */}
        {[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
        ].map((month, index) => (
          <text
            key={month}
            x={80 + index * 70}
            y="280"
            textAnchor="middle"
            fill="#64748b"
            fontSize="12"
          >
            {month}
          </text>
        ))}

        <style>{`
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes bounce {
            0% { transform: scale(0.5); opacity: 0; }
            50% { transform: scale(1.4); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </svg>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x,
            top: tooltip.y,
            backgroundColor: "#1e293b",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            transform: "translate(-50%, -100%)",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 1000,
          }}
        >
          {tooltip.value}
        </div>
      )}
    </div>
  );
};

export default AnimatedChart;
