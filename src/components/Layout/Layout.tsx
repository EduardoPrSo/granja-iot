import styles from './Layout.module.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

interface Props {
    title: string
}

export default function Layout(props: Props) {
    return (
        <> 
            <Header title={props.title} />
            <Footer />
        </>
    )
}