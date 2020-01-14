const footerStyle = {
  margin: 100
}

export default function Header () {
  return (
    <>
      <div className='footer'>
        <div className='avatar'>
          <img src='static/images/xinyi.jpeg' alt='' />
        </div>

        <p>Designed and developed by Xinyi Wu</p>

        <a href='https://www.linkedin.com/in/xinyi-wu-78722a92/'>
          <img src='static/images/linkedin.jpeg' alt='LinkedIn' />
        </a>

        <div className='copy'>
          <p>© 2020 Xinyi Wu</p>
        </div>
      </div>
    </>
  )
}
