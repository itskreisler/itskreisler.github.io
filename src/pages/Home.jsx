import React, { useEffect } from 'react'
import './home.scss'
import $ from 'jquery'
import { Col, Container, Row } from 'react-bootstrap'
const Home = () => {
  // const statusTiktok = useScript('https://www.tiktok.com/embed.js')
  // const statusTwitter = useScript('https://platform.twitter.com/widgets.js')
  useEffect(() => {
    const hexArrangement = ['3333', '32223', '321123', '3210123']
    const hexval = {
      0: [['profile', 'https://itskreisler.github.io/']],
      1: [
        // ['github', 'https://github.com/itskreisler/'],
        ['github', 'https://github.com/itskreisler/'],
        ['twitter', 'https://twitter.com/itskreisler'],
        // ['medium', 'https://medium.com/@itskreisler/'],
        ['mail', 'mailto:tempkreisler@outlook.com']
        // ['flickr', 'https://www.flickr.com/photos/itskreisler/albums']
      ],
      2: [
        // ['deviantart', 'http://itskreisler.deviantart.com/'],
        ['codepen', 'https://codepen.io/kreisler/'],
        // ['stackoverflow', 'http://stackoverflow.com/users/2130750/itskreisler'],
        ['steam', 'https://steamcommunity.com/id/itskreisler'],
        // ['tumblr', 'https://itskreisler.tumblr.com'],
        // ^ OR
        // ['quora', 'https://www.quora.com/profile/itskreisler']
        ['facebook', 'https://www.facebook.com/itskreisler'],
        ['reddit', 'https://www.reddit.com/user/itskreisler/'],
        // ['skype', 'skype:itskreisler?chat'],
        ['youtube', 'https://www.youtube.com/c/itskreisler'],
        ['linkedin', 'https://www.linkedin.com/in/itskreisler'],
        // ['vine', 'https://vine.co/itskreisler'],
        ['instagram', 'https://instagram.com/itskreisler/']
      ],
      count: { 0: 0, 1: 0, 2: 0 }
    }
    $('.hive').html(
      new Array(8)
        .join(1)
        .split('')
        .reduce(function (mem, x, ind) {
          // console.log('-------L', ind, line_count)
          const lineCount = ind < 4 ? ind + 4 : 3 + 7 - ind
          const hex = new Array(lineCount + 1)
            .join(1)
            .split('')
            .reduce(function (mem2, y, ind2) {
              const level = hexArrangement[lineCount - 4][ind2]
              const val = hexval[level]
                ? hexval[level][hexval.count[level]++]
                : ''
              // console.log(level)
              return `${mem2}<${val ? 'a' : 'div'} class="hex-container level-${level} ${val ? `icon ${val[0]}` : ''}" ${val ? 'target="_blank"' : ''} ${val ? `href="${val[1]}"` : ''}><div class="hex-border"><div class="hex"><span></span></div></div></${val ? 'a' : 'div'}>`
            }, '')
          return `${mem}<div class="line">${hex}</div>`
        }, '')
    )

    const animation = function () {
      $('.hive').removeClass('first-animate loaded-animate')
      setTimeout(function () {
        $('.hive').addClass('loaded-animate')
      }, 10)
    }
    $('.hive').removeClass('loaded-animate first-animate')
    setTimeout(function () {
      $('.hive').addClass('first-animate')
    }, 10)
    setTimeout(function () {
      $('.hive').addClass('loaded loaded-animate')
    }, 2500)
    window.setInterval(animation, 7000)
  }, [])
  return (
    <Container>
      <Row>
        <Col>
          <div className="hive"></div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
