const FlagIcon = ({ active = false, ...props }: { active?: boolean; props?: any }) => (
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
      d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12ZM4 22v-7"
    />
  </svg>
);
export default FlagIcon;