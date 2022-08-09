import React from 'react'

import styles from './index.module.scss'

export default function Index() {
  return (
    <div className={styles.page}>
        <div>Thư tình gửi một người</div>
        <div>Nhạc</div>
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