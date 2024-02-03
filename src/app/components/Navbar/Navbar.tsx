const Navbar = () => {
  return (
    <nav className="sticky top-0 text-white bg-[#323232] h-[60px] w-full flex items-center px-10 border-b-[1px] border-[rgba(255,255,255,0.1)] backdrop-blur-sm">
      <span>Logo</span>
      <div className="flex items-center bg-[#1a1a1b] border-[1px] border-[rgba(255,255,255,0.2)] w-[22rem] h-[35px] ml-10 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
          fill="rgba(255,255,255,0.3)"
          className="relative ml-2"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
        <input
          type="text"
          name="search-bar"
          className="h-[32px] w-[20rem] outline-none bg-transparent border-none mx-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
