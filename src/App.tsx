import { SaveIcon } from 'lucide-react';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Periods } from './components/Periods';
import { Footer } from './components/Footer';

import './styles/global.css';
import './styles/theme.css';

export function App() {
   return (
		<>   
	 		<Container>
				<Logo />
			</Container>

      		<Container>
				<Menu />
			</Container>
   
     		<Container>
				<CountDown />
			</Container>

			<Container>
				<form className='form' action="">
					<div className='formRow'>
						<Input 
						labelText='Preencha a tarefa' 
						id='input' type='text' 
						placeholder='Digite a tarefa' />
					</div>

					<div className='formRow'>
						<p>Descanse por 10 min</p>
					</div>

					<div className='formRow'>
						<Periods/>
					</div>

					<div className='formRow'>
						<Button icon={<SaveIcon />} />
					</div>
				</form>
			</Container>

			<Container>
				<Footer />
			</Container>
   		</>
	);
     
}
