import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState({});

  const handleOpen = (id) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const isActive = (pathname) => {
    return router.pathname === pathname ? "active" : "";
  };

  return (
    <div className={`navmain ${isOpen["menu"] ? "bgwhite" : ""} `}>
      <button className="responsiveMenu" onClick={() => handleOpen("menu")}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <nav className={`${isOpen["menu"] ? "menuOpen" : ""}`}>
        <Link href="/">
          {" "}
          {/* <svg className="navLogo" src={logo} alt="logo"></svg>{" "} */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            viewBox="0 0 174 164"
            className="navLogo"
          >
            <path fill="#000" d="M48 163V30h29v133H48Z" />
            <path
              fill="#000"
              fill-rule="evenodd"
              d="M174 62.5c0 34.518-28.206 62.5-63 62.5S48 97.018 48 62.5 76.206 0 111 0c27.179 0 50.338 17.074 59.173 41A61.925 61.925 0 0 1 174 62.5Zm-42-.5c0 11.598-9.402 21-21 21H69V41h42c11.598 0 21 9.402 21 21Z"
            />
            <path fill="#000" d="M54 96h64v29H54z" />
            <path fill="#000" d="M54 96h64v29H54z" />
            <path
              fill="#000"
            
              d="M129.466 163.381h30.861L129.251 78 102 87.919l27.466 75.462Z"
            />
            <path fill="#0F5971" d="M48 163V0h29v163z" className="bar"/>
            <path fill="#000" d="M0 0h48v41H0zm48 0h64v41H48z" />
          </svg>
        </Link>{" "}
        <Link
          href="/"
          className={`${isActive("/")} accueilName ${
            isOpen["menu"] ? "accueilVisible" : ""
          }`}
        >
          {" "}
          Accueil{" "}
        </Link>{" "}
        <Link href="/pages/page-info" className={isActive("/pages/page-info")}>
          {" "}
          Infos{" "}
        </Link>{" "}
        <Link
          href="/pages/page-project"
          className={isActive("/pages/page-project")}
        >
          {" "}
          Projets{" "}
        </Link>{" "}
        <Link href="/pages/page-contact"> Contact </Link>{" "}
      </nav>
    </div>
  );
}

{
  /* <Link
href="/pages/page-contact"
className={router.pathname == "/" ? "active" : "activeNav"}
> */
}
