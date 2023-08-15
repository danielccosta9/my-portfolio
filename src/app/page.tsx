import { Header, Experience, Info, SocialBtns } from './components'
import { EmailIcon } from './components/icons'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href='mailto:danieldev20@outlook.com'>
          contact me
          <EmailIcon />
        </a>
      </div>
    </main>
  )
}
