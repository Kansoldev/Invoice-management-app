import { useState } from "react";
import { Sun } from "lucide-react";
import profile from "../assets/Oval.png";

function SideBar() {
  const [theme, setTheme] = useState("light");

  return (
    <aside className="w-full lg:w-22 lg:min-h-screen bg-sidebar flex lg:flex-col items-center shrink-0 z-10 lg:rounded-tr-3xl lg:rounded-br-3xl">
      <svg
        width="88"
        height="90"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z"
          fill="#7C5DFA"
        />
        <mask
          id="mask0_1_371"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="72"
          height="72"
        >
          <path
            d="M0 0H52C63.0457 0 72 8.95431 72 20V52C72 63.0457 63.0457 72 52 72H0V0Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1_371)">
          <path
            d="M72 36.3496H20C8.95431 36.3496 0 45.3039 0 56.3496V88.3496C0 99.3953 8.95431 108.35 20 108.35H72V36.3496Z"
            fill="#9277FF"
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.486 23L36 35.8992L42.514 23C46.9652 25.3089 50 29.9102 50 35.2097C50 42.8258 43.732 48.9999 36 48.9999C28.268 48.9999 22 42.8258 22 35.2097C22 29.9102 25.0348 25.3089 29.486 23Z"
          fill="white"
        />
      </svg>

      <div className="flex lg:flex-col flex-1 items-center justify-end lg:py-5 gap-6 md:gap-12 w-full">
        <div className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
          {theme === "light" ? (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="#7E88C3"
              onClick={() => {
                setTheme("dark");
                document.documentElement.className = "dark";
              }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <Sun
              color="#ffff00"
              onClick={() => {
                setTheme("light");
                document.documentElement.className = "light";
              }}
            />
          )}
        </div>

        <div className="pr-6 lg:pr-0">
          <img src={profile} className="w-10 h-10" />
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
