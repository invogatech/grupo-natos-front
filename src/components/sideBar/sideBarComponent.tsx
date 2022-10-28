import Logo from "@public/assets/LogoNatos.svg";
import NoticiasIcon from "@public/assets/noticias.svg";
import NotificacoesIcon from "@public/assets/notificacoes.svg";
import EmpreendimentoIcon from "@public/assets/empreendimento.svg";
import BoletosIcon from "@public/assets/boletos.svg";
import ExtratosIcon from "@public/assets/extratos.svg";
import PendenciasIcon from "@public/assets/pendencias.svg";
import { AiOutlineDoubleRight } from "react-icons/ai"
import { Sidebar } from "./sideBarStyle";
import useSideBarStore from "@stores/sideBar";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";

export default function SideBarComponent() {
  const isSidebarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);
  const closeSideBar = useSideBarStore((state) => state.closeSideBar);
  const currentPage = useSideBarStore((state) => state.currentPage);
  const [ isZero, setIsZero ] = useState(false)

  const [ screenWidth, setScreenWidth ] = useState(0)

  const router = useRouter();

  const menuItems = [
    {
      id: "noticias",
      name: "Notícias",
      icon: <NoticiasIcon className="item-icon"/>,
    },
    {
      id: "notificacoes",
      name: "Notificações",
      icon: <NotificacoesIcon className="item-icon"/>,
    },
    {
      id: "empreendimento",
      name: "Empreendimento",
      icon: <EmpreendimentoIcon className="item-icon"/>,
    },
    {
      id: "boletos",
      name: "Boletos",
      icon: <BoletosIcon className="item-icon"/>,
    },
    {
      id: "extratos",
      name: "Extratos",
      icon: <ExtratosIcon className="item-icon"/>,
    },
    {
      id: "pendencias",
      name: "Pendências",
      icon: <PendenciasIcon className="item-icon"/>,
    },
  ];

  useEffect(() => {  
    setScreenWidth(window.innerWidth)
  }, [])

  const handleChangePage = (page: string) => {
    router.push(`/${page}`);

    if (isSidebarOpen && screenWidth <= 768) {
      closeSideBar();
    }
  };

  const sideBarRef = useRef<any>(null)

  const handleClickOutside = (event: any) => { 
    if (screenWidth == 0) {
      
    }

    if (screenWidth <= 768) {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        event.preventDefault();
        closeSideBar()
      }
    } else {
      console.log("não fechar")
    }
  }

  useEffect(() => {
    if (screenWidth <= 768 && isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }
  }, [isSidebarOpen])

  return (
    <Sidebar className={isSidebarOpen ? "open" : "closed"} id="sidebar" ref={sideBarRef}>
      <div className="logo-details">
        <Logo className={`logo ${isSidebarOpen ? "open" : "closed"}`}/>
        <AiOutlineDoubleRight className={`toggle-icon ${isSidebarOpen ? "open" : "closed"}`} onClick={() => toggleSideBar()} />
      </div>
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`nav-item ${currentPage === item.id ? "active" : ""}`}
            onClick={() => handleChangePage(item.id)}
          >
            <div className="item-information">
              <section className="icon-section">{item.icon}</section>
              <span className="item-name">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </Sidebar>
  );
}