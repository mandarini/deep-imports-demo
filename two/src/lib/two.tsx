import styles from './two.module.css';
import { Three } from '@eitwo/three';

/* eslint-disable-next-line */
export interface TwoProps {}

export function Two(props: TwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Two!</h1>
      <Three />
    </div>
  );
}

export default Two;
