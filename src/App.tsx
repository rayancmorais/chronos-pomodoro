import {Container} from './components/Container';
import {CountDown} from './components/CountDown';
import {Logo} from './components/Logo';
import {Menu} from './components/Menu';
import {DefaultInput} from './components/DefaultInput';

import './styles/global.css';
import './styles/theme.css';
import {Cycles} from './components/Cycles';
import {PlayCircleIcon, StopCircleIcon} from 'lucide-react';
import {DefaultButton} from './components/DefaultButton';

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
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              labelText='task'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>
          
          <div className='formRow'>
            <button>Enviar</button>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
            <DefaultButton icon={<StopCircleIcon />} color='red' />
          </div>
        </form>
      </Container>
    </>
  );
}
