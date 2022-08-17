import React from 'react'
import Image from 'next/image'

import styles from './diemxua.module.scss'

const bio = 'Được sáng tác vào năm 1960, "Diễm xưa" được coi là một trong những ca khúc đầu tay trong sự nghiệp nhạc tình của nhạc sĩ Trịnh Công Sơn. Bài hát chất chứa một nỗi niềm rất thật của người nghệ sĩ, vừa tiếc nuối vừa trách móc, ưu thương. Với những người mộ điệu, họ cảm nhận được trong "Diễm xưa" hình ảnh một chàng trai đang mòn mỏi ngóng chờ những bước chân âm thầm của một cô gái "chiều nay còn mưa sao em không lại”. Trách móc đấy nhưng vẫn trông ngóng mãi một bóng hình.'

export default function Index() {
  return (
    <div className={styles.page}>
        <div className={styles.title}>
            {/* <div style={{minWidth: '100px', minHeight: '100px'}}></div> */}
            Diễm Xưa - mối tình đầu day dứt của Trịnh công sơn
        </div>
        <div className={styles.poem}>
            <div className={styles.leftSection}>
                <div className={styles.title}>Lời bài hát</div>
                <div className={styles.firstSection}>
                    Mưa vẫn mưa bay trên tầng tháp cổ<br />
                    Dài tay em mấy thuở mắt xanh xao<br />
                    Nghe lá thu mưa reo mòn gót nhỏ<br />
                    Đường dài hun hút cho mắt thêm sâu<br />
                    <br />
                    Mưa vẫn hay mưa trên hàng lá nhỏ<br />
                    Buổi chiều ngồi ngóng những chuyến mưa qua<br />
                    Trên bước chân em âm thầm lá đổ<br />
                    Chợt hồn xanh buốt cho mình xót xa<br />
                    <br />
                    Chiều nay còn mưa sao em không lại<br />
                    Nhớ mãi trong cơn đau vùi<br />
                    Làm sao có nhau, hằn lên nỗi đau<br />
                    Bước chân em xin về mau<br />
                </div>
                <div className={styles.secondSection}>
                    Mưa vẫn hay mưa cho đời biến động<br />
                    Làm sao em nhớ những vết chim di<br />
                    Xin hãy cho mưa qua miền đất rộng<br />
                    Để người phiêu lãng quên mình lãng du<br />
                    <br />
                    Chiều nay còn mưa sao em không lại<br />
                    Nhớ mãi trong cơn đau vùi<br />
                    Làm sao có nhau, hằn lên nỗi đau<br />
                    Bước chân em xin về mau<br />
                    <br />
                    Mưa vẫn hay mưa cho đời biến động<br />
                    Làm sao em biết bia đá không đau<br />
                    Xin hãy cho mưa qua miền đất rộng<br />
                    Ngày sau sỏi đá cũng cần có nhau<br />
                </div>
            </div>
            <div className={styles.rightSection}>
                <div style={{position: 'relative', width: '22rem', height: '7rem', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Image src='/img/diemxua1.png' alt='img' layout='fill' objectFit='contain'/>
                </div>
                <div style={{position: 'relative', width: '19.25rem', height: '27.25rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem'}}>
                    <Image src='/img/diemxua2.png' alt='img' layout='fill' objectFit='contain'/>
                </div>
            </div>
        </div>
        <div className={styles.author}>
            <div className={styles.image}>
                <div className={styles.text}>Ngô Vũ Bích Diễm - Thời Sinh Viên</div>
                <div className={styles.avatar}>
                    <Image src='/img/diemxua3.png' alt='avt' layout='fill' objectFit='contain'/>
                </div>
            </div>
            <div className={styles.bioAu}>
                <div className={styles.title}>Ý Nghĩa Ca Khúc</div>
                <div className={styles.text}>{bio}</div>
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