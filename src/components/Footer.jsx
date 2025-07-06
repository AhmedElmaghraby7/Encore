import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-5 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
            Encore
          </h2>
          <p className="text-sm text-gray-400 mt-1">© 2025 Encore. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm md:hidden">
          <li><Link to="/" className="hover:text-pink-300"><i className="fa-solid fa-home"></i></Link></li>
          <li><Link to="/info" className="hover:text-purple-300"><i className="fa-solid fa-circle-info"></i></Link></li>
          <li><Link to="/shop" className="hover:text-blue-300"><i className="fa-solid fa-shop"></i></Link></li>
          <li><Link to="/terms" className="hover:text-gray-300"><i className="fa-solid fa-scroll"></i></Link></li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
}
