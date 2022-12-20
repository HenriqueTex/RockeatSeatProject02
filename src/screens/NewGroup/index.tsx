import { Header } from "@components/header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/highlight";
import { Button } from "@components/button";
import { Input } from "@components/input";

export function NewGroup(){
return (
	<Container>
		<Header showBackButton/>
		
		<Content>
			<Icon/>
			<Highlight
				title="Nova turma"
				subtitle="Crie uma nova turma para adicionar as pessoas"
				/>
				<Input placeholder="Nome da turma"/>
			<Button title="Criar"/>
		</Content>
	</Container>
)
}