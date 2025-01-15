export default function HomeLayout({ children }) {
  return (
    <div>
      home layout
      <div className="hidden">{children}</div>
    </div>
  );
}
