import React from "react";
import CHNsocial from "../assets/chnSocial.svg";

export default function Socials() {
  return (
    <div className="social-sidebar">
      <a href="https://twitter.com/chihacknight">
        <div className="social-icon twitter">
          <i class="fa-brands fa-twitter"></i>
        </div>
      </a>
      <a href="https://github.com/lauriemerrell/chn-ghost-buses">
        <div className="social-icon github">
          <i class="fa-brands fa-github"></i>
        </div>
      </a>
      <a href="https://chihacknight.org/">
        <div className="social-icon chn">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="1126.000000pt"
            height="1280.000000pt"
            viewBox="0 0 1126.000000 1280.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>
              Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g
              transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M5705 12788 c-2 -7 -26 -83 -54 -168 -27 -85 -125 -389 -216 -675
-231 -722 -545 -1699 -795 -2480 -117 -363 -215 -670 -217 -683 -3 -12 -9 -25
-14 -27 -6 -4 -4294 1062 -4391 1091 -13 4 -18 0 -18 -14 0 -18 373 -432 2576
-2861 l413 -455 -239 -245 c-131 -135 -803 -831 -1494 -1546 l-1256 -1300 0
-82 c0 -46 2 -83 4 -83 5 0 278 59 976 210 333 72 686 149 785 170 99 21 452
98 785 170 333 72 697 151 810 175 113 25 349 76 525 114 176 38 321 69 322
67 1 -1 261 -908 578 -2016 317 -1108 585 -2046 596 -2083 l20 -68 76 3 c72 3
77 4 84 28 3 14 102 322 219 685 116 363 306 954 421 1313 115 358 304 948
420 1310 116 361 214 667 216 680 3 12 9 25 14 27 6 4 4294 -1062 4392 -1091
12 -4 17 0 17 14 0 18 -373 432 -2576 2861 l-413 455 239 245 c131 135 803
831 1494 1546 l1256 1300 0 83 c0 45 -2 82 -4 82 -5 0 -278 -59 -976 -210
-333 -72 -686 -149 -785 -170 -99 -21 -452 -98 -785 -170 -333 -72 -697 -151
-810 -175 -113 -25 -349 -76 -525 -114 -176 -38 -321 -69 -322 -67 -1 1 -261
908 -578 2016 -317 1108 -585 2045 -596 2083 l-20 67 -75 0 c-51 0 -76 -4 -79
-12z"
              />
            </g>
          </svg>
        </div>
      </a>
    </div>
  );
}
