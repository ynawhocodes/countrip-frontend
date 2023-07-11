const DefaultProfileIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <circle cx={32} cy={32} r={32} fill="#F2F2F6" />
    <path
      stroke="#C4C4C4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M40 41v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M32 31a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
export default DefaultProfileIcon;
