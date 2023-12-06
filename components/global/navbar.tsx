import { Logo, Menu } from ".";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between items-center">
      <Logo />
      <Menu />
    </div>
  );
}
