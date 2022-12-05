import styles from './three.module.css';
import { four } from '@eitwo/four';

/* eslint-disable-next-line */
export interface ThreeProps {}

export function Three(props: ThreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Three!</h1>
      <p>Text from library four: {four()}</p>
    </div>
  );
}

export default Three;
