import React from 'react'

const Proyectos = () => {
  return (
    <div className="grid">
      <div>
        <article>
          <header>Proyectos</header>
          <ul>
            {[
              { title: 'Yo', url: 'https://itskreisler.github.io/yo/' },
              { title: 'LiveStreamIdeas', url: 'https://itskreisler.github.io/LiveStreamIdeas/' }
            ].map(({ url, title }, index) => (
              <li style={{ textAlign: 'center', listStyle: 'none' }} key={index}>
                <a href={url} target="_blank" title={title} rel="noreferrer" data-tooltip={url}>{title}</a>
              </li>
            ))}
          </ul>
        </article>
      </div>

    </div>

  )
}

export default Proyectos
