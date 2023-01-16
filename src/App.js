import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import Button from "./components/Button";
function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [type, setType] = useState("Sort by Type");
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.path[0] !== btnRef.current &&
        e.path[0].parentNode !== btnRef.current
      ) {
        setShowDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const sortTypeHandler = () => {
    setShowDropdown((existing) => !existing);
  };

  return (
    <section className="w-36 ">
      <button
        ref={btnRef}
        className="mb-1 w-full border-2 px-2 py-1 rounded-md flex flex-row items-center justify-center gap-2 text-gray-800 hover:bg-gray-100"
        onClick={sortTypeHandler}
      >
        {type} <BiChevronDown size={20} />
      </button>
      {showDropdown && (
        <div className="overflow-y-auto h-32 border-2 absolute w-36 bg-white">
          <Button setType={setType}> All</Button>
          <Button setType={setType}>Bug</Button>
          <Button setType={setType}>Dark</Button>
          <Button setType={setType}>Dragon</Button>
          <Button setType={setType}>Electric</Button>
          <Button setType={setType}>Fairy</Button>
          <Button setType={setType}>Fighting</Button>
          <Button setType={setType}>Fire</Button>
          <Button setType={setType}>Flying</Button>
          <Button setType={setType}>Ghost</Button>
          <Button setType={setType}>Grass</Button>
          <Button setType={setType}>Ground</Button>
          <Button setType={setType}>Ice</Button>
          <Button setType={setType}>Normal</Button>
          <Button setType={setType}>Poison</Button>
          <Button setType={setType}>Psychic</Button>
          <Button setType={setType}>Rock</Button>
          <Button setType={setType}>Steel</Button>
          <Button setType={setType}>Water</Button>
        </div>
      )}
    </section>
  );
}

export default App;
