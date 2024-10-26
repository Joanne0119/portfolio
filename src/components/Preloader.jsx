import { pre, use } from 'framer-motion/client';
import React, { useRef, useEffect, useState } from 'react'
import { set } from 'react-hook-form';

const Preloader = () => {
  const [gameOver, setGameOver] = useState(false);
  const [isplayerJump, setIsPlayerJump] = useState(false);
  const [obstaclePosition, setObstaclePosition] = useState(-10);
  const [showPlayAgain, setShowPlayAgain] = useState(false);
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
    setScore(0);
    setHighScore(parseInt(localStorage.getItem('highScore')) || 0);
  }

  useEffect(() => {
    const handleClick = (event) => {
      if(gameOver) {
        gameInit();
      }
      else{
        if(gameRef.current && !gameRef.current.contains(event.target)) {
          console.log('clicked')
          setIsPlayerJump(true);
          setTimeout(() => {
            setIsPlayerJump(false);
          }, 1400);
        }
      }
    }
    document.addEventListener('click', handleClick);

    const handleKeyDown = (event) => {
      if(gameOver) {
        gameInit();
      }
      else {
        if(event.code=== 'Space' || event.code === 'ArrowUp') {
          console.log('space pressed')
          setIsPlayerJump(true);
          setTimeout(() => {
            setIsPlayerJump(false);
          }, 1400);
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

  useEffect(() => {
    const collisionInterval = setInterval(() => {
      if(collisionObstacle()) {
        updateHighScore();
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
    <div id='preloader' className='flex flex-col justify-center items-center'>
      {/* <iframe className='loader' src="https://lottie.host/embed/c918fc5f-6517-48cf-9b0a-279871ed45f1/CyjVieM6rD.json"></iframe> */}
      <div id='gameplay' ref={gameRef}>
        <p className='absolute top-1/3 right-5 text-sky-950 sm:text-md text-sm gap-4 flex flex-row'><span>Score: {score}</span><span>High Score: {highScore}</span></p>
        <div id='player' ref={playerRef} className={`${gameOver ? 'gameover' : `${isplayerJump ? 'jump' : 'walk'}`}`}></div>
        <div id='obstacle' ref={obstacleRef} className={`${gameOver ? 'gameover' : 'bug'}`} style={obstacleMovement}></div>
        <button id='playagain' className={`${showPlayAgain ? 'flex' : 'hidden'} absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-500 p-2 rounded-xl hover:bg-sky-600`}>
            <img src='/assets/rotate_arrow.svg' alt='playagain' className='w-10 h-10 p-1' />
        </button>
      </div>
      <p className='text-sky-950 text-xl font-generalsans font-bold mt-5'>Loading...</p>
    </div>
  )
}

export default Preloader
