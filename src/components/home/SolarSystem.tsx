import styles from '../../styles/SolarSystem.module.css'

export default function SolarSystem() {
  return (
    <>
      <div className={`${styles.sun} ${styles.sphere}`}></div>
      <div className={`${styles.mercury} ${styles.sphere}`}></div>
      <div className={`${styles.venus} ${styles.sphere}`}></div>
      <div className={`${styles.earth} ${styles.sphere}`}>
        <div className={`${styles.earthCloud} ${styles.sphere}`}></div>
      </div>
      <div className={`${styles.mars} ${styles.sphere}`}></div>
      <div className={`${styles.jupiter} ${styles.sphere}`}></div>
      <div className={`${styles.saturn} ${styles.sphere}`}></div>
      <div className={`${styles.uranus} ${styles.sphere}`}></div>
      <div className={`${styles.neptune} ${styles.sphere}`}></div>
    </>
  )
}