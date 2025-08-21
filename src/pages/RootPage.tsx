import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RootPage() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/albums");
    }, [navigate]);

    return null;
}