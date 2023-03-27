import styles from '@/styles/Planet.module.css'

export default function Planet() {
  return (
    <>
      <div className={`${styles.earth} ${styles.sphere}`}>
        <div className={`${styles.earthCloud} ${styles.sphere}`}></div>
      </div>
    </>
  )
}