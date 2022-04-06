import ReactLoading from 'react-loading'

function LoadingPage() {
    return (
      <div className='loading-wrapper'>
        <ReactLoading type="spin" />
      </div>
    );
  }
  
  export default LoadingPage;