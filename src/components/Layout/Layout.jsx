import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout(props) {
    return (
        <div> 
            <Header title={props.title} />
            <Footer tab={props.title} />
        </div>
    )
}