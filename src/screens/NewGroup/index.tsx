import { Container, Content, Icon } from './styles'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { Button } from '../../components/Button'

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova equipe"
          subtitle="Crie a equipe para adicionar novas pessoas"
        />
        <Button title="Criar" />
      </Content>
    </Container>
  )
}
