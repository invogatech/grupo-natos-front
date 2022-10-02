import Logo from "@public/assets/LogoNatos.svg";
import NoticiasIcon from "@public/assets/noticias.svg";
import NotificacoesIcon from "@public/assets/notificacoes.svg";
import EmpreendimentoIcon from "@public/assets/empreendimento.svg";
import BoletosIcon from "@public/assets/boletos.svg";
import ExtratosIcon from "@public/assets/extratos.svg";
import PendenciasIcon from "@public/assets/pendencias.svg";
import { MenuContainer, MenuItem, Overlay, SideBarContainer, Wrapper } from "./sideBarStyle";
import useSideBarStore from "@stores/sideBar";

export default function SideBarComponent() {
  const isSidebarOpen = useSideBarStore((state) => state.isSideBarOpen);
  const toggleSideBar = useSideBarStore((state) => state.toggleSideBar);
  const currentPage = useSideBarStore((state) => state.currentPage);
  const setCurrentPage = useSideBarStore((state) => state.setCurrentPage);

  const menuItems = [
    {
      name: "Notícias",
      icon: <NoticiasIcon className="icon"/>,
    },
    {
      name: "Notificações",
      icon: <NotificacoesIcon className="icon"/>,
    },
    {
      name: "Empreendimento",
      icon: <EmpreendimentoIcon className="icon"/>,
    },
    {
      name: "Boletos",
      icon: <BoletosIcon className="icon"/>,
    },
    {
      name: "Extratos",
      icon: <ExtratosIcon className="icon"/>,
    },
    {
      name: "Pendências",
      icon: <PendenciasIcon className="icon"/>,
    },
  ];

  return (
    <Wrapper  className={isSidebarOpen ? "open" : "closed"} >
      <SideBarContainer>
        <Logo className="logo"/>
        <MenuContainer>
          <p>MENU</p>
          {menuItems.map((item) => (
            <MenuItem key={Math.random()} className={currentPage == item.name ? "active" : "deactive" }>
              <div className="item-information" onClick={() => setCurrentPage(item.name)}>
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