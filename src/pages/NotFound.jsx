import { useRouteError, useNavigate } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <h1 className="error-title">Oops!</h1>
            <p className="error-message">{error.data}</p>
            <p className="error-code">Error: {error.status} - {error.statusText || error.message}</p>
            <button onClick={() => navigate("/")} className="error-link">Go back to Home</button>
            <button className="back-button" onClick={() => navigate(-1)}>Go Back</button> {/* New button */}
        </div>
    );
};

export default NotFound;
