import { useState } from "react";
import "./App.css";

import { motion, AnimatePresence } from "framer-motion";

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
      <Drawer selected={selected} handleClose={handleClose} />
    </>
  );
}

export default App;

const Drawer = ({
  selected,
  handleClose,
}: {
  selected: number | null;
  handleClose: () => void;
}) => {
  return (
    <motion.div
      // key={selected}
      animate={{
        y: selected !== null ? 100 : 0,
        opacity: selected !== null ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      exit={{ y: -100, opacity: 0 }}
      initial={{ y: -100, opacity: 0 }}
      className="drawer"
    >
      <motion.div
        key={selected}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="inner"
      >
        {selected !== null && `Drawer - ${selected + 1}`}{" "}
      </motion.div>
      <span className="close" onClick={handleClose}>
        x
      </span>
    </motion.div>
  );
};
