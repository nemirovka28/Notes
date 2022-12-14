import { useSelector } from "react-redux/es/exports";

export function useAuth () {
    const {email, token, id} = useSelector(state => state.auth)
    console.log(email, token, id)
    return {
        isAuth: !!email,
        email,
        token,
        id,
    };
}