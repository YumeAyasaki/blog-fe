import Link from 'next/link'
import Image from 'next/image'

import NavBar from './navBar'

import style from './Header.module.scss'

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
          <Link href="/">
              <Image  className={style.image} src="/icon/logo.svg" alt="logo" width={48} height={48}/>
          </Link>
          <div className={style.text}>yume ayasaki</div>
      </div>
      <NavBar />
    </div>
  )
}

export default Header