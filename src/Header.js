import DateTime from "./DateTime";

function Header() {
  return (
    <header className="Head">
      <div className="Left">Daily Operational</div>
      <DateTime className="Right" />
    </header>
  );
}
export default Header;
