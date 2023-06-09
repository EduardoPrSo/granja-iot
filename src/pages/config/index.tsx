import Layout from "@/components/Layout/Layout"
import Config from "@/components/Config/Config"
import { getSession } from "next-auth/react";

export default function ConfigPage(){
    return (
        <>
            <Layout title={"CONFIGURAÇÕES"} />
            <Config />
        </>
    )
}