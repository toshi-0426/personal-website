export default function ProjectListLoading() {
  return (
    <ul className="space-y-8">
      {Array(3)
        .fill(0)
        .map((_el, index) => (
          <li key={index} className="mb-4">
            <div className="w-full h-24 animate-pulse bg-blue-300 dark:bg-blue-500"></div>
          </li>
        ))}
    </ul>
  );
}
