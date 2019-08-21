import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  return (
    <main>
      <h1>Kristin Barr</h1>
      <h2>Developer | Designer | Creator</h2>
      <h3>Projects</h3>
      <div className='pairme'>
        <a
          href='https://pair-me.netlify.com/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <img src='./img/pairme-thumb.png' alt='pair me thumbnail' />
        </a>
        <p>
          PairMe{' '}
          <span>
            <a
              href='https://pair-me.netlify.com/'
              target='_blank'
              rel='noreferrer noopener'
            >
              [LIVE SITE]
            </a>{' '}
          </span>
          <span>
            <a
              href='https://youtu.be/E1mbO6ztU6c'
              target='_blank'
              rel='noreferrer noopener'
            >
              [DEMO]
            </a>
          </span>{' '}
        </p>
        <p>
          - Pair programming matchmaking app built with React, Socket.io, 2019.{' '}
          <br />
          - Built from scratch for 2.5-day Hackathon with 2 teammates, presented
          app for demo video
          <br />- Sole developer and designer for fully responsive marketing
          website using HTML, CSS (Sass, animations), animated gifs{' '}
        </p>
      </div>
      <br />
      <a
        href='https://kristinbarr.github.io/pic-script/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <img src='./img/picscript-thumb.png' alt='pic script thumbnail' />
      </a>{' '}
      <p>
        Pic Script{' '}
        <span>
          <a
            href='https://kristinbarr.github.io/pic-script/'
            target='_blank'
            rel='noreferrer noopener'
          >
            [LIVE SITE]
          </a>{' '}
        </span>{' '}
      </p>
      <p>
        - Inspirational random image and quote custom pairing site
        <br />- Project built with React(hooks), Redux, API integrations{' '}
      </p>
      {/* <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p> */}
    </main>
  )
}

export default App
