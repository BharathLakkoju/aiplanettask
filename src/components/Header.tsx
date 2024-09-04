import logo from "../assets/logo_dhpi.png";

export default function Header() {
  return (
    <>
      <header className="w-full bg-white shadow-md flex justify-start items-center min-h-[4rem] fixed top-0 left-0 z-50">
        <div className="flex justify-start items-center gap-2 p-2 mx-auto min-w-[calc(100%-10rem)]">
          <img src={logo} alt="logo" className="w-20" />
        </div>
      </header>
    </>
  );
}
