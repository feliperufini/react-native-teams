import { Container, Content, Icon } from './styles'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

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
        <Input placeholder="Nome da equipe" style={{ marginBottom: 20 }} />
        <Button title="Criar" />
      </Content>
    </Container>
  )
}
