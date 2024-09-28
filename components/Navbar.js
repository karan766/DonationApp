"use client"
import React ,{useState} from "react"; 
import Link from "next/link";	
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router=useRouter()
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  const handelDropdown = () => {
    setshowdropdown(!showdropdown);
  };
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  return (
    <nav className="bg-black text-white flex justify-between px-4 md:h-16 items-center ">
      <div className="logo font-bold text-lg flex  justify-center align-items-center">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          fill="#ffbf00"
          className="injected-svg -translate-x-1 translate-y-1"
          data-src="https://cdn.hugeicons.com/icons/coins-pound-solid-standard.svg"
          role="img"
          color="#000000"
          title="Coin"
        >
          <title>Coin</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.75 1C8.91751 1 5 4.91751 5 9.75C5 14.5825 8.91751 18.5 13.75 18.5C18.5825 18.5 22.5 14.5825 22.5 9.75C22.5 4.91751 18.5825 1 13.75 1ZM14.75 6C13.5074 6 12.5 7.00736 12.5 8.25V9.5H12.25C11.8358 9.5 11.5 9.83579 11.5 10.25C11.5 10.6642 11.8358 11 12.25 11H12.5V11.25C12.5 11.6642 12.1642 12 11.75 12C11.3358 12 11 12.3358 11 12.75C11 13.1642 11.3358 13.5 11.75 13.5H16.25C16.6642 13.5 17 13.1642 17 12.75C17 12.3358 16.6642 12 16.25 12H13.872C13.9549 11.7654 14 11.513 14 11.25V11H14.75C15.1642 11 15.5 10.6642 15.5 10.25C15.5 9.83579 15.1642 9.5 14.75 9.5H14V8.25C14 7.83579 14.3358 7.5 14.75 7.5C15.1642 7.5 15.5 7.83579 15.5 8.25V8.75C15.5 9.16421 15.8358 9.5 16.25 9.5C16.6642 9.5 17 9.16421 17 8.75V8.25C17 7.00736 15.9926 6 14.75 6Z"
            fill="#ffbf00"
          ></path>
        </svg>
        <Link href={"/"}>
        Collections
        </Link>
      </div>
      {/* <ul className='flex justify-between gap-4 '>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}
      <div className="relative">
        {session && <>
          <div className="relative" id="dropdown">
        <button
          id="dropdownDelayButton"
          data-dropdown-toggle="dropdownDelay"
          data-dropdown-delay="500"
          data-dropdown-trigger="hover"
          className="bg-blue-700 hover:bg-blue-800 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          type="button"
          onClick={() => setshowdropdown(!showdropdown)}
          onBlur={() => {setTimeout(()=>{setshowdropdown(false)}, 500);}}
        >
          {`Welcome ${session.user.email.split("@")[0] || "Creator"}`}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="dropdownDelay"
          className={`z-10 absolute top-14 bg-white divide-y ${
            showdropdown ? "" : "hidden"
          } divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-full
`}
          onMouseLeave={() => setTimeout(handelDropdown, 500)}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            <li>
              <Link
                href="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-medium text-center"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href={`/${session.user.name}`}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-medium text-center"
              >
                Your Page
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-medium text-center"
                onClick={() => { signOut();
                 
                  router.push("/");
                }}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div></>}
      
        
        {!session && 
        <Link href={"/login"}>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-800 group-hover:from-cyan-800 group-hover:to-blue-800 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Login
          </span>
        </button></Link>}
      </div>
    </nav>
  );
};

export default Navbar;
