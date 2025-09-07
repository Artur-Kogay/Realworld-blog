import style from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={style.hero}>
        <div className={style['title-wrapper']}>
            <h1 className={style.title}>Realworld Blog</h1>
        </div>
        <h2 className={style.subtitle}>A place to share your knowledge.</h2>
    </section>
  )
}

export default Hero