import Layout from "@/components/Layout/Layout"
import Profile from "@/components/Profile/Profile"
import { getSession } from "next-auth/react"

export default function Home() {

    return (
        <div id="mainApp">
            <Layout title={"PERFIL"} />
            <Profile />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {
            session,
        }
    }
}