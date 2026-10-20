import React, { useRef, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const Preloader = ({ progress = 0, ready = false, leaving = false, onEnter }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { t } = useLanguage();
  const [gameOver, setGameOver] = useState(true);
  const [isplayerJump, setIsPlayerJump] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(-10);
  const [showPlayAgain, setShowPlayAgain] = useState(false);
  const [showInit, setShowInit] = useState(true);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore')) || 0);

  const playerRef = useRef();
  const obstacleRef = useRef();
  const gameRef = useRef();

  const gameInit = () => {
    updateHighScore();
    setObstaclePosition(-10);
    setIsPlayerJump(false);
    setGameOver(false);
    setShowPlayAgain(false);
    setShowInit(false);
    setScore(0);
    setHighScore(parseInt(localStorage.getItem('highScore')) || 0);
  }

  useEffect(() => {
    const handleClick = (event) => {
      if(gameOver) {
        gameInit();
      }
      else if(showInit) {
        gameInit();
      }
      else{
        if(gameRef.current && !gameRef.current.contains(event.target)) {
          setIsPlayerJump(true);
          setTimeout(() => {
            setIsPlayerJump(false);
          }, 1000);
        }
      }
    }
    document.addEventListener('click', handleClick);

    const handleKeyDown = (event) => {
      if(ready && event.code === 'Enter') {
        onEnter?.();
        return;
      }
      if(gameOver) {
        gameInit();
      }
      else if(showInit) {
        gameInit();
      }
      else {
        if(event.code=== 'Space' || event.code === 'ArrowUp') {
          setIsPlayerJump(true);
          setTimeout(() => {
            setIsPlayerJump(false);
          }, 1000);
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  })

  useEffect(() => {
    if(!gameOver) {
      const obstacleInterval = setInterval(() => {
      setObstaclePosition((prevPosition) => {
        if (prevPosition === 110) {  
          clearInterval(obstacleInterval);
          return -10;  
        }
          return prevPosition + 8;
        });
      }, 100);

      return () => {
        clearInterval(obstacleInterval);
      };
    }
  })

  const obstacleMovement = {
    right: `${obstaclePosition}%`
  }


  const collisionObstacle = () => {
    if(playerRef.current && obstacleRef.current) {
      const playerbounds = playerRef.current.getBoundingClientRect();
      const obstaclebounds = obstacleRef.current.getBoundingClientRect();
      return (obstaclebounds.right - 15)  > playerbounds.left && obstaclebounds.left < (playerbounds.right - 15) && (playerbounds.bottom - 10) > obstaclebounds.top
    }
  }

  // Only skip straight to the site if the visitor never started a game;
  // otherwise wait for them to press the enter button.
  useEffect(() => {
    if(ready && showInit) onEnter?.();
  }, [ready, showInit])

  // Save on game over: the collision interval below closes over the first
  // render's score, and visitors may now leave without starting a new round.
  useEffect(() => {
    if(gameOver) updateHighScore();
  }, [gameOver])

  useEffect(() => {
    const collisionInterval = setInterval(() => {
      if(collisionObstacle()) {
        setGameOver(true);
        setShowPlayAgain(true);
      }
    }, 10);

    return () => {
      clearInterval(collisionInterval);
    };
    
  } , [])

  useEffect(() => {
    if(!gameOver) {
      const scoreInterval = setInterval(() => {
        setScore((prevScore) => prevScore + 1);
      }, 100);
      return () => {
        clearInterval(scoreInterval);
      };
    }
  }, [score, gameOver])

  const updateHighScore = () => {
    if(score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score);
    }
  }



  return (
    <div id='preloader' className={`flex flex-col justify-center items-center transition-opacity duration-500 ${leaving ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* <iframe className='loader' src="https://lottie.host/embed/c918fc5f-6517-48cf-9b0a-279871ed45f1/CyjVieM6rD.json"></iframe> */}
      <div id='gameplay' ref={gameRef}>
        <p className='absolute top-1/3 right-5 text-sky-950 sm:text-md text-sm gap-4 flex flex-row'><span>Score: {score}</span><span>High Score: {highScore}</span></p>
        <div id='player' ref={playerRef} className={`${gameOver ? 'gameover' : (isplayerJump ? (isMobile ? 'jumpMobile' : 'jump') : 'walk')}`}></div>
        <div id='obstacle' ref={obstacleRef} className={`${gameOver ? 'gameover' : 'bug'}`} style={obstacleMovement}></div>
        <button id='playagain' className={`${showPlayAgain || showInit ? 'flex' : 'hidden'} absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500 p-2 rounded-xl hover:bg-sky-600`}>
            <img src={`${showInit ? '/assets/play.svg' : '/assets/rotate_arrow.svg'}`} alt='playagain' className='w-10 h-10 p-1' />
        </button>
      </div>
      <div id='loading-bar' className='mt-6 h-2 rounded-full bg-sky-100 overflow-hidden'>
        <div className='h-full bg-sky-500 rounded-full transition-[width] duration-300 ease-out' style={{ width: `${progress}%` }}></div>
      </div>
      <div className='h-14 mt-3 flex items-center justify-center'>
        {ready ? (
          <button
            onClick={(e) => {
              // keep the document click handler from starting another round
              e.stopPropagation();
              onEnter?.();
            }}
            className='text-white text-lg bg-sky-950 px-6 py-2 rounded-full font-generalsans font-medium hover:bg-sky-800 transition-colors'
          >
            {t('preloader.ready')} {t('preloader.enter')} →
          </button>
        ) : (
          <p className='text-sky-950 text-xl font-generalsans font-bold'>
            {t('preloader.loading')} {Math.round(progress)}%
          </p>
        )}
      </div>
    </div>
  )
}

export default Preloader
