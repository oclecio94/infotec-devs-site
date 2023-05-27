import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      <header className="px-10 md:px-20 lg:px-40">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-bold">InfotecDevs</h1>
          <ul className="flex items-center">
            <li>
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
