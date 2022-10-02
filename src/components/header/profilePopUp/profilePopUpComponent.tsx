import LogoutIcon from '@public/assets/Logout.svg';
import { Container, LogOutButton } from './profilePopUpStyle';

export default function ProfilePopUpComponent() {
  return (
    <Container>
      <div className="edit-profile-section">
        <p>Editar Perfil</p>
      </div>
      <LogOutButton>
        <LogoutIcon className="icon"/>
        <p>Sair</p>
      </LogOutButton>
    </Container>
  )
}