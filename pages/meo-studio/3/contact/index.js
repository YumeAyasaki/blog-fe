import React from 'react'
import Image from 'next/image'

import styles from './index.module.scss'

const text = 'Có những ngày tuyệt vọng cùng cực, tôi và cuộc đời đã tha thứ cho nhau. Từ buổi con người sống quá rẻ rúng, tôi biết rằng vinh quang chỉ là điều dối trá. Tôi không còn gì để chiêm bái ngoài nỗi tuyệt vọng và lòng bao dung. Hãy đi đến tận cùng của tuyệt vọng để thấy tuyệt vọng cũng đẹp như một bông hoa.'

const textAboutUs = '“Trịnh công sơn” là một dự án được thành lập bởi học sinh sinh viên yêu và cảm nhạc trịnh trên cả nước với mong muốn đem màu nhạc xưa, những lời ca nét bút ủa cố nhạc sĩ hay chỉ đơn giản là những mảnh chuyện nhỏ về cuộc đời ông đến thính/độc giả'

const contactUsEle = [
  {
    src: '/icon/facebookContactUs.svg',
    text: 'TCSSPTER',
    id: 1,
  },
  {
    src: '/icon/instagramContactUs.svg',
    text: 'TCSSPTER',
    id: 2,
  },
  {
    src: '/icon/youtubeContactUs.svg',
    text: 'TCSSPTER',
    id: 3,
  },
  {
    src: '/icon/phoneContactUs.svg',
    text: '0341200622',
    id: 4,
  }
]

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
            <div className={styles.contactUs}>
              <div className={styles.title}>Contact us</div>
              {
                contactUsEle.map((ele) => 
                <div key={ele.id} style={{marginTop: '0.75rem', marginBottom: '0.75rem', display: 'flex'}}>
                  <div style={{position: 'relative', width: '2.5rem', height: '2.5rem'}}>
                    <Image src={ele.src} alt='img' layout='fill' objectFit='contain'/>
                  </div>
                  <div style={{marginLeft: '0.75rem', alignSelf: 'end'}}>{ele.text}</div>
                </div>)
              }
            </div>
            {/* <div style={{minHeight: '100%', width: '1px', backgroundColor: '#fff'}}/> */}
            <div className={styles.account}>
              <div className={styles.logIn}>Đăng nhập</div>
              <div className={styles.signIn}>Đăng ký</div>
            </div>
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