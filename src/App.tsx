import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (i: number) => {
    if (selected === i) {
      setSelected(null);
      return;
    }
    setSelected(i);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <>
      <div className="boxes">
        {[...new Array(4).fill("")].map((_, i) => {
          const className = selected === i ? "box selected" : "box";
          return (
            <div onClick={() => handleClick(i)} key={i} className={className}>
              {i + 1}
            </div>
          );
        })}
      </div>

      {/* If there is something selected, we show the drawer */}
      {selected !== null && (
        <div className="drawer">
          Drawer - {selected + 1}{" "}
          <span className="close" onClick={handleClose}>
            x
          </span>
        </div>
      )}
    </>
  );
}

export default App;
