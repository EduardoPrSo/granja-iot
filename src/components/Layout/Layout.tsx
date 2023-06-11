import styles from './Loyout.module.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface Props {
    title: string
}

export default function Layout(props: Props) {
    return (
        <div> 
            <Header title={props.title} />
            <Footer tab={props.title} />
        </div>
    )
}