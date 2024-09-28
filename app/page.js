import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center text-white h-[44vh] px-5 md:px-0">
      <div className="font-bold text-5xl m-3 flex gap-2">Lets Collect Funds <span> <img src="
      "  ></img> <svg
      xmlns="http://www.w3.org/2000/svg"
      width={70}
      viewBox="0 0 24 24"
      fill="#ffbf00"
      className="aspect-square injected-svg -translate-x-1 translate-y-1"
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
    </svg> </span></div>
      <p>
        A crowdfunding platform for Creaters. Get funded by your fans and
        followers.
      </p>
      <div>
        <Link href={"/login"}>
        <button className="m-3  px-6 py-2 bg-blue-800 text-white rounded-lg" >Start Here</button>
        </Link>
        <Link href={"/about"}>
        <button className="m-3 px-6 py-2 bg-blue-800 text-white rounded-lg" >Read More</button>
        </Link>
      </div>
        
      
    </div>
    <div className="bg-white h-1 opacity-10">
        
      </div>
      <div className="text-white container mx-auto p-2 pb-20 ">
        <h1 className="text-3xl font-bold text-center my-12"> Your Fans can fund you </h1>
        <div className="flex gap-5 justify-around "> 
          <div className="item space-y-3 flex flex-col items-center justify-center ">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width={100}
        height={100}
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
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center ">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={80}
        viewBox="0 0 24 24"
        fill="none"
        className="injected-svg aspect-square  bg-slate-400 rounded-full p-2 text-black"
        data-src="https://cdn.hugeicons.com/icons/user-group-bulk-rounded.svg"
        role="img"
        color="#000000"
      >
        <title>Group</title>
        <g opacity="0.4">
          <path
            d="M7.50337 13.1474C7.21627 13.3013 6.93491 13.4624 6.72814 13.5903C6.23354 13.8795 5.30191 14.4241 4.62889 15.1082C4.19456 15.5497 3.6236 16.2837 3.51733 17.2933C3.48451 17.6051 3.49934 17.9036 3.55304 18.1871C3.60678 18.4709 3.63366 18.6128 3.56186 18.6872C3.49006 18.7616 3.37042 18.7434 3.13114 18.707C2.10732 18.5512 1.41543 17.9931 0.847642 17.3845C0.423078 16.9295 0.203787 16.4061 0.258175 15.8464C0.30924 15.3208 0.59019 14.8976 0.871177 14.5882C1.31466 14.0998 1.96834 13.686 2.35981 13.4381C2.44345 13.3852 2.51514 13.3398 2.57023 13.3029C4.04765 12.3132 5.8097 12.0212 7.45505 12.427C7.84296 12.5226 8.03691 12.5704 8.05406 12.7068C8.0712 12.8431 7.88193 12.9445 7.50337 13.1474Z"
            fill="#000000"
          ></path>
          <path
            d="M6.48748 5.28637C6.67718 5.31491 6.77203 5.32917 6.82077 5.40797C6.8695 5.48678 6.83553 5.59143 6.7676 5.80075C6.59392 6.3359 6.50006 6.90702 6.50006 7.50007C6.50006 8.74002 6.91038 9.88414 7.60265 10.804C7.73471 10.9795 7.80075 11.0673 7.7804 11.1576C7.76005 11.2479 7.67515 11.2923 7.50536 11.3812C7.05533 11.6168 6.54326 11.7501 6.00006 11.7501C4.20514 11.7501 2.75006 10.295 2.75006 8.50007C2.75006 6.70514 4.20514 5.25007 6.00006 5.25007C6.16572 5.25007 6.32848 5.26246 6.48748 5.28637Z"
            fill="#000000"
          ></path>
        </g>
        <g opacity="0.4">
          <path
            d="M16.4971 13.1474C16.7842 13.3013 17.0655 13.4624 17.2723 13.5902C17.7669 13.8794 18.6985 14.4241 19.3715 15.1082C19.8059 15.5497 20.3768 16.2837 20.4831 17.2933C20.5159 17.605 20.5011 17.9035 20.4474 18.1871C20.3937 18.4708 20.3668 18.6127 20.4386 18.6871C20.5104 18.7616 20.63 18.7434 20.8693 18.7069C21.8931 18.5511 22.585 17.993 23.1528 17.3844C23.5774 16.9294 23.7967 16.4061 23.7423 15.8463C23.6912 15.3207 23.4102 14.8975 23.1293 14.5881C22.6858 14.0998 22.0321 13.6859 21.6406 13.4381C21.557 13.3851 21.4853 13.3397 21.4302 13.3028C19.9528 12.3131 18.1907 12.0212 16.5454 12.4269C16.1575 12.5225 15.9635 12.5704 15.9464 12.7067C15.9292 12.843 16.1185 12.9445 16.4971 13.1474Z"
            fill="#000000"
          ></path>
          <path
            d="M16.3979 10.804C16.2659 10.9795 16.1998 11.0672 16.2202 11.1575C16.2405 11.2478 16.3254 11.2922 16.4952 11.3811C16.9452 11.6167 17.4573 11.75 18.0005 11.75C19.7954 11.75 21.2505 10.2949 21.2505 8.5C21.2505 6.70507 19.7954 5.25 18.0005 5.25C17.8348 5.25 17.6721 5.26239 17.5131 5.28631C17.3234 5.31484 17.2285 5.3291 17.1798 5.4079C17.1311 5.48671 17.165 5.59136 17.233 5.80068C17.4066 6.33583 17.5005 6.90695 17.5005 7.5C17.5005 8.73995 17.0902 9.88407 16.3979 10.804Z"
            fill="#000000"
          ></path>
        </g>
        <path
          d="M7.69146 14.4733C10.3292 12.8422 13.675 12.8422 16.3127 14.4733C16.3905 14.5214 16.489 14.579 16.6022 14.6452L16.6022 14.6452C17.1145 14.945 17.9276 15.4208 18.4826 15.9849C18.8311 16.3391 19.1787 16.8221 19.242 17.4242C19.3099 18.0683 19.0365 18.6646 18.5149 19.1806C17.6533 20.033 16.5859 20.75 15.1865 20.75H8.81773C7.41827 20.75 6.35094 20.033 5.48932 19.1806C4.96775 18.6646 4.69435 18.0683 4.76215 17.4242C4.82553 16.8221 5.17313 16.3391 5.52165 15.9849C6.07655 15.4208 6.88974 14.945 7.40201 14.6452L7.40204 14.6452C7.51521 14.579 7.6137 14.5214 7.69146 14.4733Z"
          fill="#000000"
        ></path>
        <path
          d="M7.75177 7.5C7.75177 5.15279 9.65456 3.25 12.0018 3.25C14.349 3.25 16.2518 5.15279 16.2518 7.5C16.2518 9.84721 14.349 11.75 12.0018 11.75C9.65456 11.75 7.75177 9.84721 7.75177 7.5Z"
          fill="#000000"
        ></path>
      </svg>
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 225 225"
        width={80}
        height={80}
        className="aspect-square"
      >
        <title>Professional</title>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#F9F9F9"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        ></g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#050505"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 136.00 21.00    C 136.70 24.20 138.34 25.03 137.00 29.00   C 133.97 28.64 135.25 32.22 135.00 34.00   C 139.35 31.54 143.68 38.99 140.00 42.00   C 143.20 46.15 151.84 41.42 151.00 50.00   C 155.94 51.91 157.31 46.00 163.00 48.00   C 163.74 51.84 166.24 50.26 169.00 50.00   C 165.39 42.06 177.39 46.98 179.00 42.00   C 174.60 37.24 183.73 34.74 185.00 31.00   C 178.43 27.70 184.69 22.22 185.00 18.00   C 180.96 18.40 175.93 12.84 180.00 9.00   C 177.49 6.39 175.93 6.27 173.00 8.00   C 169.30 6.19 169.94 1.22 166.00 1.00   C 164.80 3.69 163.54 2.96 162.00 3.00   C 160.00 3.05 158.00 2.96 156.00 3.00   C 156.00 2.00 156.00 1.00 156.00 0.00   L 155.00 0.00   C 151.69 1.62 149.10 10.37 144.00 6.00   C 139.34 7.74 143.31 11.47 140.30 14.30 C 137.30 17.14 135.73 17.44 136.00 21.00   M 163.00 10.00    C 180.27 11.80 179.27 36.68 164.00 41.00   C 160.96 41.86 158.99 41.84 156.00 41.00   C 139.52 36.34 140.75 13.72 157.00 10.00   C 159.48 9.43 160.57 9.44 163.00 10.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#E3E3E3"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 162.00 3.00    C 163.66 2.55 164.42 1.87 165.00 0.00   L 156.00 0.00   C 156.00 1.00 156.00 2.00 156.00 3.00   C 158.00 2.96 160.00 3.05 162.00 3.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#606060"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 162.00 3.00    C 163.54 2.96 164.80 3.69 166.00 1.00   C 166.00 1.00 166.00 0.50 166.00 0.00   L 165.00 0.00   C 164.42 1.87 163.66 2.55 162.00 3.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#757575"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 157.00 10.00    C 158.86 9.81 161.14 9.81 163.00 10.00   C 160.57 9.44 159.48 9.43 157.00 10.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#F3F3F3"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 156.00 41.00    C 158.29 41.35 161.71 41.35 164.00 41.00   C 179.27 36.68 180.27 11.80 163.00 10.00   C 161.14 9.81 158.86 9.81 157.00 10.00   C 140.75 13.72 139.52 36.34 156.00 41.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#7B7B7B"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path
            fill="None"
            d="   M 137.00 29.00    C 138.34 25.03 136.70 24.20 136.00 21.00   C 136.20 23.59 137.51 26.01 137.00 29.00 Z"
          ></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#808080"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 164.00 41.00    C 161.71 41.35 158.29 41.35 156.00 41.00   C 158.99 41.84 160.96 41.86 164.00 41.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#010101"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 75.00 64.00    C 74.83 65.91 74.86 68.09 75.00 70.00   C 79.67 94.85 115.06 92.23 116.00 67.00 C 116.93 41.78 77.15 39.36 75.00 64.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#0B0B0B"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 169.00 71.00    C 171.53 70.17 172.78 72.48 174.00 74.00   C 173.92 75.45 174.07 76.86 175.00 78.00   C 177.47 74.92 180.48 77.53 182.00 80.00   C 185.31 76.99 188.22 78.30 192.00 78.00   C 190.07 74.02 195.69 73.52 198.00 73.00   C 196.92 70.35 196.59 67.18 200.00 66.00   C 198.76 63.03 197.12 60.25 199.00 57.00   C 195.53 56.12 193.88 53.16 193.00 50.00   C 190.44 51.09 187.35 50.89 186.00 48.00   C 182.46 49.03 179.59 50.27 176.00 49.00   C 176.83 53.41 172.52 53.70 170.00 54.00   C 171.55 57.16 170.83 61.11 167.00 62.00   C 169.22 64.42 171.24 66.92 169.00 71.00   M 186.00 54.00    C 196.83 55.26 196.78 73.23 184.98 73.98 C 173.17 74.72 169.45 58.07 181.00 54.00   C 183.34 53.18 183.75 53.36 186.00 54.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#080808"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 147.00 50.00    C 143.26 51.19 140.59 55.58 136.00 52.00   C 135.03 55.81 132.39 60.14 128.00 58.00   C 128.67 61.11 129.95 67.46 125.00 67.00   C 124.14 71.27 130.57 74.15 126.00 78.00   C 129.08 80.31 133.74 82.43 133.00 87.00   C 136.61 85.98 140.85 86.07 142.00 90.00   C 145.84 89.00 149.40 85.03 153.00 89.00   C 153.31 83.01 158.12 82.87 162.00 81.00   C 159.30 79.01 160.03 73.22 164.00 74.00   C 164.09 69.48 159.09 65.76 163.00 62.00   C 159.34 61.27 154.90 58.03 157.00 54.00   C 153.50 53.36 148.58 55.69 147.00 50.00   M 149.00 58.00    C 163.79 61.66 156.25 87.90 140.93 82.07 C 125.60 76.25 132.62 53.94 149.00 58.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#7C7C7C"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 181.00 54.00    C 182.44 53.75 184.54 53.83 186.00 54.00   C 183.75 53.36 183.34 53.18 181.00 54.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#F0F0F0"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 186.00 54.00    C 184.54 53.83 182.44 53.75 181.00 54.00   C 169.45 58.07 173.17 74.72 184.98 73.98 C 196.78 73.23 196.83 55.26 186.00 54.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#F0F0F0"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 149.00 58.00    C 132.62 53.94 125.60 76.25 140.93 82.07 C 156.25 87.90 163.79 61.66 149.00 58.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#707070"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 75.00 70.00    C 74.86 68.09 74.83 65.91 75.00 64.00   C 74.52 66.35 74.55 67.61 75.00 70.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#818181"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 174.00 74.00    C 172.78 72.48 171.53 70.17 169.00 71.00   C 170.29 72.40 172.45 72.47 174.00 74.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#010101"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 47.00 131.00    C 46.81 135.98 47.00 141.01 47.00 146.00   C 43.20 182.04 87.36 170.37 110.00 172.00   C 115.11 188.95 106.74 213.50 122.00 225.00   L 129.00 225.00   C 142.25 218.09 135.50 199.48 135.00 187.00   C 134.84 185.84 134.12 183.75 134.00 182.00   C 133.62 176.53 133.16 171.59 133.00 166.00   C 132.85 164.67 132.22 161.89 132.00 160.00   C 126.33 139.39 96.27 152.86 80.00 149.00   C 79.31 139.91 82.29 131.72 83.00 123.00   C 75.68 119.09 63.45 113.86 64.03 103.03 C 64.60 92.19 82.13 93.53 86.00 103.00   C 88.23 86.89 66.96 82.83 58.75 93.75 C 50.54 104.67 47.51 117.54 47.00 131.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#030303"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 139.00 131.00    C 147.84 128.11 161.74 135.09 170.00 131.00   C 172.72 123.94 178.54 115.98 181.08 109.08 C 183.61 102.17 193.61 92.40 184.00 89.00   C 178.23 101.15 171.53 113.01 166.00 125.00   C 158.00 125.00 150.00 125.00 142.00 125.00   C 143.03 127.31 138.81 129.20 139.00 131.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#020202"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 75.00 96.00    C 62.41 94.13 65.24 111.50 74.25 115.75 C 83.27 119.99 87.73 125.39 98.78 127.22 C 109.83 129.05 117.62 131.83 131.00 131.00 C 144.38 130.17 139.74 112.87 127.00 116.00 C 114.26 119.13 106.43 111.56 95.69 111.31 C 84.96 111.05 83.43 97.25 75.00 96.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#020202"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 31.00 179.00    C 30.93 180.84 30.17 182.82 30.00 184.00   C 30.26 197.74 26.99 210.60 26.00 224.00   C 29.33 224.00 32.67 224.00 36.00 224.00   C 37.49 220.47 35.35 210.41 41.00 211.00 C 46.65 211.59 53.89 209.81 59.00 211.00 C 64.11 212.19 72.06 208.24 76.00 211.00   C 79.09 213.16 75.76 220.77 77.00 224.00   C 80.00 224.00 83.00 224.00 86.00 224.00   C 86.37 212.16 84.61 197.52 88.00 188.00   C 88.67 184.81 87.50 181.23 88.00 178.00   C 72.33 178.00 56.67 178.00 41.00 178.00   C 41.54 150.70 39.67 123.98 35.00 98.00   C 31.47 97.52 28.28 98.57 25.00 99.00   C 29.62 124.94 32.09 151.67 31.00 179.00   M 39.00 203.00    C 38.33 197.73 40.52 193.25 40.00 188.00   C 52.00 188.00 64.00 188.00 76.00 188.00   C 76.90 188.63 80.08 204.64 75.74 205.74 C 71.40 206.85 60.37 205.89 55.00 206.00 C 49.63 206.11 39.61 207.75 39.00 203.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#797979"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 47.00 146.00    C 47.00 141.01 46.81 135.98 47.00 131.00   C 46.32 135.77 46.54 141.21 47.00 146.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#929292"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 170.00 131.00    C 161.74 135.09 147.84 128.11 139.00 131.00   C 139.19 132.76 150.15 132.17 154.00 132.00 C 157.85 131.83 166.83 133.29 170.00 131.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#030303"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 92.00 145.00    C 100.69 145.67 111.52 144.11 120.00 145.00 C 128.48 145.89 140.31 143.29 148.00 145.00 C 155.69 146.71 169.87 140.87 175.00 146.00   C 179.86 150.86 174.43 163.76 176.00 171.00 C 177.57 178.24 175.21 188.94 176.00 197.00 C 176.79 205.06 175.41 215.71 176.00 224.00   C 179.00 224.00 182.00 224.00 185.00 224.00   C 185.24 217.60 184.68 210.31 185.00 204.00 C 185.32 197.69 184.36 191.07 185.00 185.00 C 185.64 178.93 183.69 170.57 185.00 165.00 C 186.31 159.43 181.97 150.33 185.00 146.00   C 187.28 142.74 195.60 146.37 199.00 145.00   C 199.00 142.00 199.00 139.00 199.00 136.00   C 163.33 136.00 127.67 136.00 92.00 136.00   C 93.06 138.26 90.59 142.99 92.00 145.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#6F6F6F"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 175.00 146.00    C 169.87 140.87 155.69 146.71 148.00 145.00 C 140.31 143.29 128.48 145.89 120.00 145.00 C 111.52 144.11 100.69 145.67 92.00 145.00   C 94.89 149.13 106.55 144.79 112.00 146.00 C 117.45 147.21 126.72 145.44 133.00 146.00 C 139.28 146.56 147.38 145.71 154.00 146.00 C 160.62 146.29 168.28 145.78 175.00 146.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#6B6B6B"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 185.00 146.00    C 188.40 144.63 196.72 148.26 199.00 145.00   C 195.60 146.37 187.28 142.74 185.00 146.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#858585"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 176.00 224.00    C 175.41 215.71 176.79 205.06 176.00 197.00 C 175.21 188.94 177.57 178.24 176.00 171.00 C 174.43 163.76 179.86 150.86 175.00 146.00   C 175.19 152.40 174.75 159.69 175.00 166.00 C 175.25 172.31 174.52 180.01 175.00 186.00 C 175.48 191.99 173.96 200.79 175.00 206.00 C 176.04 211.21 172.10 221.27 176.00 224.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#717171"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 133.00 166.00    C 132.94 163.70 132.38 161.72 132.00 160.00   C 132.22 161.89 132.85 164.67 133.00 166.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#747474"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 88.00 188.00    C 88.69 186.07 90.52 179.77 88.00 178.00   C 87.50 181.23 88.67 184.81 88.00 188.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#757575"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 30.00 184.00    C 30.17 182.82 30.93 180.84 31.00 179.00   C 30.83 180.18 30.07 182.16 30.00 184.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#7B7B7B"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 135.00 187.00    C 134.92 185.11 134.23 183.30 134.00 182.00   C 134.12 183.75 134.84 185.84 135.00 187.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#F6F6F6"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 39.00 203.00    C 41.19 207.52 50.59 204.19 56.00 205.00 C 61.41 205.81 70.28 204.39 76.00 205.00   C 76.00 199.33 76.00 193.67 76.00 188.00   C 64.00 188.00 52.00 188.00 40.00 188.00   C 40.52 193.25 38.33 197.73 39.00 203.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#606060"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 39.00 203.00    C 39.61 207.75 49.63 206.11 55.00 206.00 C 60.37 205.89 71.40 206.85 75.74 205.74 C 80.08 204.64 76.90 188.63 76.00 188.00   C 76.00 193.67 76.00 199.33 76.00 205.00   C 70.28 204.39 61.41 205.81 56.00 205.00 C 50.59 204.19 41.19 207.52 39.00 203.00 Z"></path>
        </g>
        <g
          fill="None"
          fillOpacity="0.0"
          stroke="#5F5F5F"
          strokeOpacity="1.00"
          strokeWidth="0.3"
        >
          <path d="   M 77.00 224.00    C 75.76 220.77 79.09 213.16 76.00 211.00   C 77.24 214.23 73.91 221.84 77.00 224.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None"></g>
        <g fill="#3f3f3f" fillOpacity="1.00" stroke="None">
          <path d="   M 136.00 21.00    C 136.70 24.20 138.34 25.03 137.00 29.00   C 133.97 28.64 135.25 32.22 135.00 34.00   C 139.35 31.54 143.68 38.99 140.00 42.00   C 143.20 46.15 151.84 41.42 151.00 50.00   C 155.94 51.91 157.31 46.00 163.00 48.00   C 163.74 51.84 166.24 50.26 169.00 50.00   C 165.39 42.06 177.39 46.98 179.00 42.00   C 174.60 37.24 183.73 34.74 185.00 31.00   C 178.43 27.70 184.69 22.22 185.00 18.00   C 180.96 18.40 175.93 12.84 180.00 9.00   C 177.49 6.39 175.93 6.27 173.00 8.00   C 169.30 6.19 169.94 1.22 166.00 1.00   C 164.80 3.69 163.54 2.96 162.00 3.00   C 160.00 3.05 158.00 2.96 156.00 3.00   C 156.00 2.00 156.00 1.00 156.00 0.00   L 155.00 0.00   C 151.69 1.62 149.10 10.37 144.00 6.00   C 139.34 7.74 143.31 11.47 140.30 14.30 C 137.30 17.14 135.73 17.44 136.00 21.00   M 163.00 10.00    C 180.27 11.80 179.27 36.68 164.00 41.00   C 160.96 41.86 158.99 41.84 156.00 41.00   C 139.52 36.34 140.75 13.72 157.00 10.00   C 159.48 9.43 160.57 9.44 163.00 10.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 162.00 3.00    C 163.66 2.55 164.42 1.87 165.00 0.00   L 156.00 0.00   C 156.00 1.00 156.00 2.00 156.00 3.00   C 158.00 2.96 160.00 3.05 162.00 3.00 Z"></path>
        </g>
        <g fill="#606060" fillOpacity="1.00" stroke="None">
          <path d="   M 162.00 3.00    C 163.54 2.96 164.80 3.69 166.00 1.00   C 166.00 1.00 166.00 0.50 166.00 0.00   L 165.00 0.00   C 164.42 1.87 163.66 2.55 162.00 3.00 Z"></path>
        </g>
        <g fill="#757575" fillOpacity="1.00" stroke="None">
          <path d="   M 157.00 10.00    C 158.86 9.81 161.14 9.81 163.00 10.00   C 160.57 9.44 159.48 9.43 157.00 10.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 156.00 41.00    C 158.29 41.35 161.71 41.35 164.00 41.00   C 179.27 36.68 180.27 11.80 163.00 10.00   C 161.14 9.81 158.86 9.81 157.00 10.00   C 140.75 13.72 139.52 36.34 156.00 41.00 Z"></path>
        </g>
        <g fill="#7B7B7B" fillOpacity="1.00" stroke="None">
          <path d="   M 137.00 29.00    C 138.34 25.03 136.70 24.20 136.00 21.00   C 136.20 23.59 137.51 26.01 137.00 29.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 164.00 41.00    C 161.71 41.35 158.29 41.35 156.00 41.00   C 158.99 41.84 160.96 41.86 164.00 41.00 Z"></path>
        </g>
        <g fill="#ffdbac" fillOpacity="1.00" stroke="None">
          <path d="   M 75.00 64.00    C 74.83 65.91 74.86 68.09 75.00 70.00   C 79.67 94.85 115.06 92.23 116.00 67.00 C 116.93 41.78 77.15 39.36 75.00 64.00 Z"></path>
        </g>
        <g fill="#3f3f3f" fillOpacity="1.00" stroke="None">
          <path d="   M 169.00 71.00    C 171.53 70.17 172.78 72.48 174.00 74.00   C 173.92 75.45 174.07 76.86 175.00 78.00   C 177.47 74.92 180.48 77.53 182.00 80.00   C 185.31 76.99 188.22 78.30 192.00 78.00   C 190.07 74.02 195.69 73.52 198.00 73.00   C 196.92 70.35 196.59 67.18 200.00 66.00   C 198.76 63.03 197.12 60.25 199.00 57.00   C 195.53 56.12 193.88 53.16 193.00 50.00   C 190.44 51.09 187.35 50.89 186.00 48.00   C 182.46 49.03 179.59 50.27 176.00 49.00   C 176.83 53.41 172.52 53.70 170.00 54.00   C 171.55 57.16 170.83 61.11 167.00 62.00   C 169.22 64.42 171.24 66.92 169.00 71.00   M 186.00 54.00    C 196.83 55.26 196.78 73.23 184.98 73.98 C 173.17 74.72 169.45 58.07 181.00 54.00   C 183.34 53.18 183.75 53.36 186.00 54.00 Z"></path>
        </g>
        <g fill="#3f3f3f" fillOpacity="1.00" stroke="None">
          <path d="   M 147.00 50.00    C 143.26 51.19 140.59 55.58 136.00 52.00   C 135.03 55.81 132.39 60.14 128.00 58.00   C 128.67 61.11 129.95 67.46 125.00 67.00   C 124.14 71.27 130.57 74.15 126.00 78.00   C 129.08 80.31 133.74 82.43 133.00 87.00   C 136.61 85.98 140.85 86.07 142.00 90.00   C 145.84 89.00 149.40 85.03 153.00 89.00   C 153.31 83.01 158.12 82.87 162.00 81.00   C 159.30 79.01 160.03 73.22 164.00 74.00   C 164.09 69.48 159.09 65.76 163.00 62.00   C 159.34 61.27 154.90 58.03 157.00 54.00   C 153.50 53.36 148.58 55.69 147.00 50.00   M 149.00 58.00    C 163.79 61.66 156.25 87.90 140.93 82.07 C 125.60 76.25 132.62 53.94 149.00 58.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 181.00 54.00    C 182.44 53.75 184.54 53.83 186.00 54.00   C 183.75 53.36 183.34 53.18 181.00 54.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 186.00 54.00    C 184.54 53.83 182.44 53.75 181.00 54.00   C 169.45 58.07 173.17 74.72 184.98 73.98 C 196.78 73.23 196.83 55.26 186.00 54.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 149.00 58.00    C 132.62 53.94 125.60 76.25 140.93 82.07 C 156.25 87.90 163.79 61.66 149.00 58.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 75.00 70.00    C 74.86 68.09 74.83 65.91 75.00 64.00   C 74.52 66.35 74.55 67.61 75.00 70.00 Z"></path>
        </g>
        <g fill="#818181" fillOpacity="1.00" stroke="None">
          <path d="   M 174.00 74.00    C 172.78 72.48 171.53 70.17 169.00 71.00   C 170.29 72.40 172.45 72.47 174.00 74.00 Z"></path>
        </g>
        <g fill="#7ad07a" fillOpacity="1.00" stroke="None">
          <path d="   M 47.00 131.00    C 46.81 135.98 47.00 141.01 47.00 146.00   C 43.20 182.04 87.36 170.37 110.00 172.00   C 115.11 188.95 106.74 213.50 122.00 225.00   L 129.00 225.00   C 142.25 218.09 135.50 199.48 135.00 187.00   C 134.84 185.84 134.12 183.75 134.00 182.00   C 133.62 176.53 133.16 171.59 133.00 166.00   C 132.85 164.67 132.22 161.89 132.00 160.00   C 126.33 139.39 96.27 152.86 80.00 149.00   C 79.31 139.91 82.29 131.72 83.00 123.00   C 75.68 119.09 63.45 113.86 64.03 103.03 C 64.60 92.19 82.13 93.53 86.00 103.00   C 88.23 86.89 66.96 82.83 58.75 93.75 C 50.54 104.67 47.51 117.54 47.00 131.00 Z"></path>
        </g>
        <g fill="#3f3f3f" fillOpacity="1.00" stroke="None">
          <path d="   M 139.00 131.00    C 147.84 128.11 161.74 135.09 170.00 131.00   C 172.72 123.94 178.54 115.98 181.08 109.08 C 183.61 102.17 193.61 92.40 184.00 89.00   C 178.23 101.15 171.53 113.01 166.00 125.00   C 158.00 125.00 150.00 125.00 142.00 125.00   C 143.03 127.31 138.81 129.20 139.00 131.00 Z"></path>
        </g>
        <g fill="#ffdbac" fillOpacity="1.00" stroke="None">
          <path d="   M 75.00 96.00    C 62.41 94.13 65.24 111.50 74.25 115.75 C 83.27 119.99 87.73 125.39 98.78 127.22 C 109.83 129.05 117.62 131.83 131.00 131.00 C 144.38 130.17 139.74 112.87 127.00 116.00 C 114.26 119.13 106.43 111.56 95.69 111.31 C 84.96 111.05 83.43 97.25 75.00 96.00 Z"></path>
        </g>
        <g fill="#543315" fillOpacity="1.00" stroke="None">
          <path d="   M 31.00 179.00    C 30.93 180.84 30.17 182.82 30.00 184.00   C 30.26 197.74 26.99 210.60 26.00 224.00   C 29.33 224.00 32.67 224.00 36.00 224.00   C 37.49 220.47 35.35 210.41 41.00 211.00 C 46.65 211.59 53.89 209.81 59.00 211.00 C 64.11 212.19 72.06 208.24 76.00 211.00   C 79.09 213.16 75.76 220.77 77.00 224.00   C 80.00 224.00 83.00 224.00 86.00 224.00   C 86.37 212.16 84.61 197.52 88.00 188.00   C 88.67 184.81 87.50 181.23 88.00 178.00   C 72.33 178.00 56.67 178.00 41.00 178.00   C 41.54 150.70 39.67 123.98 35.00 98.00   C 31.47 97.52 28.28 98.57 25.00 99.00   C 29.62 124.94 32.09 151.67 31.00 179.00   M 39.00 203.00    C 38.33 197.73 40.52 193.25 40.00 188.00   C 52.00 188.00 64.00 188.00 76.00 188.00   C 76.90 188.63 80.08 204.64 75.74 205.74 C 71.40 206.85 60.37 205.89 55.00 206.00 C 49.63 206.11 39.61 207.75 39.00 203.00 Z"></path>
        </g>
        <g fill="#797979" fillOpacity="1.00" stroke="None">
          <path d="   M 47.00 146.00    C 47.00 141.01 46.81 135.98 47.00 131.00   C 46.32 135.77 46.54 141.21 47.00 146.00 Z"></path>
        </g>
        <g fill="#929292" fillOpacity="1.00" stroke="None">
          <path d="   M 170.00 131.00    C 161.74 135.09 147.84 128.11 139.00 131.00   C 139.19 132.76 150.15 132.17 154.00 132.00 C 157.85 131.83 166.83 133.29 170.00 131.00 Z"></path>
        </g>
        <g fill="#543315" fillOpacity="1.00" stroke="None">
          <path d="   M 92.00 145.00    C 100.69 145.67 111.52 144.11 120.00 145.00 C 128.48 145.89 140.31 143.29 148.00 145.00 C 155.69 146.71 169.87 140.87 175.00 146.00   C 179.86 150.86 174.43 163.76 176.00 171.00 C 177.57 178.24 175.21 188.94 176.00 197.00 C 176.79 205.06 175.41 215.71 176.00 224.00   C 179.00 224.00 182.00 224.00 185.00 224.00   C 185.24 217.60 184.68 210.31 185.00 204.00 C 185.32 197.69 184.36 191.07 185.00 185.00 C 185.64 178.93 183.69 170.57 185.00 165.00 C 186.31 159.43 181.97 150.33 185.00 146.00   C 187.28 142.74 195.60 146.37 199.00 145.00   C 199.00 142.00 199.00 139.00 199.00 136.00   C 163.33 136.00 127.67 136.00 92.00 136.00   C 93.06 138.26 90.59 142.99 92.00 145.00 Z"></path>
        </g>
        <g fill="#6F6F6F" fillOpacity="1.00" stroke="None">
          <path d="   M 175.00 146.00    C 169.87 140.87 155.69 146.71 148.00 145.00 C 140.31 143.29 128.48 145.89 120.00 145.00 C 111.52 144.11 100.69 145.67 92.00 145.00   C 94.89 149.13 106.55 144.79 112.00 146.00 C 117.45 147.21 126.72 145.44 133.00 146.00 C 139.28 146.56 147.38 145.71 154.00 146.00 C 160.62 146.29 168.28 145.78 175.00 146.00 Z"></path>
        </g>
        <g fill="#6B6B6B" fillOpacity="1.00" stroke="None">
          <path d="   M 185.00 146.00    C 188.40 144.63 196.72 148.26 199.00 145.00   C 195.60 146.37 187.28 142.74 185.00 146.00 Z"></path>
        </g>
        <g fill="#858585" fillOpacity="1.00" stroke="None">
          <path d="   M 176.00 224.00    C 175.41 215.71 176.79 205.06 176.00 197.00 C 175.21 188.94 177.57 178.24 176.00 171.00 C 174.43 163.76 179.86 150.86 175.00 146.00   C 175.19 152.40 174.75 159.69 175.00 166.00 C 175.25 172.31 174.52 180.01 175.00 186.00 C 175.48 191.99 173.96 200.79 175.00 206.00 C 176.04 211.21 172.10 221.27 176.00 224.00 Z"></path>
        </g>
        <g fill="#717171" fillOpacity="1.00" stroke="None">
          <path d="   M 133.00 166.00    C 132.94 163.70 132.38 161.72 132.00 160.00   C 132.22 161.89 132.85 164.67 133.00 166.00 Z"></path>
        </g>
        <g fill="#747474" fillOpacity="1.00" stroke="None">
          <path d="   M 88.00 188.00    C 88.69 186.07 90.52 179.77 88.00 178.00   C 87.50 181.23 88.67 184.81 88.00 188.00 Z"></path>
        </g>
        <g fill="#757575" fillOpacity="1.00" stroke="None">
          <path d="   M 30.00 184.00    C 30.17 182.82 30.93 180.84 31.00 179.00   C 30.83 180.18 30.07 182.16 30.00 184.00 Z"></path>
        </g>
        <g fill="#7B7B7B" fillOpacity="1.00" stroke="None">
          <path d="   M 135.00 187.00    C 134.92 185.11 134.23 183.30 134.00 182.00   C 134.12 183.75 134.84 185.84 135.00 187.00 Z"></path>
        </g>
        <g fill="None" fillOpacity="1.00" stroke="None">
          <path d="   M 39.00 203.00    C 41.19 207.52 50.59 204.19 56.00 205.00 C 61.41 205.81 70.28 204.39 76.00 205.00   C 76.00 199.33 76.00 193.67 76.00 188.00   C 64.00 188.00 52.00 188.00 40.00 188.00   C 40.52 193.25 38.33 197.73 39.00 203.00 Z"></path>
        </g>
        <g fill="#606060" fillOpacity="1.00" stroke="None">
          <path d="   M 39.00 203.00    C 39.61 207.75 49.63 206.11 55.00 206.00 C 60.37 205.89 71.40 206.85 75.74 205.74 C 80.08 204.64 76.90 188.63 76.00 188.00   C 76.00 193.67 76.00 199.33 76.00 205.00   C 70.28 204.39 61.41 205.81 56.00 205.00 C 50.59 204.19 41.19 207.52 39.00 203.00 Z"></path>
        </g>
        <g fill="#5F5F5F" fillOpacity="1.00" stroke="None">
          <path d="   M 77.00 224.00    C 75.76 220.77 79.09 213.16 76.00 211.00   C 77.24 214.23 73.91 221.84 77.00 224.00 Z"></path>
        </g>
      </svg>
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 my-10 ">
        
      </div>
        <div className="text-white container mx-auto pb-20 pt-14 flex flex-col items-center justify-center" >
          <h1 className="text-3xl font-bold text-center mb-14">Learn more about us</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-9TnywT8szQ?si=pBuhWF7OoSi97fYV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    </>
  );
}
