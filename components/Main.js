// import link from 'next/link';
import { Card, Image, Column, Row } from 'industry-ui'

const bodyStyle = {
  margin: 100,
}

const cardStyle = {
  marginLeft: 115,
  paddingTop: 70
}

const imageStyle = {
  padding: 5
}

function myProjects () {
  return [
    {
      id: 'famtravel',
      title: 'Famtravel',
      link: 'http://www.famtravel.eu',
      img: 'static/images/famtravel.png'
    },
    {
      id: 'superpower-rental',
      title: 'Superpower Rental',
      link: 'http://superpower-to-rent.herokuapp.com/',
      img: 'static/images/superpower.png'
    },
    {
      id: 'my-protein-shake',
      title: 'My Protein Shake',
      link: 'https://ohshakemyshake.herokuapp.com/',
      img: 'static/images/shake.png'
    },
    {
      id: 'find-out-more',
      title: 'Find out more on github',
      link: 'https://github.com/xxinyiwho',
      img: 'static/images/findoutmore.png'
    }
  ]
}

const ProjectLink = ({ project }) => <a href={project.link}>{project.title}</a>

export default function Project () {
  return (
    <>
    <h2 style={bodyStyle}>More about me</h2>
    <Row>
    {myProjects().map(project => (
      <div className='my-projects' style={cardStyle} >
      <Column lg={12}>
      <Card center footer={project.title} to={{href:project.link}}>
      <Image alt='' src={project.img} style={imageStyle} />
      </Card>
      </Column>
      </div>
      ))}
      </Row>
      
      <h2 style={bodyStyle}>Skills</h2>
      <div className='description' style={bodyStyle}>
      <li>
      <h3>Conception</h3>
      <p>Understanding the clients' needs and help to sketch the project</p>
      </li>
      <li>
      <h3>Design</h3>
      <p>Customerized design proposition, product prototype</p>
      </li>
      <li>
      <h3>Development</h3>
      <p>Website/web application developement and deployment</p>
      </li>
      </div>
      
      <div className='icons' style={bodyStyle}>
      <img src='/static/images/html.png' alt='' />
      <img src='/static/images/css.png' alt='' />
      <img src='/static/images/figma.png' alt='' />
      <img src='/static/images/postgresql.png' alt='' />
      <img src='/static/images/github.png' alt='' />
      <img src='/static/images/heroku.png' alt='' />
      <br />
      <img src='/static/images/js.png' alt='' />
      <img src='/static/images/scss.png' alt='' />
      <img src='/static/images/rails.png' alt='' />
      <img src='/static/images/ruby.png' alt='' />
      <img src='/static/images/react.png' alt='' />
      <img src='/static/images/redux.png' alt='' />
      </div>
      </>
      )
    }