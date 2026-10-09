import React from 'react';

export const SceneHeroSunset: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 1200 675" className={`w-full h-full object-cover ${className}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4A7596" />
        <stop offset="35%" stopColor="#7DA1B5" />
        <stop offset="65%" stopColor="#F8C68A" />
        <stop offset="85%" stopColor="#F98745" />
        <stop offset="100%" stopColor="#D9532A" />
      </linearGradient>
      <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#FED7AA" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="poolWater" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A5F" />
        <stop offset="40%" stopColor="#2A648E" />
        <stop offset="100%" stopColor="#1B4965" />
      </linearGradient>
      <linearGradient id="lawnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#437A22" />
        <stop offset="100%" stopColor="#2B5713" />
      </linearGradient>
      <linearGradient id="pergolaFloor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A453E" />
        <stop offset="100%" stopColor="#312C28" />
      </linearGradient>
      <linearGradient id="copingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D4CFCA" />
        <stop offset="100%" stopColor="#B3ACA4" />
      </linearGradient>
    </defs>

    {/* Sky & Sunset */}
    <rect width="1200" height="675" fill="url(#skyGrad)" />

    {/* Sun and atmospheric glow over Soo */}
    <circle cx="820" cy="270" r="140" fill="url(#sunGlow)" />
    <circle cx="820" cy="270" r="32" fill="#FFFBEB" />

    {/* Volcanic Mountains of Lanzarote */}
    <path d="M0,330 Q160,310 280,265 T520,300 T780,250 T960,290 T1200,280 L1200,430 L0,430 Z" fill="#6B4B3E" opacity="0.45" />
    <path d="M0,350 Q120,330 300,285 T650,330 T920,270 T1200,310 L1200,450 L0,450 Z" fill="#583B32" opacity="0.6" />
    <path d="M0,375 Q200,355 420,330 T850,345 T1200,340 L1200,470 L0,470 Z" fill="#422922" opacity="0.85" />

    {/* Distant plains & Soo landscape */}
    <rect x="0" y="380" width="1200" height="90" fill="#755239" opacity="0.75" />

    {/* Perimeter Whitewashed Wall */}
    <polygon points="360,400 1200,380 1200,440 360,450" fill="#EDEDEA" />
    <polygon points="360,450 1200,440 1200,455 360,460" fill="#D3D0CA" />

    {/* Lawn */}
    <polygon points="0,450 1200,450 1200,675 0,675" fill="url(#lawnGrad)" />

    {/* Left Building & Covered Pergola Structure */}
    <rect x="0" y="240" width="370" height="435" fill="url(#pergolaFloor)" />
    <polygon points="0,240 370,240 370,265 0,265" fill="#FFFFFF" />
    {/* Pergola Beams */}
    <line x1="0" y1="265" x2="370" y2="265" stroke="#F4F4F3" strokeWidth="12" />
    <line x1="120" y1="265" x2="120" y2="480" stroke="#FFFFFF" strokeWidth="16" />
    <line x1="240" y1="265" x2="240" y2="480" stroke="#FFFFFF" strokeWidth="16" />
    <line x1="360" y1="265" x2="360" y2="480" stroke="#FFFFFF" strokeWidth="18" />

    {/* Outdoor Kitchen Counter & Back Wall */}
    <rect x="20" y="340" width="190" height="120" fill="#FFFFFF" />
    <rect x="25" y="360" width="80" height="45" fill="#1A1A1A" rx="4" /> {/* Built in BBQ */}
    <rect x="115" y="375" width="45" height="75" fill="#E5E5E5" rx="3" /> {/* Fridge */}

    {/* Lounge Cream Sofa */}
    <path d="M40,510 Q140,505 210,515 L210,610 L40,610 Z" fill="#EBE7DD" />
    <rect x="50" y="525" width="70" height="70" rx="10" fill="#DFD9CD" />
    <rect x="125" y="525" width="75" height="70" rx="10" fill="#DFD9CD" />
    {/* Chaiselongue extension */}
    <rect x="195" y="540" width="75" height="65" rx="8" fill="#E2DDD1" />

    {/* Glass Dining Table & Chairs under Pergola */}
    <rect x="70" y="475" width="110" height="50" rx="4" fill="#6B7280" opacity="0.3" stroke="#FFFFFF" strokeWidth="2" />
    <rect x="55" y="470" width="16" height="30" rx="2" fill="#374151" />
    <rect x="180" y="470" width="16" height="30" rx="2" fill="#374151" />

    {/* Swimming Pool Surround Coping (Grey Stone) */}
    <polygon points="460,460 1020,460 1060,610 420,610" fill="url(#copingGrad)" stroke="#8A8279" strokeWidth="2" />
    
    {/* Pool Dark Border */}
    <polygon points="495,475 985,475 1015,590 465,590" fill="#2B3A42" />

    {/* Pool Water with Sunset Shimmer */}
    <polygon points="505,483 975,483 1005,582 475,582" fill="url(#poolWater)" />
    {/* Reflections on pool water */}
    <ellipse cx="800" cy="510" rx="60" ry="10" fill="#FED7AA" opacity="0.55" />
    <ellipse cx="760" cy="535" rx="90" ry="8" fill="#FDBA74" opacity="0.4" />
    <ellipse cx="620" cy="520" rx="80" ry="6" fill="#93C5FD" opacity="0.3" />

    {/* Sun Lounger by the pool */}
    <g transform="translate(390, 485) scale(0.7)">
      {/* Wooden Teak Lounger */}
      <rect x="0" y="40" width="110" height="12" rx="3" fill="#B46A38" />
      <polygon points="10,40 45,15 52,18 20,40" fill="#C27A45" />
      <circle cx="100" cy="56" r="10" fill="#3A2514" />
      <circle cx="100" cy="56" r="4" fill="#9A5B32" />
      <rect x="18" y="50" width="8" height="12" fill="#8C4D22" />
    </g>

    {/* White Sun Parasol Umbrella */}
    <line x1="720" y1="420" x2="720" y2="520" stroke="#333333" strokeWidth="5" />
    <rect x="702" y="515" width="36" height="14" rx="3" fill="#262626" />
    <path d="M580,420 Q720,370 860,420 Z" fill="#F8F8F6" />
    <polygon points="580,420 720,370 720,420" fill="#E8E8E4" />
    <polygon points="720,420 720,370 860,420" fill="#FAFAF8" />

    {/* Wall Sign on background: "The perfect view in Soo" */}
    <g transform="translate(900, 410) scale(0.65)">
      {/* Sun/wave logo */}
      <circle cx="50" cy="18" r="12" fill="#1C1917" />
      <path d="M30,24 Q42,16 52,24 T74,24" stroke="#1C1917" strokeWidth="3" fill="none" />
      <text x="50" y="45" textAnchor="middle" fill="#1C1917" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic" fontWeight="bold">The perfect view</text>
      <text x="50" y="65" textAnchor="middle" fill="#1C1917" fontFamily="Georgia, serif" fontSize="20" fontStyle="italic" fontWeight="bold">in Soo</text>
    </g>

    {/* Palm Silhouette Top-Left */}
    <path d="M0,0 Q60,90 40,220" stroke="#2D4023" strokeWidth="14" fill="none" />
    <path d="M40,180 Q120,130 180,170" stroke="#365314" strokeWidth="6" fill="none" />
    <path d="M40,160 Q130,90 200,120" stroke="#365314" strokeWidth="6" fill="none" />
    <path d="M40,140 Q90,60 160,70" stroke="#3F6212" strokeWidth="6" fill="none" />
    <path d="M30,120 Q60,30 110,40" stroke="#365314" strokeWidth="5" fill="none" />
  </svg>
);

export const ScenePoolLounge: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="daySky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="60%" stopColor="#60A5FA" />
        <stop offset="100%" stopColor="#BAE6FD" />
      </linearGradient>
      <linearGradient id="poolDayWater" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="60%" stopColor="#0EA5E9" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#daySky)" />

    {/* Volcanic Stone Wall & Palms */}
    <rect x="0" y="160" width="800" height="120" fill="#44403C" />
    {/* Volcanic rocks texture */}
    <circle cx="100" cy="200" r="28" fill="#292524" />
    <circle cx="160" cy="220" r="32" fill="#35302E" />
    <circle cx="230" cy="190" r="26" fill="#292524" />
    <circle cx="310" cy="210" r="30" fill="#3A3533" />
    <circle cx="390" cy="195" r="25" fill="#292524" />
    <circle cx="470" cy="220" r="34" fill="#35302E" />

    {/* Upper Traditional Villa Details */}
    <polygon points="400,90 750,90 750,160 400,160" fill="#F5F5F4" />
    <rect x="520" y="110" width="40" height="40" fill="#78350F" rx="2" />
    <rect x="620" y="105" width="55" height="45" fill="#78350F" rx="2" />

    {/* Whitewashed Low Wall */}
    <rect x="0" y="270" width="800" height="60" fill="#FFFFFF" />

    {/* Green Lawn */}
    <rect x="0" y="320" width="800" height="280" fill="#4D7C0F" />

    {/* Swimming Pool Platform */}
    <polygon points="120,360 760,360 800,580 80,580" fill="#E7E5E4" stroke="#A8A29E" strokeWidth="2" />
    <polygon points="150,380 730,380 770,560 110,560" fill="#1E293B" />
    <polygon points="160,388 720,388 760,552 120,552" fill="url(#poolDayWater)" />
    {/* Pool Ripples */}
    <ellipse cx="440" cy="440" rx="140" ry="12" fill="#E0F2FE" opacity="0.4" />
    <ellipse cx="490" cy="485" rx="180" ry="14" fill="#BAE6FD" opacity="0.35" />

    {/* Teak Wood Sun Lounger with Wheels */}
    <g transform="translate(480, 370) scale(1.1)">
      <polygon points="20,40 180,40 180,52 20,52" fill="#B45309" />
      <polygon points="30,40 70,12 80,15 40,40" fill="#D97706" />
      <circle cx="170" cy="56" r="14" fill="#1C1917" />
      <circle cx="170" cy="56" r="5" fill="#F59E0B" />
      <rect x="35" y="52" width="10" height="15" fill="#92400E" />
    </g>

    {/* White Sun Parasol */}
    <line x1="260" y1="280" x2="260" y2="440" stroke="#404040" strokeWidth="6" />
    <rect x="235" y="435" width="50" height="16" rx="4" fill="#262626" />
    <path d="M120,290 Q260,220 400,290 Z" fill="#F8FAFC" />
    <line x1="260" y1="225" x2="260" y2="290" stroke="#E2E8F0" strokeWidth="2" />
  </svg>
);

export const SceneCoveredPergola: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="warmSunset" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="50%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#FB923C" />
      </linearGradient>
      <linearGradient id="slateFloor" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#44403C" />
        <stop offset="50%" stopColor="#57534E" />
        <stop offset="100%" stopColor="#292524" />
      </linearGradient>
    </defs>

    {/* Background View to Mountains & Sunset */}
    <rect width="800" height="360" fill="url(#warmSunset)" />
    <circle cx="280" cy="220" r="45" fill="#FFFBEB" opacity="0.9" />

    {/* Mountains */}
    <path d="M0,240 Q150,200 350,230 T650,210 T800,225 L800,360 L0,360 Z" fill="#78350F" opacity="0.75" />

    {/* White terrace wall & pool outside */}
    <rect x="0" y="270" width="800" height="60" fill="#FFFFFF" />
    <polygon points="120,310 500,310 540,360 80,360" fill="#38BDF8" opacity="0.8" />

    {/* Slate Floor under Pergola */}
    <polygon points="0,340 800,340 800,600 0,600" fill="url(#slateFloor)" />

    {/* Pergola Roof Structure with White Wooden Beams */}
    <rect x="0" y="0" width="800" height="90" fill="#F8FAFC" />
    <line x1="0" y1="30" x2="800" y2="30" stroke="#E2E8F0" strokeWidth="8" />
    <line x1="0" y1="60" x2="800" y2="60" stroke="#E2E8F0" strokeWidth="8" />
    <line x1="0" y1="90" x2="800" y2="90" stroke="#CBD5E1" strokeWidth="12" />

    {/* Support Pillars in White */}
    <rect x="60" y="90" width="30" height="270" fill="#FFFFFF" stroke="#E2E8F0" />
    <rect x="420" y="90" width="35" height="270" fill="#FFFFFF" stroke="#E2E8F0" />
    <rect x="760" y="90" width="40" height="270" fill="#FFFFFF" stroke="#E2E8F0" />

    {/* Glass Dining Table with 4 Chairs */}
    <rect x="80" y="380" width="180" height="80" rx="6" fill="#94A3B8" opacity="0.3" stroke="#F8FAFC" strokeWidth="3" />
    <rect x="60" y="370" width="22" height="45" rx="3" fill="#1E293B" />
    <rect x="250" y="370" width="22" height="45" rx="3" fill="#1E293B" />

    {/* Large Cream Sectional L-Sofa */}
    <polygon points="500,390 790,390 790,560 580,560 580,480 500,480" fill="#EDE8DC" stroke="#D6CEBE" strokeWidth="2" />
    {/* Plush Cushions */}
    <rect x="520" y="405" width="75" height="65" rx="8" fill="#F5F1E8" />
    <rect x="605" y="405" width="75" height="65" rx="8" fill="#F5F1E8" />
    <rect x="690" y="405" width="75" height="65" rx="8" fill="#F5F1E8" />
    <rect x="605" y="480" width="75" height="65" rx="8" fill="#F5F1E8" />
    <rect x="690" y="480" width="75" height="65" rx="8" fill="#F5F1E8" />

    {/* Fig Leaf Plant in foreground */}
    <g transform="translate(420, 360)">
      <path d="M40,160 Q60,80 50,0" stroke="#713F12" strokeWidth="8" fill="none" />
      <ellipse cx="65" cy="40" rx="35" ry="25" fill="#65A30D" />
      <ellipse cx="25" cy="70" rx="30" ry="20" fill="#84CC16" />
      <ellipse cx="75" cy="110" rx="32" ry="22" fill="#65A30D" />
    </g>
  </svg>
);

export const SceneOutdoorKitchen: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bbqTile" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1C1917" />
        <stop offset="100%" stopColor="#292524" />
      </linearGradient>
    </defs>
    {/* Blue sky background */}
    <rect width="800" height="240" fill="#38BDF8" />

    {/* Palm tree tops & Volcanic Stone backdrop */}
    <circle cx="150" cy="180" r="90" fill="#15803D" />
    <circle cx="240" cy="150" r="80" fill="#166534" />
    <rect x="0" y="160" width="800" height="150" fill="#44403C" />

    {/* White Pergola Rafters */}
    <rect x="180" y="130" width="620" height="35" fill="#FFFFFF" />
    <line x1="240" y1="165" x2="240" y2="480" stroke="#FFFFFF" strokeWidth="18" />
    <line x1="480" y1="165" x2="480" y2="480" stroke="#FFFFFF" strokeWidth="18" />
    <line x1="720" y1="165" x2="720" y2="480" stroke="#FFFFFF" strokeWidth="18" />

    {/* Kitchen Structure (Whitewashed Block) */}
    <rect x="250" y="240" width="540" height="260" fill="#FAFAF9" />

    {/* Built-in Barbecue Grill Station */}
    <polygon points="280,240 370,240 350,290 300,290" fill="#E7E5E4" />
    <rect x="280" y="290" width="100" height="70" fill="url(#bbqTile)" rx="4" />
    <line x1="290" y1="320" x2="370" y2="320" stroke="#F59E0B" strokeWidth="3" />
    <line x1="290" y1="330" x2="370" y2="330" stroke="#DC2626" strokeWidth="2" />

    {/* Black Polish Countertop */}
    <rect x="270" y="360" width="460" height="25" fill="#09090B" rx="2" />

    {/* Cabinet doors with white louvres */}
    <rect x="285" y="395" width="75" height="85" fill="#F5F5F4" stroke="#D6D3D1" strokeWidth="2" rx="3" />
    <line x1="295" y1="410" x2="350" y2="410" stroke="#A8A29E" strokeWidth="2" />
    <line x1="295" y1="425" x2="350" y2="425" stroke="#A8A29E" strokeWidth="2" />
    <line x1="295" y1="440" x2="350" y2="440" stroke="#A8A29E" strokeWidth="2" />
    <line x1="295" y1="455" x2="350" y2="455" stroke="#A8A29E" strokeWidth="2" />

    {/* White Drinks Fridge & Microwave */}
    <rect x="640" y="280" width="70" height="50" fill="#E2E8F0" rx="3" />
    <rect x="640" y="335" width="70" height="155" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" rx="4" />
    <line x1="645" y1="365" x2="645" y2="395" stroke="#64748B" strokeWidth="3" />

    {/* Dining Table in Front of Kitchen */}
    <rect x="420" y="420" width="150" height="70" rx="4" fill="#334155" opacity="0.3" stroke="#FFFFFF" strokeWidth="2" />
    <rect x="390" y="415" width="20" height="40" fill="#1E293B" rx="2" />
    <rect x="580" y="415" width="20" height="40" fill="#1E293B" rx="2" />

    {/* Slate Floor & Grass Transition */}
    <rect x="0" y="500" width="800" height="100" fill="#3E3A36" />
    <polygon points="0,500 240,500 240,600 0,600" fill="#4D7C0F" />
  </svg>
);

export const SceneModernBathroom: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="marbleWall" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#78716C" />
        <stop offset="50%" stopColor="#A8A29E" />
        <stop offset="100%" stopColor="#57534E" />
      </linearGradient>
      <linearGradient id="mirrorGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FDE047" stopOpacity="0.2" />
      </linearGradient>
    </defs>

    {/* Left Open Door looking onto bright pool & lawn */}
    <rect x="0" y="0" width="340" height="600" fill="#E2E8F0" />
    <g transform="translate(20, 20)">
      {/* Exterior View through open door */}
      <rect x="0" y="0" width="280" height="540" fill="#60A5FA" />
      {/* Distant white wall and Soo mountain */}
      <path d="M0,180 Q100,160 280,175 L280,240 L0,240 Z" fill="#92400E" opacity="0.6" />
      <rect x="0" y="240" width="280" height="50" fill="#FFFFFF" />
      <rect x="0" y="280" width="280" height="260" fill="#4D7C0F" />
      {/* Pool view */}
      <polygon points="40,320 280,320 280,480 80,480" fill="#38BDF8" stroke="#E2E8F0" strokeWidth="6" />
      {/* Door Frame */}
      <rect x="0" y="0" width="280" height="540" fill="none" stroke="#FFFFFF" strokeWidth="14" rx="4" />
    </g>

    {/* Right Bathroom Interior */}
    <rect x="340" y="0" width="460" height="600" fill="url(#marbleWall)" />

    {/* Skylight natural illumination box */}
    <polygon points="560,30 680,30 650,80 530,80" fill="#FFFFFF" opacity="0.9" />
    <polygon points="530,80 650,80 720,280 440,280" fill="#FEF3C7" opacity="0.15" />

    {/* Porcelain Tile Pattern */}
    <line x1="340" y1="180" x2="800" y2="180" stroke="#44403C" strokeWidth="2" />
    <line x1="340" y1="360" x2="800" y2="360" stroke="#44403C" strokeWidth="2" />
    <line x1="560" y1="0" x2="560" y2="600" stroke="#44403C" strokeWidth="2" />

    {/* Vertical Backlit Mirror */}
    <rect x="420" y="120" width="130" height="180" rx="4" fill="#0284C7" opacity="0.25" stroke="#E2E8F0" strokeWidth="4" />
    <line x1="416" y1="120" x2="416" y2="300" stroke="#FDE047" strokeWidth="5" />

    {/* White Pedestal Washbasin */}
    <g transform="translate(420, 310)">
      <ellipse cx="65" cy="20" rx="60" ry="25" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
      <ellipse cx="65" cy="20" rx="45" ry="16" fill="#F8FAFC" />
      <rect x="52" y="35" width="26" height="190" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" rx="4" />
      {/* Matte Black Tap */}
      <path d="M65,15 L65,-15 Q65,-25 55,-25 L45,-25" fill="none" stroke="#18181B" strokeWidth="6" strokeLinecap="round" />
    </g>

    {/* Modern Walk-in Shower with glass partition on right */}
    <rect x="680" y="100" width="10" height="420" fill="#BAE6FD" opacity="0.4" stroke="#FFFFFF" strokeWidth="1" />
    {/* Black shower head */}
    <path d="M720,110 L720,95 L760,95" stroke="#18181B" strokeWidth="6" fill="none" />
    <ellipse cx="720" cy="115" rx="20" ry="6" fill="#18181B" />
  </svg>
);

export const SceneWallLogo: React.FC<{ className?: string }> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 800 600" className={`w-full h-full object-cover ${className}`} preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wallTexture" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F7F7F6" />
        <stop offset="100%" stopColor="#EAE8E4" />
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#wallTexture)" />

    {/* Lanzarote Sun Shadow across the wall */}
    <polygon points="580,0 800,0 800,600 420,600" fill="#000000" opacity="0.04" />

    {/* Black Wrought Sign: Logo Symbol */}
    <g transform="translate(400, 210) scale(1.4)">
      {/* Sun setting */}
      <path d="M-30,0 A30,30 0 0,1 30,0 Z" fill="#171717" />
      {/* Ocean Wave */}
      <path d="M-42,10 Q-20,-4 0,10 Q20,-4 42,10 L38,18 Q20,6 0,18 Q-20,6 -38,18 Z" fill="#171717" />
    </g>

    {/* Cursive Typography: "The perfect view" */}
    <text x="400" y="320" textAnchor="middle" fill="#171717" fontFamily="Playfair Display, Georgia, serif" fontSize="54" fontStyle="italic" fontWeight="600" letterSpacing="1">
      The perfect view
    </text>

    {/* "in Soo" */}
    <text x="400" y="400" textAnchor="middle" fill="#171717" fontFamily="Playfair Display, Georgia, serif" fontSize="62" fontStyle="italic" fontWeight="600" letterSpacing="1">
      in Soo
    </text>

    <text x="400" y="460" textAnchor="middle" fill="#78716C" fontFamily="Outfit, sans-serif" fontSize="16" letterSpacing="4" fontWeight="500">
      TERRAZA LOUNGE & EVENTOS · LANZAROTE
    </text>
  </svg>
);
