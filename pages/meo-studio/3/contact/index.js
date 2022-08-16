import React from 'react'
import Image from 'next/image'

import styles from './index.module.scss'

const text = 'Có những ngày tuyệt vọng cùng cực, tôi và cuộc đời đã tha thứ cho nhau. Từ buổi con người sống quá rẻ rúng, tôi biết rằng vinh quang chỉ là điều dối trá. Tôi không còn gì để chiêm bái ngoài nỗi tuyệt vọng và lòng bao dung. Hãy đi đến tận cùng của tuyệt vọng để thấy tuyệt vọng cũng đẹp như một bông hoa.'

const textAboutUs = '“Trịnh công sơn” là một dự án được thành lập bởi học sinh sinh viên yêu và cảm nhạc trịnh trên cả nước với mong muốn đem màu nhạc xưa, những lời ca nét bút ủa cố nhạc sĩ hay chỉ đơn giản là những mảnh chuyện nhỏ về cuộc đời ông đến thính/độc giả'

export default function Index() {
  return (
    <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.container}>
            <div className={styles.image}>
              <Image src='/img/contact1.png' alt='img' layout='fill' objectFit='contain'/>
              <div className={styles.icon}>
                <Image src='/icon/Simple_Music.svg' alt='img' layout='fill' objectFit='contain'/>
              </div>
            </div>
            <div className={styles.text}>
              {text}
            </div>
          </div>
          <div className={styles.title}>
            <div>CHÂM</div>
            <div>NGÔN</div>
            <div>TRỊNH</div>
          </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.aboutUs}>
              <div className={styles.title}>About us</div>
              <div className={styles.text}>{textAboutUs}</div>
            </div>
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