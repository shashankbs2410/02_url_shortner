import { GoogleOAuthProvider } from "@react-oauth/google";
import { useSelector } from "react-redux";

import Interface from "../components/inputForm/Interface";
import GoogleLoginComponent from "../components/login/GoogleLoginComponent";
import ImageHome from "../components/images/ImageHome";
import AllLinks from "../components/allLinks/AllLinks";

const Home = () => {
  const allLinks = useSelector((state) => state.links.allLinks);
  const viewAllLinks = useSelector((state) => state.ui.viewAllLinks);
  const isSignedIn = useSelector((state) => state.ui.isSignedIn);

  return (
    <div>
      <GoogleOAuthProvider clientId="510666409059-2v0h3v9rqgn12fcfnnd7tjj0s1tbie3k.apps.googleusercontent.com">
        <GoogleLoginComponent />
      </GoogleOAuthProvider>
      {isSignedIn && !viewAllLinks && <ImageHome />}
      {isSignedIn && !viewAllLinks && (
        <div>
          <Interface allLinks={allLinks} />
        </div>
      )}
      {isSignedIn && allLinks.length > 0 && viewAllLinks && (
        <AllLinks allLinks={allLinks} />
      )}
    </div>
  );
};

export default Home;
