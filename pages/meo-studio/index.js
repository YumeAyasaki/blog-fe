import Link from 'next/link'
import React from 'react'
import fs from 'fs';
import path from 'path'

export default function index(props) {
  return (
    <div>
      {props.content.map((link) => {
      const linkT = "/meo-studio/" + link;
      return <div key={link}><Link href={linkT}>{link}</Link></div>})}
    </div>
  )
}

export async function getServerSideProps() {
  const pathT = path.join(process.cwd(), 'pages/meo-studio')
  const directory = await fs.readdirSync(pathT, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(dirent => dirent != "styles");

  return {props: {content: directory}}
}