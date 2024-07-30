import '../loading-component/loading.css';

function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h2 className="loading-text">Cargando...</h2>
    </div>
  );
}

export default LoadingScreen;