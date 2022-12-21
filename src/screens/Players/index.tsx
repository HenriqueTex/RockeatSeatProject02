import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Container, Form } from "./styles";
import { Input } from "@components/input";
import { ButtonIcon } from "@components/buttonIcon";

export function Players() {
	return(
	<Container>
		<Header showBackButton/>
		
		<Highlight
			title="Jogadores"
			subtitle="Adicione a galera. "
		
		/>
		
		<Form>
			<Input  placeholder="Nome da Pessoa"/>
			<ButtonIcon icon="add"/>
		</Form>
	</Container>
	)

}