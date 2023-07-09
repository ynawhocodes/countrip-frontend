const MagazineIcon = ({ active = false, ...props }: { active?: boolean; props?: any }) => (
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
      d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2V3ZM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7V3Z"
    />
  </svg>
);
export default MagazineIcon;