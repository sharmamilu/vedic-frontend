import React, { useState, useEffect, useRef } from "react";
import { FaClock } from "react-icons/fa";
import "./CustomTimePicker.css";

const CustomTimePicker = ({
  value,
  onChange,
  name = "time",
  placeholder = "12:00 PM",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hourOptions = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const minuteOptions = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, "0"),
  );

  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState("PM");
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (value) {
      const match = value.match(/(\d{1,2}):(\d{2})\s?(AM|PM|am|pm)/i);

      if (match) {
        setHour(match[1].padStart(2, "0"));
        setMinute(match[2]);
        setPeriod(match[3].toUpperCase());
      } else if (value.includes(":")) {
        const [h, m] = value.split(":");
        const hInt = parseInt(h, 10);
        const p = hInt >= 12 ? "PM" : "AM";
        const h12 = hInt % 12 || 12;
        setHour(h12.toString().padStart(2, "0"));
        setMinute(m);
        setPeriod(p);
      }
    }
  }, [value]);

  const updateTime = (h, m, p) => {
    const formattedTime = `${h}:${m} ${p}`;
    onChange({ target: { name, value: formattedTime } });
  };

  const handleHourChange = (e) => {
    const newHour = e.target.value;
    setHour(newHour);
    updateTime(newHour, minute, period);
  };

  const handleMinuteChange = (e) => {
    const newMinute = e.target.value;
    setMinute(newMinute);
    updateTime(hour, newMinute, period);
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
    updateTime(hour, minute, newPeriod);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-time-picker" ref={dropdownRef}>
      <div
        className={`time-display ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? "time-value" : "placeholder"}>
          {value || placeholder}
        </span>
        <FaClock className="clock-icon" />
      </div>

      {isOpen && (
        <div className="time-dropdown">
          <div className="time-select-group">
            <label>Hour</label>
            <select
              value={hour}
              onChange={handleHourChange}
              className="time-select"
            >
              {hourOptions.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>

          <span className="time-separator">:</span>

          <div className="time-select-group">
            <label>Minute</label>
            <select
              value={minute}
              onChange={handleMinuteChange}
              className="time-select"
            >
              {minuteOptions.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="period-toggle">
            <button
              type="button"
              className={`period-btn ${period === "AM" ? "active" : ""}`}
              onClick={() => handlePeriodChange("AM")}
            >
              AM
            </button>
            <button
              type="button"
              className={`period-btn ${period === "PM" ? "active" : ""}`}
              onClick={() => handlePeriodChange("PM")}
            >
              PM
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTimePicker;
