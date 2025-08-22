import { SignedIn, SignedOut, SignInButton, useAuth, UserButton, UserProfile } from "@clerk/clerk-react";
import React from "react";
function LandingPage(){
    return <section>
        <h1>Landing Page</h1>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </section>
}
export default LandingPage;