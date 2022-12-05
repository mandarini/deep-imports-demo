// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { five } from '@eitwo/five';
import { four } from '@eitwo/four';
import { One } from '@eitwo/one';
import { Three } from '@eitwo/three';
import { Two } from '@eitwo/two';

export function App() {
  return (
    <>
      <div />
      <One />
      <Two />
      <Three />
      <p>Text from four: {four()}</p>
      <p>Text from five: {five()}</p>
    </>
  );
}

export default App;
