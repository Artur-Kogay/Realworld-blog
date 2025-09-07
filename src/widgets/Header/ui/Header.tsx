import { Link } from 'react-router-dom'
import style from './Header.module.scss'
import penLogo from '../assets/icons/pen.svg';
import settingsLogo from '../assets/icons/settings.svg'
import { Container } from '@/shared';
import { User } from '@/entitites';
import { useUser } from '@/app/providers';


const Header = () => {

  const {user} = useUser()

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header_content}>
          <Link className={style.logo} to={'/'}>Realworld Blog</Link>
          <nav>
            <ul className={style.links}>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>

                <Link to={user ? '/create-article' : '/sign-in'}>
                  <img src={penLogo} alt="pen" />
                  New Post
                </Link>
              </li>
              <li>

                <Link to={user ? '/settings-profile' : '/sign-in'}>
                  <img src={settingsLogo} alt="settings" />
                  Settings
                </Link>
              </li>
              <li>
                {
                  user ?
                    <User />
                    :
                    <div className={style['user-btns']}>
                      <Link className={style['sign-up']} to={'/sign-in'}>Sign in</Link>
                      <Link className={style['sign-in']} to={'/sign-up'}>Sign Up</Link>
                    </div>
                }
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header