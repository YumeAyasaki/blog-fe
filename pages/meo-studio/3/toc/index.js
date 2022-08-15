import React from 'react'
import Stick from '../../components/stick'
import Image from 'next/image'

import styles from './index.module.scss'

export default function Index() {
  return (
    <div className={styles.page}>
        <Stick />
        <div>
            <div className={styles.title}>Cảm</div>
            <div className={styles.content}>
                <div>
                    <div style={{position: 'relative', width: '27.75rem', height: '36.2rem'}}>
                        <Image src='/img/toc1.png' alt='img' layout='fill' objectFit='contain'/>
                    </div>
                    <div className={styles.title}>Nói về em và Trịnh</div>
                </div>
                <div className={styles.rightArea}>
                    <div style={{display: 'flex'}}>
                        <div style={{position: 'relative', minWidth: '32.75rem', height: '21.2rem'}}>
                            <Image src='/img/toc2.png' alt='img' layout='fill' objectFit='contain'/>
                        </div>
                        <div style={{marginLeft: '3.125rem'}}>
                            <div className={styles.title}>Quán văn</div>
                            <div className={styles.text}>nói về quán văn - “bệ phóng” tiếng hát Khánh Ly và nhạc Trịnh Công Sơn</div>
                        </div>
                    </div>
                    <div style={{minHeight:'1.25rem'}}/>
                    <div style={{display: 'flex'}}>
                        <div style={{position: 'relative', minWidth: '32.75rem', height: '21.2rem'}}>
                            <Image src='/img/toc3.png' alt='img' layout='fill' objectFit='contain'/>
                        </div>
                        <div style={{marginLeft: '3.125rem'}}>
                            <div className={styles.title}>Người nay hát nhạc</div>
                            <div className={styles.title}>người xưa</div>
                            <div className={styles.text}>Tranh cãi từ dự án âm nhạc “Gen Z và Trịnh”: Những màn kết hợp lạc lối?</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div style={{height:'3rem'}} />
            <div className={styles.button}>Xem thêm</div>
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