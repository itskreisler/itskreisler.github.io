import React from 'react'
import { useScript } from '../hooks/use-script'

const Home = () => {
  const statusTiktok = useScript('https://www.tiktok.com/embed.js')
  const statusTwitter = useScript('https://platform.twitter.com/widgets.js')
  return (
    <>
      <div className="grid">
        <div>
          <article>
            <header>Sobre mi</header>
            <ul>
              {[
                'Tengo 21 años',
                'Me gusta la tecnología y los video-juegos',
                'Actualmente estoy estudiando Analisis y desarrollo de sistemas de informacion'
              ].map((text, index) => (
                <li style={{ listStyle: 'circle' }} key={index}>{text}</li>
              ))}
            </ul>
          </article>
        </div>
        <div>
          <article>
            <header>Redes Sociales</header>
            <ul>
              {[
                {
                  title: 'Twitter',
                  url: 'https://www.twitter.com/itskreisler'
                },
                { title: 'TikTok', url: 'https://www.tiktok.com/@itskreisler' }
              ].map(({ url, title }, index) => (
                <li
                  style={{ textAlign: 'center', listStyle: 'none' }}
                  key={index}
                >
                  <a
                    href={url}
                    target="_blank"
                    title={title}
                    rel="noreferrer"
                    data-tooltip={url}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
      <div className="grid">
        <div>
          <article>
            <header>TikTok</header>
            {statusTiktok === 'ready' && (
              <blockquote
                className="tiktok-embed"
                cite="https://www.tiktok.com/@itskreisler"
                data-unique-id="itskreisler"
                data-embed-type="creator"
                style={{
                  maxWidth: '720px',
                  minWidth: '288px'
                }}
              >
                <section>
                  <a
                    target="_blank"
                    href="https://www.tiktok.com/@itskreisler?refer=creator_embed"
                    rel="noreferrer"
                  >
                    @itskreisler
                  </a>
                </section>
              </blockquote>
            )}
          </article>
        </div>
        <div>
          <article>
            <header>Twitter</header>
            {statusTwitter === 'ready' && (
              <>
                <a
                  href="https://twitter.com/itskreisler?ref_src=twsrc%5Etfw"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @itskreisler
                </a>
                <br />
                <a
                  className="twitter-timeline"
                  data-lang="es"
                  data-theme="dark"
                  href="https://twitter.com/itskreisler?ref_src=twsrc%5Etfw"
                >
                  Tweets by itskreisler
                </a>
              </>
            )}
          </article>
        </div>
      </div>
    </>
  )
}

export default Home
