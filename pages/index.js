import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import stylesheet from '../styles/components/main.scss'

const Index = () => (
  <>
    <style dangerouslySetInnerHTML={{__html: stylesheet }} />
    <Header />
    <Main />
    <Footer />
  </>
)

export default Index
