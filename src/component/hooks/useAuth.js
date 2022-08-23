import { useSelector } from "react-redux/es/exports";

export function useAuth () {
    const {name,email, token, id} = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        name,
        token,
        id,
    };
}