import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const allowedEmail = (process.env.ALLOWED_EMAIL || "").trim().toLowerCase();

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      const email = (user?.email || "").trim().toLowerCase();
      return !!email && email === allowedEmail;
    },
  },
});
