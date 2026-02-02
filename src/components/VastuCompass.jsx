import React, { useState, useEffect, useRef } from "react";
import {
  FaCompass,
  FaArrowLeft,
  FaSyncAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import "./VastuCompass.css";

const VastuCompass = ({ darkMode, onClose }) => {
  const [compassDegrees, setCompassDegrees] = useState(0);
  const [currentDirection, setCurrentDirection] = useState("N");
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [calibrationStep, setCalibrationStep] = useState(0);
  const [compassError, setCompassError] = useState(null);
  const [isSupported, setIsSupported] = useState(true);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const compassRef = useRef(null);
  const animationRef = useRef(null);

  // Vastu directional information
  const vastuDirections = {
    N: { name: "North", deity: "Kubera", element: "Water", color: "#3498db" },
    NE: {
      name: "Northeast",
      deity: "Ishanya",
      element: "Water/Earth",
      color: "#2ecc71",
    },
    E: { name: "East", deity: "Indra", element: "Air", color: "#f1c40f" },
    SE: { name: "Southeast", deity: "Agni", element: "Fire", color: "#e74c3c" },
    S: {
      name: "South",
      deity: "Yama",
      element: "Fire/Earth",
      color: "#e67e22",
    },
    SW: {
      name: "Southwest",
      deity: "Nirriti",
      element: "Earth",
      color: "#9b59b6",
    },
    W: {
      name: "West",
      deity: "Varuna",
      element: "Air/Water",
      color: "#1abc9c",
    },
    NW: { name: "Northwest", deity: "Vayu", element: "Air", color: "#95a5a6" },
  };

  // Calibration steps
  const calibrationSteps = [
    "Hold your device flat",
    "Slowly rotate 360°",
    "Keep away from magnets",
    "Calibration complete!",
  ];

  // Get direction name with angle
  const getDetailedDirection = (degrees) => {
    const normalizedDegrees = ((degrees % 360) + 360) % 360;

    if (normalizedDegrees >= 337.5 || normalizedDegrees < 22.5)
      return { dir: "N", angle: normalizedDegrees };
    if (normalizedDegrees >= 22.5 && normalizedDegrees < 67.5)
      return { dir: "NE", angle: normalizedDegrees };
    if (normalizedDegrees >= 67.5 && normalizedDegrees < 112.5)
      return { dir: "E", angle: normalizedDegrees };
    if (normalizedDegrees >= 112.5 && normalizedDegrees < 157.5)
      return { dir: "SE", angle: normalizedDegrees };
    if (normalizedDegrees >= 157.5 && normalizedDegrees < 202.5)
      return { dir: "S", angle: normalizedDegrees };
    if (normalizedDegrees >= 202.5 && normalizedDegrees < 247.5)
      return { dir: "SW", angle: normalizedDegrees };
    if (normalizedDegrees >= 247.5 && normalizedDegrees < 292.5)
      return { dir: "W", angle: normalizedDegrees };
    return { dir: "NW", angle: normalizedDegrees };
  };

  // Request permission for iOS 13+
  const requestPermission = async () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      try {
        const permissionState =
          await DeviceOrientationEvent.requestPermission();
        if (permissionState === "granted") {
          setPermissionGranted(true);
          return true;
        } else {
          setIsSupported(false);
          setCompassError("Permission denied for device orientation");
          return false;
        }
      } catch (error) {
        console.error("Permission error:", error);
        setCompassError("Error requesting device orientation permission");
        return false;
      }
    } else {
      // For Android and older iOS, permission not needed
      setPermissionGranted(true);
      return true;
    }
  };

  // Check if Device Orientation is supported
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.DeviceOrientationEvent) {
        setIsSupported(false);
        setCompassError("Device orientation not supported in this browser");
      } else {
        // Request permission on mount
        requestPermission();
      }
    }
  }, []);

  // Handle device orientation
  useEffect(() => {
    if (!permissionGranted) return;

    let isMounted = true;

    const handleOrientation = (event) => {
      if (!isMounted) return;

      let heading = null;

      // iOS (Safari) - webkitCompassHeading gives direct compass heading
      if (event.webkitCompassHeading !== undefined) {
        heading = event.webkitCompassHeading; // 0 = North, already correct
      }
      // Android and other browsers - use alpha
      else if (event.alpha !== null) {
        // Alpha: 0-360 degrees, 0 = North when device points north
        // Convert alpha to compass heading
        heading = 360 - event.alpha;
      }

      if (heading === null) {
        if (!compassError) {
          setCompassError("Unable to get compass heading from device");
        }
        return;
      }

      // Normalize to 0-360
      heading = ((heading % 360) + 360) % 360;

      if (!isNaN(heading)) {
        setCompassDegrees(heading);

        const detailedDir = getDetailedDirection(heading);
        setCurrentDirection(detailedDir.dir);

        // Rotate ONLY the needle (not the entire compass rose)
        if (compassRef.current) {
          compassRef.current.style.transform = `rotate(${heading}deg)`;
        }
      }
    };

    // Add event listener
    window.addEventListener("deviceorientation", handleOrientation, true);

    // If no orientation event fires within 3 seconds, show error
    const timeoutId = setTimeout(() => {
      if (compassDegrees === 0 && !compassError) {
        setCompassError(
          "No orientation data received. Please ensure device sensors are enabled and try calibrating.",
        );
      }
    }, 3000);

    return () => {
      isMounted = false;
      window.removeEventListener("deviceorientation", handleOrientation, true);
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [permissionGranted]);

  // Start calibration process
  const startCalibration = async () => {
    // Request permission again if needed (for iOS)
    if (!permissionGranted) {
      const granted = await requestPermission();
      if (!granted) return;
    }

    setIsCalibrating(true);
    setCalibrationStep(0);
    setCompassError(null);

    const interval = setInterval(() => {
      setCalibrationStep((prev) => {
        if (prev >= calibrationSteps.length - 1) {
          clearInterval(interval);
          setIsCalibrating(false);
          setIsCalibrated(true);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  // Get Vastu tips for current direction
  const getVastuTips = (direction) => {
    const tips = {
      N: [
        "Ideal for water elements",
        "Best for financial activities",
        "Keep clean and clutter-free",
        "Avoid heavy furniture here",
      ],
      NE: [
        "Perfect for meditation/prayer",
        "Keep light and well-ventilated",
        "Ideal for study/reading",
        "Avoid toilets and kitchen",
      ],
      E: [
        "Great for morning sunlight",
        "Ideal for main entrance",
        "Keep open and unobstructed",
        "Best for new beginnings",
      ],
      SE: [
        "Ideal for kitchen placement",
        "Good for electrical appliances",
        "Avoid water elements here",
        "Use warm colors",
      ],
      S: [
        "Good for master bedroom",
        "Ideal for storage",
        "Avoid main entrance here",
        "Use earthy tones",
      ],
      SW: [
        "Best for master bedroom",
        "Ideal for heavy furniture",
        "Avoid kitchen placement",
        "Good for relationships",
      ],
      W: [
        "Ideal for children's room",
        "Good for dining area",
        "Avoid extended structures",
        "Best for evening activities",
      ],
      NW: [
        "Good for guest room",
        "Ideal for garage/storage",
        "Avoid master bedroom",
        "Good for networking",
      ],
    };
    return tips[direction] || tips.N;
  };

  const currentDirectionData = vastuDirections[currentDirection];
  const vastuTips = getVastuTips(currentDirection);
  const detailedDir = getDetailedDirection(compassDegrees);

  return (
    <div className={`compass-tool-overlay ${darkMode ? "dark-mode" : ""}`}>
      <div className="compass-tool">
        {/* Header */}
        <div className="compass-header">
          <button className="compass-close" onClick={onClose}>
            <FaArrowLeft />
          </button>
          <h2>Vastu Direction Compass</h2>
          <button
            className="compass-calibrate"
            onClick={startCalibration}
            disabled={isCalibrating}
          >
            <FaSyncAlt className={isCalibrating ? "spinning" : ""} />
          </button>
        </div>

        {/* Error Message */}
        {compassError && (
          <div className="compass-error">
            <FaExclamationTriangle />
            <p>{compassError}</p>
          </div>
        )}

        {/* Permission Request for iOS */}
        {!permissionGranted && isSupported && (
          <div className="permission-request">
            <p>
              This compass requires access to your device's orientation sensors.
            </p>
            <button className="permission-btn" onClick={requestPermission}>
              Enable Compass
            </button>
          </div>
        )}

        {/* Calibration Process */}
        {isCalibrating && (
          <div className="calibration-overlay">
            <div className="calibration-content">
              <div className="calibration-spinner"></div>
              <h3>Calibrating Compass</h3>
              <p>{calibrationSteps[calibrationStep]}</p>
              <div className="calibration-progress">
                <div
                  className="progress-bar"
                  style={{
                    width: `${(calibrationStep / (calibrationSteps.length - 1)) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Main Compass */}
        <div className="compass-main">
          <div className="compass-visual">
            <div className="compass-outer-circle">
              {/* Fixed cardinal directions */}
              <div className="compass-cardinal">
                <span className="cardinal-n">N</span>
                <span className="cardinal-e">E</span>
                <span className="cardinal-s">S</span>
                <span className="cardinal-w">W</span>
              </div>

              {/* Rotating needle only */}
              <div className="compass-needle-container" ref={compassRef}>
                <div className="compass-needle"></div>
              </div>

              <div className="compass-center-dot"></div>
            </div>
          </div>

          <div className="compass-degree-readout">
            {Math.round(detailedDir.angle)}°
          </div>

          {/* Direction Info */}
          <div className="direction-info">
            <div className="current-direction">
              <div
                className="direction-indicator"
                style={{ backgroundColor: currentDirectionData.color }}
              >
                {currentDirection}
              </div>
              <div className="direction-details">
                <h3>{currentDirectionData.name}</h3>
                <p className="deity-info">
                  Deity: {currentDirectionData.deity}
                </p>
                <p className="element-info">
                  Element: {currentDirectionData.element}
                </p>
              </div>
            </div>

            {isCalibrated && (
              <div className="calibration-status">
                <FaCheckCircle />
                <span>Calibrated</span>
              </div>
            )}
          </div>

          {/* Vastu Tips */}
          <div className="vastu-tips-section">
            <h4>Vastu Tips for {currentDirectionData.name}:</h4>
            <ul className="vastu-tips-list">
              {vastuTips.map((tip, index) => (
                <li key={index}>
                  <div className="tip-bullet"></div>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="compass-actions">
            <button
              className="compass-action-btn primary"
              onClick={startCalibration}
            >
              <FaSyncAlt /> {isCalibrating ? "Calibrating..." : "Recalibrate"}
            </button>
            <button className="compass-action-btn secondary" onClick={onClose}>
              Done
            </button>
          </div>

          {/* Instructions */}
          <div className="compass-instructions">
            <p>
              Hold your device flat and point it in different directions to see
              Vastu guidance.
            </p>
            <p className="instruction-note">
              For accurate results, avoid magnetic interference and metal
              objects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VastuCompass;
