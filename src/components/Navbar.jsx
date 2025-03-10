import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaMoon, FaShoppingCart, FaSun, FaStore } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalAmount } = useGlobalContext();
  const { changeTheme, currentTheme } = useTheme();

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar main-container flex justify-between items-center py-4">
        {/* Logo - Markazda bo'lishi uchun flex */}
        <div className="navbar-start flex-1">
          <Link
            to="/"
            className="text-2xl font-bold flex items-center gap-2 hover:text-blue-600 transition"
          >
            <FaStore className="h-7 w-7 text-blue-500" />
            <span>Shop</span>
          </Link>
        </div>

        {/* Tema o'zgartirish */}
        <div className="navbar-center">
          <button
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={changeTheme}
          >
            {currentTheme === "dark" ? (
              <FaSun className="h-7 w-7 text-yellow-500" />
            ) : (
              <FaMoon className="h-7 w-7 text-gray-600" />
            )}
          </button>
        </div>

        {/* Savatcha (Cart) */}
        <div className="navbar-end flex-1 flex justify-end">
          <Link
            to="/cart"
            className="relative flex items-center gap-2 text-lg font-medium hover:text-green-600 transition"
          >
            <FaShoppingCart className="h-7 w-7 text-green-500" />
            {totalAmount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalAmount}
              </span>
            )}
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
