import "./Download.css"

export default function DownloadApp() {
  return (
     <>
     <div className='app-container'>
      <div className="app-contant">
        <img src='https://nigammishra.github.io/Grocery-react/static/media/about-icons-1.597a83ac4817df33ef20c4608af68183.svg' alt='app-img' className='aap-img' />
        <div className='app-text'>
          <h1>Welcome to Xmart</h1>
          <p>Download the app get free food & <span>$30 </span>off on your first order.</p>
        </div>
      </div>
       <button type='submit' className='app-button'>Download Xmart App</button>
     </div>
     </>
  )
}
