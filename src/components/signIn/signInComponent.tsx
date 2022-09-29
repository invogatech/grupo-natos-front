import { Button, Input, Paragraph, Title } from "@styles/globals";
import { SignUpSection, Footer, Form, Header, Explanation, Wrapper, Container } from "./signInStyle";

export default function SignInComponent() {
  return (
    <Wrapper>
      <Container>
        <SignUpSection>
            <Header>
              <Title>Olá, cliente Natos!</Title>
              <Paragraph>O Portal do cliente é um espaço criado para você que adquiriu seu apartamento de lazer compartilhado.</Paragraph>
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
        </SignUpSection>
        <Explanation>
          <Title>Já é cliente mas é seu primeiro acesso?</Title>
          <section className="texts">
            <Paragraph>Siga o link abaixo e faça seu cadastro com senha para acessar sua área restrita em nosso portal!</Paragraph>
            <Paragraph>&ldquo;Ao encaminhar minhas informações, declaro estar ciente que meus dados pessoais serão tratados conforme a Política de Privacidade.&rdquo;</Paragraph>
          </section>
        </Explanation>
      </Container>
    </Wrapper>
  ) 
}