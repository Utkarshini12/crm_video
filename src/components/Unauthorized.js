import { useNavigate } from "react-router-dom";
import Not from '../assets/403.svg'


function Unauthorized() {
    const navigate = useNavigate(); 
    const goBack = () => navigate(-1); 
    return (
        <section className="bg-light vh-100 d-flex justify-content-center align-items-center text-center">
            <div>
                <h1>Unauthorized</h1>
                <img src={Not} alt="not allowed" />
                <br />
                <p>You do not have access to the requested page</p>
                <div className="flexGrow">
                    <button className="btn btn-primary" onClick={goBack}>Go Back</button>

                </div>
            </div>
        </section>


    )
}

export default Unauthorized; 