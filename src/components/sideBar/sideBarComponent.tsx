import Logo from "@public/assets/LogoNatos.svg";
import NoticiasIcon from "@public/assets/noticias.svg";
import NotificacoesIcon from "@public/assets/notificacoes.svg";
import EmpreendimentoIcon from "@public/assets/empreendimento.svg";
import BoletosIcon from "@public/assets/boletos.svg";
import ExtratosIcon from "@public/assets/extratos.svg";
import PendenciasIcon from "@public/assets/pendencias.svg";
import { MenuContainer, MenuItem, Overlay, SideBarContainer, Wrapper } from "./sideBarStyle";
import useSideBarStore from "@stores/sideBar";
import { useRouter } from "next/router";

export default function SideBarComponent() {
  const isSidebarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);
  const currentPage = useSideBarStore((state) => state.currentPage);

  const router = useRouter();

  const menuItems = [
    {
      id: "noticias",
      name: "Notícias",
      icon: <NoticiasIcon className="icon"/>,
    },
    {
      id: "notificacoes",
      name: "Notificações",
      icon: <NotificacoesIcon className="icon"/>,
    },
    {
      id: "empreendimento",
      name: "Empreendimento",
      icon: <EmpreendimentoIcon className="icon"/>,
    },
    {
      id: "boletos",
      name: "Boletos",
      icon: <BoletosIcon className="icon"/>,
    },
    {
      id: "extratos",
      name: "Extratos",
      icon: <ExtratosIcon className="icon"/>,
    },
    {
      id: "pendencias",
      name: "Pendências",
      icon: <PendenciasIcon className="icon"/>,
    },
  ];

  const handleChangePage = (page: string) => {
    router.push(`/${page}`);
    toggleSideBar();
  };

  return (
    <Wrapper className={isSidebarOpen ? "open" : "closed"} >
      <SideBarContainer className={isSidebarOpen ? "open" : "closed"}>
        <Logo className="logo"/>
        <MenuContainer>
          <p>MENU</p>
          {menuItems.map((item) => (
            <MenuItem key={Math.random()} className={currentPage == item.id ? "active" : "deactive" } onClick={() => handleChangePage(item.id)}>
              <div className="item-information">
                <div className="active-marker"></div>
                {item.icon}
                <p unselectable="on">{item.name}</p>
              </div>
            </MenuItem>
          ))}
        </MenuContainer>
      </SideBarContainer>
      <Overlay  className={isSidebarOpen ? "open" : "closed"} onClick={() => toggleSideBar()}/>
    </Wrapper>
  );
}