import { Button, Input } from "@styles/globals";
import { Container, Footer, Form, Header } from "./signInStyle";

export default function SignInComponent() {
  return (
    <Container>
        <Header>
          <h1>Olá, cliente Natos!</h1>
          <p>O Portal do cliente é um espaço criado para você que adquiriu seu apartamento de lazer compartilhado.</p>
        </Header>

        <Form>
          <section className="inputs">
            <Input type="text" placeholder="E-mail" />
            <Input type="password" placeholder="Senha" />
          </section>

          <section className="second-section">
            <p>Esqueceu a senha?</p>
            <Button type="submit">Entrar</Button>
          </section>
        </Form>

      <Footer>
        <p>Não tem uma conta?</p><a href="#">Registrar</a>
      </Footer>
    </Container>
  ) 
}