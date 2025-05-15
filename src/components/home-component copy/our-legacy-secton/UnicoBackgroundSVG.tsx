import React from 'react';

const UnicoBackgroundSVG: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1440 400"
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e5e7eb" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#f3f4f6" stopOpacity="0.05" />
                </linearGradient>

                <linearGradient id="sphereGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f1f5f9" />
                    <stop offset="50%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>

                <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="50%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#64748b" />
                </linearGradient>

                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="2" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background */}


            {/* Sky and horizon */}


            {/* Main Horizontal Pipeline */}
            <g>
                <path d="M50,260 L1390,260" stroke="#434343" strokeWidth="12" fill="none" />
                <path d="M50,260 L1390,260" stroke="url(#pipeGradient)" strokeWidth="10" fill="none" />

                {/* Pipe connections and details */}
                <rect x="100" y="255" width="20" height="10" fill="#434343" rx="2" />
                <rect x="300" y="255" width="20" height="10" fill="#434343" rx="2" />
                <rect x="500" y="255" width="20" height="10" fill="#434343" rx="2" />
                <rect x="700" y="255" width="20" height="10" fill="#434343" rx="2" />
                <rect x="900" y="255" width="20" height="10" fill="#434343" rx="2" />
                <rect x="1100" y="255" width="20" height="10" fill="#434343" rx="2" />
                <rect x="1300" y="255" width="20" height="10" fill="#434343" rx="2" />
            </g>

            {/* Spherical Tank 1 */}
            <g transform="translate(120, 150)">
                {/* Support structure - metal pipes instead of wooden fence */}
                <g>
                    {/* Main support columns */}
                    <path d="M0,80 L0,180" stroke="#434343" strokeWidth="10" />
                    <path d="M0,80 L0,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    <path d="M150,80 L150,180" stroke="#434343" strokeWidth="10" />
                    <path d="M150,80 L150,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    {/* Support rings */}
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    {/* Vertical connections */}
                    <path d="M30,90 L30,180" stroke="#434343" strokeWidth="8" />
                    <path d="M30,90 L30,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M120,90 L120,180" stroke="#434343" strokeWidth="8" />
                    <path d="M120,90 L120,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M60,92 L60,180" stroke="#434343" strokeWidth="6" />
                    <path d="M60,92 L60,180" stroke="url(#pipeGradient)" strokeWidth="4" />

                    <path d="M90,92 L90,180" stroke="#434343" strokeWidth="6" />
                    <path d="M90,92 L90,180" stroke="url(#pipeGradient)" strokeWidth="4" />
                </g>

                {/* Main sphere */}
                <circle cx="75" cy="0" r="65" fill="url(#sphereGradient)" stroke="#434343" strokeWidth="3" filter="url(#shadow)" />

                {/* Tank label */}
                <text x="75" y="5" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#434343" fontWeight="bold">unico</text>

                {/* Details on sphere */}
                <ellipse cx="75" cy="0" rx="65" ry="20" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="-25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />

                {/* Connection pipe from tank to main line */}
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="#434343" strokeWidth="10" fill="none" />
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="url(#pipeGradient)" strokeWidth="8" fill="none" />

                {/* Valve on connection pipe */}
                <circle cx="75" cy="210" r="10" fill="#434343" />
                <circle cx="75" cy="210" r="8" fill="#64748b" />
                <rect x="65" y="208" width="20" height="4" fill="#434343" />
            </g>

            {/* Spherical Tank 2 */}
            <g transform="translate(350, 150)">
                {/* Support structure - metal pipes instead of wooden fence */}
                <g>
                    {/* Main support columns */}
                    <path d="M0,80 L0,180" stroke="#434343" strokeWidth="10" />
                    <path d="M0,80 L0,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    <path d="M150,80 L150,180" stroke="#434343" strokeWidth="10" />
                    <path d="M150,80 L150,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    {/* Support rings */}
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    {/* Vertical connections */}
                    <path d="M30,90 L30,180" stroke="#434343" strokeWidth="8" />
                    <path d="M30,90 L30,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M120,90 L120,180" stroke="#434343" strokeWidth="8" />
                    <path d="M120,90 L120,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M60,92 L60,180" stroke="#434343" strokeWidth="6" />
                    <path d="M60,92 L60,180" stroke="url(#pipeGradient)" strokeWidth="4" />

                    <path d="M90,92 L90,180" stroke="#434343" strokeWidth="6" />
                    <path d="M90,92 L90,180" stroke="url(#pipeGradient)" strokeWidth="4" />
                </g>

                {/* Main sphere */}
                <circle cx="75" cy="0" r="65" fill="url(#sphereGradient)" stroke="#434343" strokeWidth="3" filter="url(#shadow)" />

                {/* Tank label */}
                <text x="75" y="5" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#434343" fontWeight="bold">unico</text>

                {/* Details on sphere */}
                <ellipse cx="75" cy="0" rx="65" ry="20" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="-25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />

                {/* Connection pipe from tank to main line */}
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="#434343" strokeWidth="10" fill="none" />
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="url(#pipeGradient)" strokeWidth="8" fill="none" />

                {/* Valve on connection pipe */}
                <circle cx="75" cy="210" r="10" fill="#434343" />
                <circle cx="75" cy="210" r="8" fill="#64748b" />
                <rect x="65" y="208" width="20" height="4" fill="#434343" />
            </g>

            {/* Spherical Tank 3 */}
            <g transform="translate(580, 150)">
                {/* Support structure - metal pipes instead of wooden fence */}
                <g>
                    {/* Main support columns */}
                    <path d="M0,80 L0,180" stroke="#434343" strokeWidth="10" />
                    <path d="M0,80 L0,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    <path d="M150,80 L150,180" stroke="#434343" strokeWidth="10" />
                    <path d="M150,80 L150,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    {/* Support rings */}
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    {/* Vertical connections */}
                    <path d="M30,90 L30,180" stroke="#434343" strokeWidth="8" />
                    <path d="M30,90 L30,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M120,90 L120,180" stroke="#434343" strokeWidth="8" />
                    <path d="M120,90 L120,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M60,92 L60,180" stroke="#434343" strokeWidth="6" />
                    <path d="M60,92 L60,180" stroke="url(#pipeGradient)" strokeWidth="4" />

                    <path d="M90,92 L90,180" stroke="#434343" strokeWidth="6" />
                    <path d="M90,92 L90,180" stroke="url(#pipeGradient)" strokeWidth="4" />
                </g>

                {/* Main sphere */}
                <circle cx="75" cy="0" r="65" fill="url(#sphereGradient)" stroke="#434343" strokeWidth="3" filter="url(#shadow)" />

                {/* Tank label */}
                <text x="75" y="5" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#434343" fontWeight="bold">unico</text>

                {/* Details on sphere */}
                <ellipse cx="75" cy="0" rx="65" ry="20" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="-25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />

                {/* Connection pipe from tank to main line */}
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="#434343" strokeWidth="10" fill="none" />
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="url(#pipeGradient)" strokeWidth="8" fill="none" />

                {/* Valve on connection pipe */}
                <circle cx="75" cy="210" r="10" fill="#434343" />
                <circle cx="75" cy="210" r="8" fill="#64748b" />
                <rect x="65" y="208" width="20" height="4" fill="#434343" />
            </g>

            {/* Spherical Tank 4 */}
            <g transform="translate(810, 150)">
                {/* Support structure - metal pipes instead of wooden fence */}
                <g>
                    {/* Main support columns */}
                    <path d="M0,80 L0,180" stroke="#434343" strokeWidth="10" />
                    <path d="M0,80 L0,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    <path d="M150,80 L150,180" stroke="#434343" strokeWidth="10" />
                    <path d="M150,80 L150,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    {/* Support rings */}
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    {/* Vertical connections */}
                    <path d="M30,90 L30,180" stroke="#434343" strokeWidth="8" />
                    <path d="M30,90 L30,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M120,90 L120,180" stroke="#434343" strokeWidth="8" />
                    <path d="M120,90 L120,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M60,92 L60,180" stroke="#434343" strokeWidth="6" />
                    <path d="M60,92 L60,180" stroke="url(#pipeGradient)" strokeWidth="4" />

                    <path d="M90,92 L90,180" stroke="#434343" strokeWidth="6" />
                    <path d="M90,92 L90,180" stroke="url(#pipeGradient)" strokeWidth="4" />
                </g>

                {/* Main sphere */}
                <circle cx="75" cy="0" r="65" fill="url(#sphereGradient)" stroke="#434343" strokeWidth="3" filter="url(#shadow)" />

                {/* Tank label */}
                <text x="75" y="5" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#434343" fontWeight="bold">unico</text>

                {/* Details on sphere */}
                <ellipse cx="75" cy="0" rx="65" ry="20" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="-25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />

                {/* Connection pipe from tank to main line */}
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="#434343" strokeWidth="10" fill="none" />
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="url(#pipeGradient)" strokeWidth="8" fill="none" />

                {/* Valve on connection pipe */}
                <circle cx="75" cy="210" r="10" fill="#434343" />
                <circle cx="75" cy="210" r="8" fill="#64748b" />
                <rect x="65" y="208" width="20" height="4" fill="#434343" />
            </g>

            {/* Spherical Tank 5 */}
            <g transform="translate(1040, 150)">
                {/* Support structure - metal pipes instead of wooden fence */}
                <g>
                    {/* Main support columns */}
                    <path d="M0,80 L0,180" stroke="#434343" strokeWidth="10" />
                    <path d="M0,80 L0,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    <path d="M150,80 L150,180" stroke="#434343" strokeWidth="10" />
                    <path d="M150,80 L150,180" stroke="url(#pipeGradient)" strokeWidth="8" />

                    {/* Support rings */}
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="100" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="#434343" strokeWidth="5" />
                    <ellipse cx="75" cy="140" rx="80" ry="10" fill="none" stroke="url(#pipeGradient)" strokeWidth="3" />

                    {/* Vertical connections */}
                    <path d="M30,90 L30,180" stroke="#434343" strokeWidth="8" />
                    <path d="M30,90 L30,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M120,90 L120,180" stroke="#434343" strokeWidth="8" />
                    <path d="M120,90 L120,180" stroke="url(#pipeGradient)" strokeWidth="6" />

                    <path d="M60,92 L60,180" stroke="#434343" strokeWidth="6" />
                    <path d="M60,92 L60,180" stroke="url(#pipeGradient)" strokeWidth="4" />

                    <path d="M90,92 L90,180" stroke="#434343" strokeWidth="6" />
                    <path d="M90,92 L90,180" stroke="url(#pipeGradient)" strokeWidth="4" />
                </g>

                {/* Main sphere */}
                <circle cx="75" cy="0" r="65" fill="url(#sphereGradient)" stroke="#434343" strokeWidth="3" filter="url(#shadow)" />

                {/* Tank label */}
                <text x="75" y="5" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#434343" fontWeight="bold">unico</text>

                {/* Details on sphere */}
                <ellipse cx="75" cy="0" rx="65" ry="20" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="-25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />
                <ellipse cx="75" cy="25" rx="55" ry="15" fill="none" stroke="#434343" strokeWidth="1.5" />

                {/* Connection pipe from tank to main line */}
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="#434343" strokeWidth="10" fill="none" />
                <path d="M75,65 L75,130 Q75,155 95,155 L95,175 Q95,190 75,190 L75,260"
                    stroke="url(#pipeGradient)" strokeWidth="8" fill="none" />

                {/* Valve on connection pipe */}
                <circle cx="75" cy="210" r="10" fill="#434343" />
                <circle cx="75" cy="210" r="8" fill="#64748b" />
                <rect x="65" y="208" width="20" height="4" fill="#434343" />
            </g>

            {/* Additional Pipe Details */}
            <g>
                {/* Pressure gauges */}
                <g transform="translate(200, 235)">
                    <circle cx="0" cy="0" r="15" fill="#f1f5f9" stroke="#434343" strokeWidth="2" />
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#434343" strokeWidth="1" />
                    <path d="M0,0 L0,-8" stroke="#434343" strokeWidth="2" />
                    <path d="M0,0 L6,4" stroke="#ff0000" strokeWidth="2" />
                </g>

                <g transform="translate(660, 235)">
                    <circle cx="0" cy="0" r="15" fill="#f1f5f9" stroke="#434343" strokeWidth="2" />
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#434343" strokeWidth="1" />
                    <path d="M0,0 L-6,6" stroke="#434343" strokeWidth="2" />
                    <path d="M0,0 L6,4" stroke="#ff0000" strokeWidth="2" />
                </g>

                <g transform="translate(1120, 235)">
                    <circle cx="0" cy="0" r="15" fill="#f1f5f9" stroke="#434343" strokeWidth="2" />
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#434343" strokeWidth="1" />
                    <path d="M0,0 L0,-8" stroke="#434343" strokeWidth="2" />
                    <path d="M0,0 L8,0" stroke="#ff0000" strokeWidth="2" />
                </g>
            </g>

            {/* Ground/horizon line */}
            <rect x="0" y="330" width="100%" height="70" fill="#64748b" fillOpacity="0.1" />
            <line x1="0" y1="330" x2="1440" y2="330" stroke="#434343" strokeWidth="1" />
        </svg>
    );
};

export default UnicoBackgroundSVG;