import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const {
	handlers: { GET, POST },
	signIn,
	signOut,
	auth,
} = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID!,
			clientSecret: process.env.AUTH_GOOGLE_SECRET!,
			// Since i wont be persisting the user data in a data base, I should add an authoraztion  parameters
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		Github({
			clientId: process.env.AUTH_GITHUB_ID!,
			clientSecret: process.env.AUTH_GITHUB_SECRET!,
			// Since i wont be persisting the user data in a data base, I should add an authoraztion  parameters
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
});
