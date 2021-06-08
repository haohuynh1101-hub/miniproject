import React, { useState } from "react";
import {
  CEOIcon,
  ManagerIcon,
  TeamIcon,
  BusinessIcon,
  CustomerSupportIcon,
} from "component";
import Link from "next/link";
const listSideBar = [
  {
    title: "CEO",
    icon: <CEOIcon />,
    url: "/dashboard/CEO",
  },
  {
    title: "Manager",
    icon: <ManagerIcon />,
    submenu: [
      {
        title: "Business",
        icon: <BusinessIcon />,
        url: "/dashboard/Manager/Business",
      },
      {
        title: "CS",
        icon: <CustomerSupportIcon />,
        url: "/dashboard/Manager/CS",
      },
    ],
  },
  {
    title: "Team",
    icon: <TeamIcon />,
    url: "/dashboard/Team",
  },
];
function Sidebar() {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  return (
    <>
      <div className="bg-gray-800 text-blue-100 h-screen space-y-6 py-7 px-1 ">
        {/* logo  */}

        <a
          href=""
          className="flex items-center justify-center space-x-2 text-white"
        >
          <img
            className="object-contain h-12  rounded-full"
            src="https://via.placeholder.com/150x150"
          />
          <span className="text-2xl font-extrabold">LOGO</span>
        </a>
        {/* search */}
        <div className="pt-2 relative mx-auto text-gray-600 flex justify-center">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 w-full rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute  right-0 top-0 mt-4 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {/* nav */}
        <nav>
          {listSideBar.map((sideBar, index) => {
            if (sideBar.url) {
              return (
                <Link key={index} href={sideBar.url}>
                  <a className="block py-2 px-4 flex items-center transition duration-200 hover:bg-gray-700 rounded justify-between">
                    <div className="flex items-center">
                      <a className="text-white">{sideBar.icon}</a>
                      <span className="text-base text-white mx-1">
                        {sideBar.title}
                      </span>
                    </div>
                    {sideBar.submenu ? (
                      openSubmenu ? (
                        <a onClick={() => setOpenSubmenu(false)}>
                          <div className="transition duration-500 ease-in-out transform -rotate-90">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </div>
                        </a>
                      ) : (
                        <a onClick={() => setOpenSubmenu(true)}>
                          <div className="transition duration-500 ease-in-out transform rotate-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </div>
                        </a>
                      )
                    ) : (
                      ""
                    )}
                  </a>
                </Link>
              );
            } else {
              return (
                <div>
                  <a className="block py-2 px-4 flex items-center transition duration-200 hover:bg-gray-700 rounded justify-between">
                    <div className="flex items-center">
                      <a className="text-white">{sideBar.icon}</a>
                      <span className="text-base text-white mx-1">
                        {sideBar.title}
                      </span>
                    </div>
                    {sideBar.submenu ? (
                      openSubmenu ? (
                        <a onClick={() => setOpenSubmenu(false)}>
                          <div className="transition duration-500 ease-in-out transform -rotate-90">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </div>
                        </a>
                      ) : (
                        <a onClick={() => setOpenSubmenu(true)}>
                          <div className="transition duration-500 ease-in-out transform rotate-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </div>
                        </a>
                      )
                    ) : (
                      ""
                    )}
                  </a>
                  {sideBar.submenu ? (
                    openSubmenu ? (
                      <div className="transition duration-500 ease-in-out transform">
                        {sideBar.submenu.map((menu, index) => (
                          <Link key={index} href={menu.url}>
                            <a className=" block py-2 px-8 flex items-center transition duration-200 hover:bg-gray-700 rounded justify-between ">
                              <div className="flex items-center">
                                <a className="text-white">{menu.icon}</a>
                                <span className="text-base text-white mx-1">
                                  {menu.title}
                                </span>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </div>
              );
            }
          })}
        </nav>
      </div>
    </>
  );
}
const renderSubmenu = () => {};
export { Sidebar };
