import { useState } from "react";
import "./App.css";
import App2023 from "./2023/App2023";
import App2024 from "./2024/App2024";
import Box from "./components/box.component";
import Snowfall from "react-snowfall";

function App() {
  const [showMain, setShowMain] = useState(true);
  const [show2023, setShow2023] = useState(false);
  const [show2024, setShow2024] = useState(false);
  const handleClick = (setShowYear: any) => {
    setShowYear(true);
    setShowMain(false);
  };

  return (
    <main className="main">
      {showMain && (
        <>
          <Snowfall snowflakeCount={125} />
          <div className="year-box" onClick={() => handleClick(setShow2023)}>
            <Box
              width={125}
              height={125}
              backgroundColor={"#D4AF37"}
              borderColor={"#DAA520"}
              text={"2023"}
              textColor={"white"}
            />
          </div>
          <div className="year-box">
            <a
              href="https://victoriaderidder.github.io/christmas2022/"
              target="_blank"
              rel="noreferrer"
            >
              <Box
                width={125}
                height={125}
                backgroundColor={"#D4AF37"}
                borderColor={"#DAA520"}
                text={"2022"}
                textColor={"white"}
              />
            </a>
          </div>
          <div
            className="year-box"
            id="this-year"
            onClick={() => handleClick(setShow2024)}
          >
            <Box
              width={250}
              height={250}
              backgroundColor={"#D4AF37"}
              borderColor={"#DAA520"}
              text={"2024"}
              textColor={"white"}
              fontSize={100}
            />
          </div>
          <div className="year-box">
            <a
              href="https://victoriaderidder.github.io/achristmaschallenge/"
              target="_blank"
              rel="noreferrer"
            >
              <Box
                width={125}
                height={125}
                backgroundColor={"#D4AF37"}
                borderColor={"#DAA520"}
                text={"2021"}
                textColor={"white"}
              />
            </a>
          </div>
          <div className="year-box">
            <a
              href="https://victoriaderidder.github.io/achristmaschallenge/V1%20(2020)/page1.html"
              target="_blank"
              rel="noreferrer"
            >
              <Box
                width={125}
                height={125}
                backgroundColor={"#D4AF37"}
                borderColor={"#DAA520"}
                text={"2020"}
                textColor={"white"}
              />
            </a>
          </div>
        </>
      )}
      {show2023 && (
        <App2023 setShowMain={setShowMain} setShowSelf={setShow2023} />
      )}
      {show2024 && (
        <App2024 setShowMain={setShowMain} setShowSelf={setShow2024} />
      )}
    </main>
  );
}

export default App;
