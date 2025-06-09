export default function Badge({ children }) {
  return (
    <span className="bg-blue-200 dark:bg-blue-800 rounded-sm text-sm px-1 m-1 font-semibold">
      {children}
    </span>
  );
}
