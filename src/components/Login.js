import { useAuth0 } from "@auth0/auth0-react";
import { useSearchParams } from "react-router-dom";

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	let [searchParams, setSearchParams] = useSearchParams();
	const organization = searchParams.get("organization");
	const invitation = searchParams.get("invitation");
	loginWithRedirect({ organization, invitation });
};

export default Login;
