import { InstagramIcon, GithubIcons, LinkedinIcon } from "../icons";
import './social-btns.scss';

export default function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/danic.costa/" target="_blank">
        <InstagramIcon />
      </a>
      <a href="https://www.linkedin.com/in/daniel-costa-183a791a7/" target="_blank">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/danielccosta9" target="_blank">
        <GithubIcons />
      </a>
    </div>
  );
}