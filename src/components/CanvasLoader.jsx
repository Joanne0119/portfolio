import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: '30px',
          color: '#4b5563',
          fontWeight: 800,
          marginTop: 40,
        }}>
        {progress !== 0 ? `${progress.toFixed(1)}%` : 'Loading...'}
      </p>
    </Html>
  );
};

export default CanvasLoader;