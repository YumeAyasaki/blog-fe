import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

import style from "./index.module.scss"

const navBarEle = [
  {
    id: 1, 
    nameVI: "Trang chủ",
    nameEN: "Home"
  }, 
  {
    id: 2, 
    nameVI: "Câu chuyện",
    nameEN: "Story"
  },
  {
    id: 3, 
    nameVI: "Về mình",
    nameEN: "About us"
  },
  {
    id: 4, 
    nameVI: "Liên hệ",
    nameEN: "Contact"
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

const welcomeText = {
  textVI: "Chào mừng",
  textEN: "Welcome",
}

export default function Index() {
  const [button, useButton] = useState(0);
  const HandleClick = () => {
    useButton(1 - button);
    console.log(button);
  }
  return (
    <div>
      {/* Nav bar */}
      <div className={style.header}>
        {/* Bar */}
        <div className={style.bar}>
          <Image src="/icon/bars.svg" alt="bar" width={35} height={41} />
        </div>

        {/* Logo */}
        <Image src="/icon/vuon-hoa-su.svg" alt="logo" height={80} width={250} objectFit="contain" />

        {/* NavBar */}
        <div className={style.navBar}>
          {
            navBarEle.map((ele) => 
            <div key={ele.id} className={style.navBarEle}>{button ? ele.nameEN : ele.nameVI}</div>)
          }
        </div>
      </div>
      <main className={style.main}>
        <div className={style.page}>
          <div className={style.title}>{button ? welcomeText.textEN : welcomeText.textVI}</div>
          <div className={style.content}>
            {
              content.map((ele) => <div key={ele.id}>
                <Image src={ele.img} alt={ele.img} height="100%" width="100%" layout="responsive" objectFit="contain"/>
                <div className={style.content__title}>{ele.title}</div>
                <div className={style.content__context}>{ele.context}</div>
              </div>)
            }
          </div>
        </div>
      </main>
      <footer className={style.footer}>
        {/* Left footer */}
        <div style={{display: "flex"}}>
          <div className={style.image}>
            <Image src="/icon/facebook.svg" alt='facebook' layout='fill' objectFit='contain'/>
          </div>
          <div className={style.text}>MEO Studio</div>
        </div>
        <button className={style.button} onClick={HandleClick}>{button ? "EN" : "VI"}</button>
      </footer>
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