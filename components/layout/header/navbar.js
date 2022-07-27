import React from 'react'
import Link from 'next/link'

import style from './Header.module.scss'

const linkSection = [
  {name: "Api", key: "api", link: "/api"}, 
  {name: "Blog", key: "blog", link: "/blog"},
  {name: "Meo's", key: "meo", link: "/meo-studio"}
];

export default function NavBar() {
  return (
    <div className={style.cta}>
      {linkSection.map((sec) => {
          return <Link className={style.btn} key={sec.key} href={sec.link}>{sec.name}</Link>
        })}
    </div>
  )
}