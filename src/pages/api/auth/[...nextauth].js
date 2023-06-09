import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { fetchAPI } from "@/services/fetchAPI";

export default NextAuth({
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials) {
                try {
                    const response = await fetchAPI('api/signin', {
                        email: credentials.email,
                        password: credentials.password
                    });
                    
                    if (!response.data) {
                        return null;
                    } else {
                        return { 
                            email: response.data.email,
                            name: response.data.id,
                        };
                    }
                } catch (error) {
                    return null;
                }
            }
        })
    ]
});
