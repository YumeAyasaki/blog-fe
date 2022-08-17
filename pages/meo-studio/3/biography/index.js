import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Stick from '../../components/stick'

import styles from './index.module.scss'

const firstEle = [
  {
    src: "/img/bio1.png",
    text: "Bức thư số 01: 2.9.1964",
    id: 1
  },
  {
    src: "/img/bio2.png",
    text: "Bức thư số 02: 3.9.1964",
    id: 2
  },
  {
    src: "/img/bio3.png",
    text: "Bức thư số 03: 17.9.1964",
    id: 3
  }
];
const secondEle = [
  {
    src: "/img/bio4.png",
    text: "Diễm xưa",
    id: 1
  },
  {
    src: "/img/bio5.png",
    text: "Ta thấy gì đêm nay",
    id: 2
  },
  {
    src: "/img/bio6.png",
    text: "Nhìn những mùa thu đi",
    id: 3
  }
];

export default function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.firstSection}>
        <Stick />
        <div>
          <div className={styles.title}>Thư tình gửi một người</div>
          <div className={styles.content}>
            {
              firstEle.map(ele => { return (<div key={ele.id} className={styles.ele}>
                  <div style={{position: 'relative', height: '17.75rem', width: '23rem'}}>
                    <Image src={ele.src} alt='img' layout='fill' objectFit='contain'/>
                  </div>
                  <div>{ele.text}</div>
                </div>)
              })
            }
          </div>
        </div>
        <div style={{position: 'relative', width: '5rem', height: '5rem', marginLeft: '3rem'}}>
          <Image src='/icon/next.svg' alt='next' objectFit='contain' layout='fill'/>
        </div>
      </div>

      <div style={{height: '5rem'}} />

      <div className={styles.secondSection}>
        <Stick />
        <div>
          <div className={styles.title}>
            <Image src='/icon/Simple_Music.svg' alt='music' layout='fill' objectFit='contain'/>
          </div>
          <div className={styles.content}>
            {
              secondEle.map(ele => { return (ele.id == 1 ? (
                <Link href='biography/diemxua' key={ele.id} >
                  <a>
                    <div className={styles.ele}>
                      <div style={{position: 'relative', height: '17.75rem', width: '23rem'}}>
                        <Image src={ele.src} alt='img' layout='fill' objectFit='contain'/>
                      </div>
                      <div>{ele.text}</div>
                    </div>
                  </a>
                </Link>
                ) : (
                <div key={ele.id} className={styles.ele}>
                  <div style={{position: 'relative', height: '17.75rem', width: '23rem'}}>
                    <Image src={ele.src} alt='img' layout='fill' objectFit='contain'/>
                  </div>
                  <div>{ele.text}</div>
                </div>))
              })
            }
          </div>
        </div>
        <div style={{position: 'relative', width: '5rem', height: '5rem', marginLeft: '3rem'}}>
          <Image src='/icon/next.svg' alt='next' objectFit='contain' layout='fill'/>
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