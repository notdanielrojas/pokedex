import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      <span>
        <PokeballSvg />
      </span>
      <ul>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/pokemones'
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Pokemones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function PokeballSvg() {
  return (
    <svg width='32' height='32' viewBox='0 0 512.000000 512.000000'>
      <g
        transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
        fill='#fff'
        stroke='none'
      >
        <path d='M2370 5114 c-19 -2 -78 -9 -130 -15 -548 -62 -1083 -325 -1489 -730 -405 -406 -652 -907 -732 -1489 -18 -125 -18 -515 0 -640 105 -762 511 -1409 1146 -1826 776 -510 1793 -550 2615 -104 125 68 154 91 179 143 43 89 15 193 -68 252 -36 25 -52 30 -104 30 -38 0 -73 -6 -92 -16 -168 -91 -236 -124 -330 -162 -622 -250 -1328 -197 -1898 143 -582 346 -976 947 -1052 1603 l-6 57 636 -2 637 -3 22 -70 c93 -290 331 -515 631 -596 115 -32 335 -32 450 0 300 81 538 306 631 596 l22 70 637 3 637 2 -7 -52 c-40 -311 -153 -628 -321 -898 -56 -90 -59 -98 -59 -160 0 -78 26 -127 88 -168 56 -37 153 -39 210 -3 60 37 182 235 276 449 469 1060 169 2297 -734 3025 -364 293 -768 469 -1245 542 -100 15 -472 28 -550 19z m514 -418 c934 -147 1671 -884 1811 -1814 8 -56 15 -106 15 -112 0 -7 -211 -9 -636 -8 l-636 3 -22 70 c-93 290 -331 515 -631 596 -65 18 -107 22 -225 22 -118 0 -160 -4 -225 -22 -300 -81 -538 -306 -631 -596 l-22 -70 -637 -3 -636 -2 6 57 c66 568 381 1115 844 1464 319 240 686 386 1081 429 117 12 424 4 544 -14z m-222 -1647 c187 -39 348 -200 387 -387 34 -165 -16 -330 -138 -453 -199 -199 -503 -199 -702 0 -199 199 -199 505 1 702 125 123 286 173 452 138z' />
      </g>
    </svg>
  );
}
