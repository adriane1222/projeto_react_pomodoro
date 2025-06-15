//PascalCase
//ExemploDeComponente
import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading'
import './styles/global.css'
import './styles/theme.css'


export function App() {
    return (
        <> 
           <Heading>
                Olá mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est ea saepe quasi ad error at? Exercitationem, consequatur iusto! Quisquam qui, voluptatum tempore earum in
                optio vero ad velit tempora?
            </p>
        </>
    ); // com fragment ou < > </> vazio
}
