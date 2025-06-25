type NavbarProps = {
  hidden: boolean;
};

const Navbar = ({ hidden }: NavbarProps) => {
  return (
    <div
      className={`bg-blue-300 fixed top-0 z-50 w-full px-6 py-4 text-black transition-opacity duration-700 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-center gap-x-10">
        <a href="#home" className="hover:text-white">
          Home
        </a>
        <a href="#about" className="hover:text-white">
          About
        </a>
        <a href="#experience" className="hover:text-white">
          Experience
        </a>
        <a href="#projects" className="hover:text-white">
          Projects
        </a>
        <a href="#resume" className="hover:text-white">
          Resume
        </a>
        <a href="#CareerGoals" className="hover:text-white">
          Career Goals
        </a>
        <a href="#contact" className="hover:text-white">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
