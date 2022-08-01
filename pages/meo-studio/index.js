import Link from 'next/link'
import React from 'react'
import fs from 'fs';
import path from 'path'

export default function index(props) {
  console.log(props);
  return (
    <div>
      {props.content.map((link) => {
      const linkT = "/meo-studio/" + link;
      return <Link key={link} href={linkT}>{link}</Link>})}
    </div>
  )
}

export async function getServerSideProps() {
  const pathT = path.join(process.cwd(), 'pages/meo-studio')
  const directory = await fs.readdirSync(pathT, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

  return {props: {content: directory}}
}