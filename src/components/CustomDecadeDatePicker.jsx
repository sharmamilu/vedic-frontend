import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import {
  FaCalendarAlt,
  FaChevronLeft,
  FaExclamationCircle,
} from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css";

const CustomDecadeDatePicker = ({
  selected,
  onChange,
  error,
  placeholder = "Select date",
  startYear = new Date().getFullYear() - 100,
  endYear = new Date().getFullYear(),
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Restore range from selected date
  useEffect(() => {
    if (selected) {
      const year = new Date(selected).getFullYear();
      const rangeStart = Math.floor(year / 10) * 10;
      setSelectedRange({ start: rangeStart, end: rangeStart + 9 });
    }
  }, [selected]);

  const yearRanges = [];
  for (let y = startYear; y <= endYear; y += 10) {
    yearRanges.push({ start: y, end: y + 9 });
  }

  const today = new Date();

  const maxSelectableDate = selectedRange
    ? selectedRange.end >= today.getFullYear()
      ? today
      : new Date(selectedRange.end, 11, 31)
    : null;

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString("en-CA") : "";

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = selectedRange
    ? Array.from(
        { length: selectedRange.end - selectedRange.start + 1 },
        (_, i) => selectedRange.start + i,
      ).filter((y) => y <= today.getFullYear())
    : [];

  return (
    <div className="custom-decade-datepicker" ref={wrapperRef}>
      <div className="date-input-wrapper" onClick={() => setIsOpen(!isOpen)}>
        <input
          type="text"
          readOnly
          value={formatDate(selected)}
          placeholder={placeholder}
          className={`date-input ${error ? "error" : ""}`}
        />
        <FaCalendarAlt className={`calendar-icon ${error ? "error" : ""}`} />
      </div>

      {isOpen && (
        <div className="datepicker-dropdown">
          {!selectedRange ? (
            /* -------- Decade View -------- */
            <div className="range-view">
              <div className="range-header">Select Year Range</div>

              <div className="range-grid">
                {yearRanges.map((r) => (
                  <button
                    key={r.start}
                    className={`range-button ${selectedRange && selectedRange.start === r.start ? "selected" : ""}`}
                    onClick={() => setSelectedRange(r)}
                  >
                    {r.start} – {r.end}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* -------- Calendar View -------- */
            <div className="calendar-view">
              <div className="calendar-header">
                <button
                  className="back-button"
                  onClick={() => setSelectedRange(null)}
                >
                  <FaChevronLeft /> Back
                </button>
                <span>
                  {selectedRange.start} – {selectedRange.end}
                </span>
              </div>

              <DatePicker
                inline
                selected={selected}
                onChange={(date) => {
                  onChange(date);
                  setIsOpen(false);
                }}
                minDate={new Date(selectedRange.start, 0, 1)}
                maxDate={maxSelectableDate}
                openToDate={selected || new Date(selectedRange.start, 0, 1)}
                renderCustomHeader={({ date, changeYear, changeMonth }) => (
                  <div className="custom-datepicker-header">
                    <select
                      value={months[date.getMonth()]}
                      onChange={({ target: { value } }) =>
                        changeMonth(months.indexOf(value))
                      }
                      className="picker-select"
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      value={date.getFullYear()}
                      onChange={({ target: { value } }) => changeYear(value)}
                      className="picker-select"
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              />
            </div>
          )}
        </div>
      )}
      {error && (
        <div className="error-message-with-icon">
          <FaExclamationCircle />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default CustomDecadeDatePicker;
