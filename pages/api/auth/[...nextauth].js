import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import Auth0Provider from "next-auth/providers/auth0";
import EmailProvider  from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
// import clientPromise from "lib/mongodb"

export default NextAuth({
  // Configure one or more authentication providers
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    EmailProvider({
      server: {
        host: "",
        port: "",
        auth: {
          user: "",
          pass: ""
        }
      },
      from: ""
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({

    })
    // ...add more providers here
  ],
  // pages: {
  //   signIn: "/signin",
  // }
})