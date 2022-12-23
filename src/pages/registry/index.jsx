import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input'

import { Column, Container, CriarText, EsqueciText, Row, SubtitleRegistry, TextoBasico, Title, TitleRegistry, Wrapper } from './styles';
const Registry = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                A plataforma para você aprender com experts, dominar as principais 
                tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleRegistry>Comece agora grátis</TitleRegistry>
                    <SubtitleRegistry>Crie sua conta e make the change._</SubtitleRegistry>
                    <form>
                        <Input placeHolder="Nome Completo" leftIcon={<MdPerson />} />
                        <Input placeHolder="E-mail" leftIcon={<MdEmail />} />
                        <Input placeHolder="Senha" type="password" leftIcon={<MdLock />} />
                        <Button title="Criar conta" variant="secondary" onClick={handleClickSignIn} type="button" />
                    </form>
                    <Row>
                        <TextoBasico>
                            Ao clicar em "criar minha conta grátis", declaro que 
                            aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </TextoBasico>
                    </Row>
                    <Row>
                        <TextoBasico>Já tenho conta. </TextoBasico>
                        
                        <CriarText>Fazer login </CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Registry }