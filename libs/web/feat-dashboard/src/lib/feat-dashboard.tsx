import styles from './feat-dashboard.module.css';

/* eslint-disable-next-line */
export interface FeatDashboardProps {}

export function FeatDashboard(props: FeatDashboardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatDashboard!</h1>
    </div>
  );
}

export default FeatDashboard;
