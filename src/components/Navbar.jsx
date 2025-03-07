import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalAmount } = useGlobalContext();
  const { changeTheme, currentTheme } = useTheme();

  return (
    <header className="bg-base-200 mb-5">
      <div className="navbar main-container">
        <div className="navbar-start">Logo</div>
        <div className="navbar-center">Navbar</div>
        <div className="navbar-end">
          <div>
            <label className="swap swap-rotate">
              {/* hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={changeTheme}
                defaultChecked={currentTheme === "dark"}
              />

              {/* sun icon */}
              <FaSun className="swap-on h-7 w-7 fill-current" />

              {/* moon icon */}
              <FaMoon className="swap-off h-7 w-7 fill-current" />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/cart">
              <FaShoppingCart className="h-6 w-6" />
              <span>Amount: {totalAmount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
