import AddPage from "@/components/AddPage/AddPage"
import Layout from "@/components/Layout/Layout"
import { getSession } from "next-auth/react";

export default function Add(){
    return(
        <>
            <Layout title={"SENSORES"} />
            <AddPage/>
        </>
    )
}