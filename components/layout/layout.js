import Header from './header/header'
// import Footer from './footer/Footer'


export default function Layout({children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}