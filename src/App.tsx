import {Heading} from './components/Heading';
import './styles/global.css';
import './styles/theme.css';
import {TimerIcon} from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá world 1
        <button>
          <TimerIcon />
        </button>
      </Heading>

      <p>
        Duis quis sit nostrud eu eu ad aute cupidatat sunt sit voluptate duis.
        Nostrud commodo dolor duis est. Laborum aliqua ut veniam et.
        Non eu est aliqua nostrud in esse dolore ex amet. 
        Aute esse consequat est adipisicing amet sit laborum commodo eiusmod
        eu consequat ut laborum quis.
      </p>
    </>
  );
}
