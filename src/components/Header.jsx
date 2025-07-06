import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [itemCount, setItemCount] = useState(0);
  const [clicked,setClicked]= useState(true)
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setItemCount(cart.length);
        setClicked(false)
      } catch (e) {
        setItemCount(0);
      }
    };
    updateCartCount();
    window.addEventListener("update", updateCartCount);
    setClicked(true)
    return () => window.removeEventListener("update", updateCartCount);
  }, []);
  return (
    <header className="fixed z-50 top-0 w-full py-4 bg-black ">
      <div className="flex items-center justify-between px-10">
        <h1 className="text-4xl z-50 font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
          Encore
        </h1>
                  <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="z-3 md:hidden text-2xl text-gray-50 focus:outline-none cursor-pointer"
        >
          <i className={` fa-solid fa-circle-chevron-down duration-500 ${menuOpen ? "rotate-180" : ""}`}></i>
        </button>
        <nav
          className={`-translate-y-100 md:flex hidden z-2 md:translate-y-0 bg-black flex-row items-center justify-center static top-20 left-0 w-auto `}
        >
          <ul className="flex mx-auto w-fit flex-row space-x-4 text-left py-0">
          <Link to="/cart" onClick={()=>{setClicked(true);setMenuOpen(false)}} className="hover:text-red-300 text-white duration-300  hover:scale-120"><i className="fa-solid fa-cart-shopping"></i>
            {!clicked ?(itemCount > 0?
              <span className="absolute bg-red-500 -top-3 translate-x-3 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            :""):""}
          </Link>
          <Link to="/" onClick={()=>setMenuOpen(false)} className="hover:text-pink-300 text-gray-300 transition hover:scale-110">Home</Link>
          <Link to="/info" onClick={()=>setMenuOpen(false)} className="hover:text-purple-300 text-blue-300 transition hover:scale-110">Info</Link>
          <Link to="/shop" onClick={()=>setMenuOpen(false)} className="hover:text-blue-300 text-purple-300 transition hover:scale-110">Shop</Link>
          <Link to="/terms" onClick={()=>setMenuOpen(false)} className="hover:text-gray-300 text-pink-300  transition hover:scale-110">Terms</Link>
          </ul>
          </nav>
        <nav
            className={` flex md:hidden duration-500 z-2 items-center justify-center absolute top-20 left-0 w-full bg-black ${
                      menuOpen ? "opacity-100 -translate-y-5 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
                    }`}        >
          <ul className="flex flex-col mx-auto w-fit  text-center py-4">
          <Link to="/cart" onClick={()=>{setClicked(true);setMenuOpen(false)}} className="hover:text-red-300 text-white duration-300 hover:text-xl"><i className="fa-solid fa-cart-shopping"></i>
            {!clicked ?(itemCount > 0?
              <span className="absolute bg-red-500 translate-x-6 top-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            :""):""}
          </Link>
          <Link to="/" onClick={()=>setMenuOpen(false)} className="hover:text-pink-300 text-gray-300 transition hover:scale-110">Home</Link>
          <Link to="/info" onClick={()=>setMenuOpen(false)} className="hover:text-purple-300 text-blue-300 transition hover:scale-110">Info</Link>
          <Link to="/shop" onClick={()=>setMenuOpen(false)} className="hover:text-blue-300 text-purple-300 transition hover:scale-110">Shop</Link>
          <Link to="/terms" onClick={()=>setMenuOpen(false)} className="hover:text-gray-300 text-pink-300  transition hover:scale-110">Terms</Link>
          </ul>
          </nav>
      </div>
    </header>
  );
}
