import React from 'react'
import style from './1.module.scss'
import Image from 'next/image'

const navBarElements = ["Trang chủ", "Câu chuyện", "Về mình", "Liên hệ"]
const imgElements = [
    {
        src: "/img/meo_1.png",
        title: "Ipsum lorem",
        content: "Lorem ipsum dolor sit amet",
        id: 1,
    },
    {
        src: "/img/meo_1.png",
        title: "Ipsum lorem",
        content: "Lorem ipsum dolor sit amet",
        id: 2,
    },
    {
        src: "/img/meo_1.png",
        title: "Ipsum lorem",
        content: "Lorem ipsum dolor sit amet",
        id: 3
    },
]

export default function e1() {
  return (
    <div>
        {/* Header */}
        <div className={style.header}>
            <div className={style.logo}>Vườn hoa sứ</div>
            <div className={style.navBar}>
                {navBarElements.map((element) => {
                    return <div className={style.navBarEle} key={element}>{element}</div>
                })}
            </div>
        </div>

        {/* Base on figma */}
        <div className={style.idk}>
            {/* Main page */}
            <div className={style.page}>
                <div className={style.title}>Chào mừng</div>
                <div className={style.content}>
                    {imgElements.map((sec) => {
                        return (
                            <div key={sec.id}>
                                {/* Image nextjs cannot be rem */}
                                <Image className={style.content__image} src={sec.src} alt={`ảnh ${sec.id}`} width={344} height={239} /> 
                                <div className={style.content__title}>{sec.title}</div>
                                <div className={style.content__context}>{sec.content}</div>
                            </div>
                        );
                    })
                    }
                </div>
            </div>

            {/* Footer */}
            <div className={style.footer}>
                <div className={style.image}>
                    <Image src="/icon/facebook.svg" alt="facebook-icon" layout='fill' objectFit="contain" />
                </div>
                {/* <Image src="/img/facebook.png" alt="facebook-icon" layout='fill' objectFit="contain" /> */}
                <div className={style.text}>MEO Studio</div>
            </div>
        </div>
    </div>
  )
}

e1.getLayout = (page) => page // Nullify the default layout...