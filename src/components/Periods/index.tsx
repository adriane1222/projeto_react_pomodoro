import styles from './styles.module.css'

export function Periods() {
    return  (
        <div className={styles.periods}>
            <span>Períodos:</span>

            <div className={styles.periodsDots}>
                <span className={`${styles.periodsDot} ${styles.workPeriodDot}`}></span>
                <span className={`${styles.periodsDot} ${styles.shortBreakPeriodDot}`}></span>
                <span className={`${styles.periodsDot} ${styles.workPeriodDot}`}></span>
                <span className={`${styles.periodsDot} ${styles.shortBreakPeriodDot}`}></span>
                <span className={`${styles.periodsDot} ${styles.workPeriodDot}`}></span>
                <span className={`${styles.periodsDot} ${styles.shortBreakPeriodDot}`}></span>
                <span className={`${styles.periodsDot} ${styles.workPeriodDot}`}></span>
                <span className={`${styles.periodsDot} ${styles.longBreakPeriodDot}`}></span>
            </div>
        </div>
        
    )
}