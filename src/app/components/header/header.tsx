import Image from 'next/image'
import './header.scss';

export default function Header() {
    return (
        <div className="header">
        <div>
          <h1>
            Hi, i`m <span>Daniel!</span> 👋
          </h1>
          <h2>Software Developer</h2>
        </div>
        <Image
          src="/me.jpeg"
          alt="My phote"
          width={325}
          height={310}
          priority
        />
      </div>
    )
}