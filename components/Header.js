const headerStyle = {
  margin: 100
}

export default function Header () {
  return (
    <>
    <div className='banner'>
      <div className='view'>
        <a href='mailto:xxinyiwho@gmail.com'><img src='static/images/emailbtn.svg' alt='' /></a>
        <div className='container'>
          <h1><strong>Design, code & cheesecake</strong></h1>
        </div>
        <div className='icon-scroll' />
      </div>

      <div className='container' style={headerStyle}>
        
        <div className='about-me'>
          <h3>Hi there, My name <strong>Xinyi</strong>, a passionate junior full stack web developer, originally from Changsha, China, currently living in Barcelona.</h3>
          <h3>I was working as a event planner, my work was to turn ideas into reality, and creativity plays an important role here. After managing many different projects, the magic and charm of creativity haunted me, I need to find a way to rest my crazy thoughts in peace. That's how I decided to learn to code, I believe that coding could do the magic. One summer of hard working and fun in Le Wagon coding bootcamp and voilà, here we go! I invite you to join me, let's create something fun together! </h3>
        </div>
      </div>
      </div>
    </>
  )
}
