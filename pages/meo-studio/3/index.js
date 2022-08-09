import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router' // Get link

import style from './index.module.scss'

const navElement = [
  {
    name: "Tiểu sử",
    key: 1,
    href: "/biography"
  },
  {
    name: "Mục lục",
    key: 2,
    href: "/toc"
  },
  {
    name: "Tìm kiếm",
    key: 3,
    href: "/"
  },
  {
    name: "Liên hệ",
    key: 4,
    href: "/contact"
  },
]

export default function Index() {
  const router = useRouter();
  const preLink = router.pathname;
  return (
    <div>
      <div className={style.navBar}>
        <div className={style.logo}>
          <Image src="/icon/Simple_Music.svg" alt="logo" layout='fill' objectFit='contain'/>
        </div>
        <div className={style.navEle}>
          {
            navElement.map((ele) =>
            <Link href={preLink + ele.href} key={ele.key} >
              <a className={style.ele}>
                {ele.name}
              </a>
            </Link>
            )
          }
        </div>
        <div className={style.buttonArea}>
          <div className={style.logIn}>Đăng nhập</div>
          <div className={style.signIn}>Đăng ký</div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.searchBar}>
          <input className={style.input} onChange={event => event.currentTarget.value} placeHolder="Searching for something"/>
          <div style={{width: '1.5rem', height: '1.5rem', position: 'relative', marginLeft: '0.5rem', marginRight: '0.5rem'}}>
            <Image src="/icon/search-meo.svg" alt="search icon" layout='fill' objectFit='contain'/>
          </div>
        </div>
        <div style={{marginLeft: "1rem"}}>
          {/* Trịnh Công Sơn */}
          <div className={style.TCS}>Trịnh</div>
          <div className={style.TCS}>Công</div>
          <div className={style.TCS}>Sơn</div>
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