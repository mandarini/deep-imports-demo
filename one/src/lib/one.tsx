import styles from './one.module.css';
import { Two } from '@eitwo/two';

/* eslint-disable-next-line */
export interface OneProps {}

export function One(props: OneProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to One!</h1>
      <Two />
    </div>
  );
}

export default One;
