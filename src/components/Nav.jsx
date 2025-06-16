import { Link } from "react-router";

function Nav() {
  return (
    <div>
      <nav className="bg-black stickey z-50 top-0 left-0 right-0">
        <div className="flex lex-wrap justify-between items-center p-4  ">
          <Link to={"/"}>
            <div className="flex justify-center itmes-center my-2 ">
              <h1 className="text-white text-2xl">MovieHub</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path d="m20,3H4c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2V5c0-1.1-.9-2-2-2Zm-10.46,6l-2.67-4h2.6l2.67,4h-2.6Zm5,0l-2.67-4h2.6l2.67,4h-2.6ZM4,5h.46l2.67,4h-3.13v-4Zm0,14v-8h16v-2h-.46l-2.67-4h3.13v14H4Z"></path>
                <path d="M10 18L15 15 10 12 10 18z"></path>
              </svg>
            </div>
          </Link>
          <div className="flex gap-4 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill={"#ffffff"}
              viewBox="0 0 24 24"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            >
              {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
              <path d="M3 11h10v2H3zM3 6h14v2H3zM3 16h10v2H3zM15 20l6-4-6-4z"></path>
            </svg>

            <Link to={"/Search"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill={"#ffffff"}
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              >
                {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
                <path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
