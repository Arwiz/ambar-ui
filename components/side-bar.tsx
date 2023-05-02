import Link from "next/link";
import { ArticleIcon, CollapsIcon, HomeIcon, LogoIcon, LogoutIcon, UsersIcon, VideosIcon } from "../icons";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";


const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Manage Posts", icon: ArticleIcon, link: "/posts" },
  { id: 3, label: "Manage Users", icon: UsersIcon, link: "/users" },
  { id: 4, label: "Manage Tutorials", icon: VideosIcon, link: "/tutorials" },
];

function SideBar() {
  const [toggleOn, setToggleOn] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);


  const wrapperClasses = classNames(" h-screen px-4 pt-8 pb-4 flex justify-between flex-col borde border-dashed  bg-slate-400", {
    ["w-80"]: !toggleOn,
    ["w-20"]: toggleOn
  });

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleOn,
    }
  );

  const getNavItemClasses = (menu: any) => {
    return classNames(
      "flex  flex-row items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap py-5 ",
      {
        ["bg-light-lighter"]: activeMenu?.id === menu.id,
      }
    );
  };

  

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleOn(!toggleOn);
  };




  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  
return (
  <div
  className={wrapperClasses}
  onMouseEnter={onMouseOver}
  onMouseLeave={onMouseOver}
  style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
>
  <div className="flex flex-col">
    <div className="flex items-center justify-between relative">
      <div className="flex items-center pl-1 gap-4">
        <LogoIcon />
        <span
          className={classNames("mt-2 text-lg font-medium text-text", {
            hidden: toggleOn,
          })}
        >
          Logo
        </span>
      </div>
      {isCollapsible && (
        <button
          className={collapseIconClasses}
          onClick={handleSidebarToggle}
        >
          <CollapsIcon />
        </button>
      )}
    </div>

    <div className="flex flex-col items-start mt-24">
      {menuItems.map(({ icon: Icon, ...menu}) => {
        const classes = getNavItemClasses(menu);
        return (
          <div className={classes}>
            <Link href={menu.link}>
              <div className=" flex flex-row">
                <div style={{ width: "2.5rem" }}>
                  <Icon toggleOn={toggleOn}/>
                </div>
                {!toggleOn && (
                  <span
                    className={classNames(
                      "text-md font-medium text-text-light"
                    )}
                  >
                  {menu.label}
                  </span>
                )}
                </div>
            </Link>
          </div>
        );
      })}
    </div>
  </div>

  <div className={`${getNavItemClasses({})} px-3 py-4`}>
    <div style={{ width: "2.5rem" }}>
      <LogoutIcon  toggleOn={toggleOn}/>
    </div>
    {!toggleOn && (
      <span className={classNames("text-md font-medium text-text-light")}>
        Logout
      </span>
    )}
  </div>
</div>
)};

export default SideBar;

