import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { setCurrentUser } from "../../redux/user/user.actions";
import api from "../../api/api";
import jwt from "jwt-simple";

const CustomButton = (props) => {
    return (
        <Container>
            <Button {...props}>LNMIIT ID Login</Button>
        </Container>
    );
};

export default function Login() {
    const dispatch = useDispatch();
    const handleSuccess = async (res) => {
        let data = {
            email: res.profileObj.email,
            first_name: res.profileObj.givenName,
            last_name: res.profileObj.familyName,
            full_name:
                res.profileObj.givenName + " " + res.profileObj.familyName,
            userCode: 4,
            type: "Student",
        };
        const domain = data.email.split("@");
        if (domain[1] === "lnmiit.ac.in") {
            await api
                .post("/user/type/", { email: data.email })
                .then((res) => {
                    let type = res?.data?.data.type;
                    let code = res?.data?.data.code;

                    data = {
                        ...data,
                        userCode : code,
                        type : type
                    }

                    let token = jwt.encode(
                        data,
                        process.env.REACT_APP_JWT_SECRET
                    );
                    localStorage.setItem("_qid", token);
                    dispatch(setCurrentUser(data));
                    toast.success(`Welcome ${data.full_name}`);
                })
                .catch((err) => {
                    toast.error("Something Went Wrong, While from Server Side");
                    console.log(err);
                });
        } else toast.error("Login Failed, Please Use LNMIIT ID only");
    };

    const handleFailure = (res) => {
        console.log(res);
        if (res.error === "popup_closed_by_user") toast.error("Login Failed");
        else
            toast.error(
                "Login Failed, Retry Or Contact Library Adminstration."
            );
    };

    return (
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} // your Google app client ID
            render={(renderProps) => (
                <CustomButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                />
            )}
            cookiePolicy={"single_host_origin"}
            onSuccess={handleSuccess}
            onFailure={handleFailure}
        />
    );
}

const Container = styled.div`
    width: 100%;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100%;
    font-family: var(--font-text);
    font-weight: 500;
    font-size: 18px;
    outline: none;
    background-color: blueviolet;
    color: white;
    border-radius: 5px;
    padding: 8px 15px;
    border: none;
    cursor: pointer;
`;
