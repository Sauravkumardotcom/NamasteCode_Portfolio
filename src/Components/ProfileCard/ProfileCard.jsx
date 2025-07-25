// Tailwind conversion in progress...
// This file will contain the full ProfileCard component styled using Tailwind CSS.

// Because of the complexity of the original CSS (custom props, blend modes, animated gradients, pointer tracking, etc.),
// some advanced styles will need to be retained with custom classes (added via `@layer utilities` in Tailwind config) or inline `style` props.

// For now, this will set the skeleton of Tailwind classes based on structure. Next step is to layer in detailed effects.

import React, { useEffect, useRef, useCallback, useMemo } from "react";

const ProfileCardComponent = ({
  avatarUrl = "<Placeholder for avatar URL>",
  iconUrl = "<Placeholder for icon URL>",
  grainUrl = "<Placeholder for grain URL>",
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact",
  showUserInfo = true,
  onContactClick,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const cardStyle = useMemo(() => ({
    "--icon": iconUrl ? `url(${iconUrl})` : "none",
    "--grain": grainUrl ? `url(${grainUrl})` : "none",
    "--behind-gradient": showBehindGradient ? behindGradient ?? "none" : "none",
    "--inner-gradient": innerGradient ?? "none",
  }), [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]);

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={`relative [perspective:500px] ${className}`.trim()}
      style={cardStyle}
    >
      <section
        ref={cardRef}
        className="h-[80svh] max-h-[540px] aspect-[0.718] relative overflow-hidden bg-cover bg-center rounded-[30px] shadow-lg transition-transform duration-1000 ease-in-out"
      >
        <div className="absolute inset-0 bg-black/90" style={{ backgroundImage: 'var(--inner-gradient)' }}></div>

        <div className="absolute inset-0 z-30 mix-blend-screen">
          <img
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full object-cover"
            src={avatarUrl}
            alt={`${name} avatar`}
            loading="lazy"
            onError={(e) => (e.target.style.display = "none")}
          />
          {showUserInfo && (
            <div className="absolute bottom-5 left-5 right-5 z-40 flex items-center justify-between bg-white/10 backdrop-blur border border-white/10 rounded-xl p-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                  <img
                    src={miniAvatarUrl || avatarUrl}
                    alt={`${name} mini avatar`}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.opacity = "0.5";
                      e.target.src = avatarUrl;
                    }}
                  />
                </div>
                <div className="flex flex-col text-white text-sm">
                  <span className="font-medium">@{handle}</span>
                  <span className="text-white/70 text-xs">{status}</span>
                </div>
              </div>
              <button
                className="px-4 py-2 text-sm font-semibold rounded-md border border-white/10 text-white backdrop-blur hover:border-white/40 hover:-translate-y-[1px] transition"
                onClick={handleContactClick}
              >
                {contactText}
              </button>
            </div>
          )}
        </div>

        <div className="absolute top-12 w-full text-center z-40">
          <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-b from-white to-indigo-300 bg-clip-text text-transparent">
            {name}
          </h3>
          <p className="text-base md:text-lg mt-1 bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent">
            {title}
          </p>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
