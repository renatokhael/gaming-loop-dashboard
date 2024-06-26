const sidebarRightIcons = [
  { background: "#4a8cda", icon: "react-streaming-dashboard-fortnite.svg" },
  { background: "#de4f5f", icon: "react-streaming-dashboard-reddit.svg" },
  { background: "#d99b52", icon: "react-streaming-dashboard-snapchat.svg" },
  { background: "#6348b1", icon: "react-streaming-dashboard-twitch.svg" },
];

export function SidebarRight() {
  return (
    <div className="w-20 h-full flex-shrink-0 sidebar-right rounded-r-3xl self-center flex flex-col items-center py-4">
      <div className="w-14 h-14 rounded-full mb-10 p-1.5 relative">
        <div className="avatar-ring inset-0 absolute" />

        <div className="absolute inset-0  p-1.5">
          <img
            src="https://assets.codepen.io/3685267/react-streaming-dashboard-selection-item-avatar-1.jpg"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
      {sidebarRightIcons.map(({ background, icon }, index) => (
        <div
          className="w-11 h-11 rounded-xl mt-4 flex justify-center items-center fadeInDown"
          style={{ background, animationDelay: `${0.1 * index}s` }}
        >
          <img
            src={`https://assets.codepen.io/3685267/${icon}`}
            alt=""
            className="w-5 h-5"
          />
        </div>
      ))}

      <div
        className="w-10 h-10 mt-10 overflow-hidden relative fadeInDown"
        style={{ animationDelay: "0.4s" }}
      >
        <img
          src="https://assets.codepen.io/3685267/react-streaming-dashboard-selection-item-avatar-2.jpg"
          alt=""
          className=" rounded-full"
        />
        <svg
          className="absolute inset-0"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="80"
            cy="20"
            r="16"
            fill="#8AD35D"
            stroke="#272042"
            strokeWidth="8"
          />
        </svg>
      </div>
      <div
        className="w-10 h-10 mt-4 overflow-hidden relative fadeInDown"
        style={{ animationDelay: "0.5s" }}
      >
        <img
          src="https://assets.codepen.io/3685267/react-streaming-dashboard-selection-item-avatar-4.jpg"
          alt=""
          className=" rounded-full"
        />
        <svg
          className="absolute inset-0"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="80"
            cy="20"
            r="16"
            fill="#8AD35D"
            stroke="#272042"
            strokeWidth="8"
          />
        </svg>
      </div>
    </div>
  );
}
