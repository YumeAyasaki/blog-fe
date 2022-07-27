import React from 'react'
import Image from 'next/image';

import style from "./index.module.scss"

const navBarEle = [
  {
    id: 1, 
    name: "Trang chủ"
  }, 
  {
    id: 2, 
    name: "Câu chuyện"
  },
  {
    id: 3, 
    name: "Về mình"
  },
  {
    id: 4, 
    name: "Liên hệ"
  }];
const content = [
  {
    id: 1,
    img: "/img/meo_1.png",
    title: "Ipsum lorem",
    context: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    img: "/img/meo_1.png",
    title: "Lorem ipsum",
    context: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    img: "/img/meo_1.png",
    title: "Lorem ipsum",
    context: "Lorem ipsum dolor sit amet",
  }
]

export default function index() {
  return (
    <div>
      {/* Nav bar */}
      <div className={style.header}>
        <div className={style.logo}>Vườn hoa sứ</div>
        <div className={style.navBar}>
          {
            navBarEle.map((ele) => 
            <div key={ele.id} className={style.navBarEle}>{ele.name}</div>)
          }
        </div>
      </div>
      <main className={style.main}>
        <div className={style.page}>
          <div className={style.title}>Chào mừng</div>
          <div className={style.content}>
            {
              content.map((ele) => <div key={ele.id}>
                <div className={style.content__image}>
                  <Image src={ele.img} alt={ele.img} layout='fill'></Image>
                </div>
                <div className={style.content__title}>{ele.title}</div>
                <div className={style.content__context}>{ele.context}</div>
              </div>)
            }
          </div>
        </div>
      </main>
      <footer className={style.footer}>
        <div className={style.image}>
          <Image src="/icon/facebook.svg" alt='facebook' layout='fill' />
        </div>
        <div className={style.text}>MEO Studio</div>
      </footer>
    </div>
  )
}

index.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}