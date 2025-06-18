import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';


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
						<label htmlFor='input'>Task</label>
						<input id='input' type='text' />
					</div>

					<div className='formRow'>
						<p>Descanse por 10 min</p>
					</div>

					<div className='formRow'>
						<p>Períodos</p>
						<p> 0 0 0 0 0 0</p>
					</div>

					<div className='formRow'>
						<button>Registrar</button>
					</div>
				</form>
			</Container>
   		</>
	);
     
}
