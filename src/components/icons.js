export function PhysicalIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#d8d7d7";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
    >
      <g transform="matrix(1 0 0 -1 0 1024)">
        <path
          fill={color}
          d="M2 61q1 -26 18 -43t43 -18q23 1 39 14.5t20 35.5l-69 70q-22 -4 -36 -20t-15 -39v0zM96 132q3 -2 19 -18l18 -18q62 26 107.5 68.5t78.5 99.5q-27 26 -53 54q-113 -72 -170 -186v0zM137 656q1 -7 5 -55l4 -55q77 -127 175 -228t223 -170l110 -9l-40 94l-79 -7l-6 4
q-94 57 -171.5 130.5t-129.5 171.5l-2 5l6 78zM279 523q19 -32 41 -61q78 75 169.5 137.5t185.5 106.5l51 24l-24 -50q-45 -94 -107 -185t-136 -169q30 -23 62 -44q153 165 280.5 356t220.5 386q-194 -92 -386 -220t-357 -281v0zM345 431q38 -43 82 -80q62 64 115.5 138.5
t95.5 153.5q-78 -42 -153.5 -96t-139.5 -116v0z"
        />
      </g>
    </svg>
  );
}

export function WindIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#bade15";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
    >
      <g transform="matrix(1 0 0 -1 0 1024)">
        <path
          fill={color}
          d="M314 1024h-28q543 -93 373 -327t-658 -158v-62q353 -70 585.5 74.5t134.5 325.5q121 -106 10 -299t-477 -262q130 29 237 91t168 151v0q-128 -121 -305 -163.5t-353 -16.5v-147q171 -30 354 20.5t327 190.5q-110 -150 -297.5 -232.5t-383.5 -73.5v-135q621 25 881 312.5
t43 533.5q125 -265 -105.5 -489.5t-555.5 -239.5q419 91 558.5 397.5t-169.5 469.5q-140 38 -339 39v0z"
        />
      </g>
    </svg>
  );
}

export function BoltIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#fff423";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 1024)">
        <path
          fill={color}
          d="M8 1024q29 -25 235 -199l235 -199h-273l249 -192h-300l500 -385l-181 257h147l397 -306l-381 541h187l-332 483h-483z"
        />
      </g>
    </svg>
  );
}

export function DarkIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#ed153e";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 800)">
        <path
          fill={color}
          d="M940 577q-6 54 -27 93q-50 94 -161 97q72 -55 72 -137q0 -17 -3 -31q-19 -69 -126 -118q-84 48 -187 48q-109 0 -196 -53q-117 50 -137 123q-4 14 -4 31q0 82 73 137q-112 -3 -161 -97q-21 -39 -28 -93q-9 -157 134 -236q-36 -71 -36 -141q0 -75 45 -133.5t127 -88.5
q25 -132 42 -132q13 0 41 54q7 -1 11 -2q27 -2 41 10q20 -15 45 -15t44 14q14 -11 39 -9l14 2q28 -52 41 -52q16 0 41 128q86 30 132 89t46 135q0 74 -41 150q128 80 119 227zM357 112q-40 0 -68.5 33.5t-28.5 80.5t28.5 80.5t68.5 33.5t68.5 -33.5t28.5 -80.5t-28.5 -80.5
t-68.5 -33.5zM508 15q-24 0 -35 14q-7 7 -7 19q0 18 14 36.5t27 18.5q14 0 25.5 -20t11.5 -39q0 -29 -36 -29zM649 112q-40 0 -68.5 33.5t-28.5 80.5t28.5 80.5t68.5 33.5q41 0 69.5 -33.5t28.5 -80.5t-28.5 -80.5t-69.5 -33.5z"
        />
      </g>
    </svg>
  );
}

export function EarthIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#cc8d2e";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 1024)">
        <path
          fill={color}
          d="M447 1024q-22 -7 -175 -54l-175 -54l-63 -240l126 57l39 -172l-82 73l-62 -70l307 -297l38 158l142 -425l350 57l99 444l-184 325zM321 915q-4 -5 -30 -44l-31 -43l-7 -161l-59 195zM360 711q15 -21 124 -170l123 -169l229 -74l-234 2l-242 279v132zM120 353
q20 -21 153 -167l154 -168l-13 144l-294 191v0z"
        />
      </g>
    </svg>
  );
}

export function FireIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#f79010";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 1024)">
        <path
          fill={color}
          d="M159 1023q-10 0 -19 -1q-79 -12 -116 -80.5t-16 -162.5q11 -45 33 -82v0q5 -7 11 -14q19 -19 41.5 -22t38 12.5t13 39t-21.5 44.5q-2 -13 -11.5 -21t-23.5 -8t-24 10t-11 25q0 6 2 11q16 36 46.5 61t72.5 33q50 9 93.5 -10t70.5 -58q14 -43 12 -77q-2 -32 -12 -62.5
t-25 -62.5q-21 -45 -37.5 -100t-11.5 -127q2 -96 49.5 -179.5t135.5 -137.5q140 -78 286 -40.5t231 172.5q78 140 41 286t-173 232q-43 25 -89 38q74 -59 96 -147t-16 -175q-2 14 -5 28q-26 91 -101.5 136.5t-167.5 25.5q-29 -9 -54 -24q61 7 109 -24t64 -90
q15 -65 -16.5 -118.5t-95.5 -71.5q-33 -8 -65 -3q-24 9 -47 22q-48 29 -79 72q-28 53 -33 104t15 102l1 2q15 33 27 67t14 73q1 30 -6 63q-2 20 -7 40q-23 87 -84 142.5t-135 56.5v0zM774 898q-48 1 -86.5 -32t-59.5 -102q57 55 179.5 6t216.5 -216q-24 166 -96.5 254.5
t-153.5 89.5v0z"
        />
      </g>
    </svg>
  );
}

export function IceIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#b3e7fb";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 1024)">
        <path
          fill={color}
          d="M69 256q12 -7 99 -57l98 -57l47 155l115 -67l-111 -118l195 -112l196 113l-111 118l116 66l47 -154l195 113v225l-157 -37v134l157 -37v227l-195 112l-46 -154l-116 67l111 117l-197 114l-196 -113l111 -118l-115 -67l-47 155l-196 -113v-228l157 37v-132l-157 36v-225v0
zM319 319q1 4 8 25l7 24l137 69l8 -153l-35 -37l-125 72v0v0zM249 439v72v71l51 12l129 -84l-129 -83l-51 12v0zM581 248q-2 2 -17 18l-17 18l9 154l136 -70l14 -47l-125 -73v0v0zM333 655q-1 3 -7 24l-8 24l125 73l35 -37l-8 -152l-137 68v0v0zM601 510q8 5 64 42l63 42
l47 -11v-145l-47 -11l-127 83v0v0zM557 587q0 9 -4 76l-5 76l34 36l125 -72l-14 -47l-136 -69v0v0z"
        />
      </g>
    </svg>
  );
}

export function LightIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#fffa99";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 1024)">
        <path
          fill={color}
          d="M73 1024q16 -20 125 -156l125 -156q-38 -32 -60 -78l-262 124v-136l245 -41q-3 -20 -3 -40q0 -12 1 -23l-156 -59l171 -2q14 -33 37 -60l-295 -284v-113h102l228 364q38 -29 86 -40l-51 -324h225l-88 322q28 6 53 17l80 -91l-46 111q23 15 41 36l393 -317v236l-357 138
q14 31 18 67l182 56l-187 15q-7 32 -23 60l367 189v175l-395 -326q-17 20 -38 34l33 83l-65 -64q-31 15 -66 19l46 264h-87l3 -262q-63 -3 -112 -36l-184 298h-86z"
        />
      </g>
    </svg>
  );
}

export function PoisonIcon({disabled}) {
  const color = disabled ? "#d8d7d7" : "#d757a1";
  const strokeWidth = disabled ? "0" : "100";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-60 -120 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={strokeWidth}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 800)">
        <path
          fill={color}
          d="M276 221v-15q0 -28 19 -47t47 -21q29 -2 43 10q22 -16 49 -16q25 0 46 15q14 -11 41 -9q28 3 47 21.5t19 46.5v11q108 28 167 94q57 63 57 149q0 19 -4 40q-20 128 -118 211q-103 89 -251 89t-251 -88q-98 -84 -117 -212q-4 -21 -4 -40q0 -84 55 -147t155 -92zM587 605
q43 0 72.5 -34.5t29.5 -83.5t-29.5 -83.5t-72.5 -34.5q-42 0 -71.5 34.5t-29.5 83.5t29.5 83.5t71.5 34.5zM438 360q14 0 26.5 -21t12.5 -40q0 -29 -38 -29q-25 0 -37 13q-7 8 -7 20q0 19 14.5 38t28.5 19zM280 605q42 0 72 -34.5t30 -83.5t-30 -83.5t-72 -34.5t-72 34.5
t-30 83.5t30 83.5t72 34.5zM703 -45l-133 49l135 49q34 -22 63 -22q32 0 42 33q2 7 2 15q0 42 -54 45q22 22 22 43q0 22 -23 37q-12 6 -25 6q-44 0 -60 -71l-234 -87l-234 85q-16 73 -60 73q-13 0 -25 -6q-22 -15 -22 -37q0 -21 22 -43q-55 -3 -55 -45q0 -8 2 -15
q11 -33 42 -33q29 0 63 22l136 -49l-134 -48q-35 25 -62 25q-32 0 -45 -33q-2 -7 -2 -15q0 -42 55 -45q-22 -22 -22 -43q0 -22 22 -37q14 -8 27 -8q41 0 59 70l233 85l233 -85q18 -70 60 -70q12 0 26 8q23 15 23 37q0 21 -22 43q54 3 54 45q0 8 -2 15q-12 33 -44 33
q-27 0 -63 -26z"
        />
      </g>
    </svg>
  );
}

export function MeleeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-10 0 981 1000"
      width="1.2em"
    >
      <g transform="matrix(1 0 0 -1 0 800)">
        <path
          fill="currentColor"
          d="M463 -11q5 19 -81 119l491 405l44 189l-195 -21l-440 -465q-94 93 -114 89q-20 -3 -75 -16q40 -25 79 -70q13 -15 20 -44q9 -33 24 -55l-94 -88q-33 4 -57.5 -18.5t-24.5 -55.5q0 -29 21 -51.5t54 -22.5q29 0 51 20.5t23 51.5l97 90q20 -15 51 -25q26 -9 39 -21.5
t24 -25.5q26 -31 41 -59q12 32 22 74zM94 -60q-17 18 1 35t35 -1q17 -19 -1 -36t-35 2z"
        />
      </g>
    </svg>
  );
}

export function DistanceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-10 0 850 850"
      width="1.2em"
    >
      <g transform="matrix(1 0 0 -1 0 850)">
        <path
          fill="currentColor"
          d="M147 748q-16 -9 -16 -33q0 -18 7.5 -36.5t20.5 -31.5l6 -7l26 -211l27 -210l60 60l-42 340h73q69 0 93 -2q108 -12 195 -83l14 -12l-181 -180l-181 -181l-39 -1q-26 -1 -33 -1.5t-13 -3.5t-19 -15q-10 -9 -37 -35l-44 -45h36q50 0 66 -1l30 -1v-132l53 53q26 27 33 35
q10 13 13 24q2 8 3 31v43l181 181l181 180l12 -14q28 -34 47.5 -74.5t28.5 -83.5q5 -24 6.5 -53t1.5 -83v-65h-4q-3 0 -52 6q-58 7 -119 15l-165 21l-30 -30q-29 -29 -27.5 -31t209.5 -27l208 -26l12 -10q22 -18 46.5 -22.5t39 3t16 24.5t-7.5 27t-26 11h-1q-15 2 -18.5 4
t-7.5 8.5t-4.5 20t-1.5 84.5v1q-1 78 -3 101t-12 59q-23 87 -83 161l-17 21l11 12q10 12 35 37l25 25l22 -22q15 -15 18.5 -17.5t4.5 1.5q4 15 18 88t13 73.5t-82.5 -15.5t-83 -16.5t20.5 -22.5l21 -21l-36 -36l-36 -37l-12 10q-97 84 -224 102q-22 4 -113 5h-10
q-55 1 -69 2q-21 1 -27 7q-4 4 -6 19v3q-2 13 -5.5 20t-11.5 10.5t-18 3.5t-16 -4z"
        />
      </g>
    </svg>
  );
}

export function SpellIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-10 0 1059 1059"
      width="1.2em"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 800)">
        <path
          fill="currentColor"
          d="M945 431h-291l-90 276q-9 29 -40 29t-41 -29l-90 -276h-290q-18 0 -30.5 -12.5t-12.5 -30.5q0 -22 18 -34l235 -171l-90 -277q-2 -6 -2 -13q0 -17 12.5 -29.5t30.5 -12.5q13 0 25 8l235 171l235 -171q11 -8 25 -8q17 0 29.5 12.5t12.5 29.5q0 7 -2 13l-89 277l235 171
q17 12 17 34q0 18 -12.5 30.5t-29.5 12.5zM524 556l41 -125h-82zM234 346h132l-25 -78zM345 5l40 125l66 -48zM413 215l42 131h137l43 -131l-111 -80zM596 82l66 48l41 -125zM707 268l-25 78h132z"
        />
      </g>
    </svg>
  );
}

export function OffensiveSpellIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-10 0 1200 1200"
      width="1.2em"
      stroke="#000000"
      strokeWidth={100}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 1000)">
        <path
          fill="#cd1719"
          d="M813 844l-593 -440l180 -40l-213 -360l593 460l-180 40z"
        />
      </g>
    </svg>
  );
}

export function D4Icon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="1.2em"
        viewBox="0 0 24 24"
        style={{verticalAlign: "text-bottom"}}
      >
        <path
          fill="currentcolor"
          d="M13.43,15.15H14.29V16.36H13.43V18H11.92V16.36H8.82L8.75,15.41L11.91,10.42H13.43V15.15M10.25,15.15H11.92V12.47L10.25,15.15M22,21H2C1.64,21 1.31,20.81 1.13,20.5C0.95,20.18 0.96,19.79 1.15,19.5L11.15,3C11.5,2.38 12.5,2.38 12.86,3L22.86,19.5C23.04,19.79 23.05,20.18 22.87,20.5C22.69,20.81 22.36,21 22,21M3.78,19H20.23L12,5.43L3.78,19Z"
        />
      </svg>
    </>
  );
}

export function D6Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1.2em"
      viewBox="0 0 24 24"
      style={{verticalAlign: "text-bottom"}}
    >
      <path
        fill="currentcolor"
        d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5M13.39,9.53C10.89,9.5 10.86,11.53 10.86,11.53C10.86,11.53 11.41,10.87 12.53,10.87C13.19,10.87 14.5,11.45 14.55,13.41C14.61,15.47 12.77,16 12.77,16C12.77,16 9.27,16.86 9.3,12.66C9.33,7.94 13.39,8.33 13.39,8.33V9.53M11.95,12.1C11.21,12 10.83,12.78 10.83,12.78L10.85,13.5C10.85,14.27 11.39,14.83 12,14.83C12.61,14.83 13.05,14.27 13.05,13.5C13.05,12.73 12.56,12.1 11.95,12.1Z"
      />
    </svg>
  );
}

export function D8Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1.2em"
      viewBox="0 0 24 24"
      style={{verticalAlign: "text-bottom"}}
    >
      <path
        fill="currentcolor"
        d="M12,8.25C13.31,8.25 14.38,9.2 14.38,10.38C14.38,11.07 14,11.68 13.44,12.07C14.14,12.46 14.6,13.13 14.6,13.9C14.6,15.12 13.44,16.1 12,16.1C10.56,16.1 9.4,15.12 9.4,13.9C9.4,13.13 9.86,12.46 10.56,12.07C10,11.68 9.63,11.07 9.63,10.38C9.63,9.2 10.69,8.25 12,8.25M12,12.65A1.1,1.1 0 0,0 10.9,13.75A1.1,1.1 0 0,0 12,14.85A1.1,1.1 0 0,0 13.1,13.75A1.1,1.1 0 0,0 12,12.65M12,9.5C11.5,9.5 11.1,9.95 11.1,10.5C11.1,11.05 11.5,11.5 12,11.5C12.5,11.5 12.9,11.05 12.9,10.5C12.9,9.95 12.5,9.5 12,9.5M21.54,10.8C22.14,11.5 22.14,12.5 21.54,13.2L13.24,21.5C12.54,22.2 11.54,22.2 10.84,21.5L2.54,13.2C1.84,12.5 1.84,11.5 2.54,10.8L10.84,2.5C11.54,1.8 12.54,1.8 13.24,2.5L21.54,10.8M20.34,12L12.04,3.7L3.74,12L12.04,20.3L20.34,12Z"
      />
    </svg>
  );
}

export function D10Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1.2em"
      viewBox="0 0 24 24"
      style={{verticalAlign: "text-bottom"}}
    >
      <path
        fill="currentcolor"
        d="M21.5,10.8C22.1,11.5 22.1,12.5 21.5,13.2L13.2,21.5C12.5,22.2 11.5,22.2 10.8,21.5L2.5,13.2C1.8,12.5 1.8,11.5 2.5,10.8L10.8,2.5C11.5,1.8 12.5,1.8 13.2,2.5L21.5,10.8M20.3,12L12,3.7L3.7,12L12,20.3L20.3,12M10.38,15.79H8.88V10L7.08,10.55V9.32L10.22,8.2H10.38V15.79M13.93,8A2.57,2.57 0 0,1 16.5,10.57V13.21C16.5,14.63 15.35,15.78 13.93,15.78C12.5,15.78 11.36,14.63 11.36,13.21V10.57A2.57,2.57 0 0,1 13.93,8M13.92,9.44A1.06,1.06 0 0,0 12.86,10.5V13.27A1.06,1.06 0 0,0 13.92,14.33C14.5,14.33 15,13.85 15,13.27V10.5C15,9.91 14.5,9.44 13.92,9.44Z"
      />
    </svg>
  );
}

export function D12Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1.2em"
      viewBox="0 0 24 24"
      style={{verticalAlign: "text-bottom"}}
    >
      <path
        fill="currentcolor"
        d="M12,2L1.5,9.64L5.5,22H18.5L22.5,9.64L12,2M17,20H7L3.85,10.4L12,4.47L20.15,10.4L17,20M17,15.75V17H11.66V15.91C11.66,15.91 15.23,12.45 15.23,11.4C15.23,10.12 14.18,10.25 14.18,10.25C13.5,10.3 13,10.87 13,11.55H11.44C11.5,10.09 12.72,8.94 14.27,9C16.74,9 16.77,10.85 16.77,11.3C16.77,13.07 13.58,15.77 13.58,15.77L17,15.75M10.5,17H8.89V10.89L7,11.47V10.19L10.31,9H10.5V17Z"
      />
    </svg>
  );
}

export function D20Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="1.2em"
      viewBox="0 0 24 24"
      style={{verticalAlign: "text-bottom"}}
    >
      <path
        fill="currentcolor"
        d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15M14.93,8.27A2.57,2.57 0 0,1 17.5,10.84V13.5C17.5,14.9 16.35,16.05 14.93,16.05C13.5,16.05 12.36,14.9 12.36,13.5V10.84A2.57,2.57 0 0,1 14.93,8.27M14.92,9.71C14.34,9.71 13.86,10.18 13.86,10.77V13.53C13.86,14.12 14.34,14.6 14.92,14.6C15.5,14.6 16,14.12 16,13.53V10.77C16,10.18 15.5,9.71 14.92,9.71M11.45,14.76V15.96L6.31,15.93V14.91C6.31,14.91 9.74,11.58 9.75,10.57C9.75,9.33 8.73,9.46 8.73,9.46C8.73,9.46 7.75,9.5 7.64,10.71L6.14,10.76C6.14,10.76 6.18,8.26 8.83,8.26C11.2,8.26 11.23,10.04 11.23,10.5C11.23,12.18 8.15,14.77 8.15,14.77L11.45,14.76Z"
      />
    </svg>
  );
}

export function ActionIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="-10 0 1020 1000"
      width="1em"
      stroke="#000000"
      // strokeWidth={100}
      paintOrder="stroke markers fill"
      style={{verticalAlign: "text-bottom"}}
    >
      <g transform="matrix(1 0 0 -1 0 801)">
        <path
          fill="currentColor"
          d="M652 300c0 80 -66 144 -146 144s-145 -63 -145 -144c0 -80 65 -144 145 -144s146 64 146 144zM1000 372v-142l-185 -26c-6 -17 -13 -34 -21 -50l120 -157l-102 -100l-159 118c-16 -8 -34 -15 -51 -21l-30 -194h-143l-27 197c-15 5 -29 11 -43 18l-161 -119l-101 100
l121 160c-8 15 -14 30 -19 46l-199 28v142l199 28c5 15 12 31 19 45l-120 159l101 100l160 -119c15 8 31 14 47 20l28 195h143l28 -195c16 -5 33 -12 48 -19l158 117l102 -100l-119 -156c8 -16 15 -32 20 -48z"
        />
      </g>
    </svg>
  );
}
