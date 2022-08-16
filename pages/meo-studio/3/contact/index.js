import React from 'react'
import styles from './index.module.scss'

export default function Index() {
  return (
    <div className={styles.page}>
        <div className={styles.content}>
            <div className={styles.container}>Cục gì đó</div>
            <div>Châm ngôn Trịnh</div>
        </div>
        <div className={styles.footer}>
            <div>About us</div>
            <div>Contact us</div>
            <div>Stick</div>
            <div>Đăng nhập đăng ký</div>
        </div>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
    return (
      <>
        {page}
      </>
    )
  }