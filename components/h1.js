export default function H1({ children, className }) {
  return (
    <h1
      className={`${className} mb-8 text-2xl not-prose font-semibold underline decoration-3 decoration-gray-500 underline-offset-6`}
    >
      {children}
    </h1>
  );
}
