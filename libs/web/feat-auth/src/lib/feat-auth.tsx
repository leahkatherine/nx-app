import styles from './feat-auth.module.css';

/* eslint-disable-next-line */
export interface FeatAuthProps {}

export function FeatAuth(props: FeatAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatAuth!</h1>
    </div>
  );
}

export default FeatAuth;
