const DiskIcon = ({ active = false, ...props }: { active?: boolean; props?: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={active ? "#fff" : "#C4C4C4"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11ZM6 16h.01M10 16h.01"
    />
  </svg>
);
export default DiskIcon;