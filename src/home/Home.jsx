import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom, usersAtom } from '_state';
import { useUserActions } from '_actions';
import { NavLink } from 'react-router-dom';
import "../assets/styles/home.css";

export { Home };

function Home() {
    const auth = useRecoilValue(authAtom);
    const users = useRecoilValue(usersAtom);
    const userActions = useUserActions();

    useEffect(() => {
        userActions.getAll();
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Welcome {auth?.firstName}!</h1>
                  <strong className='main'><u>FITNESS TRACKER</u></strong>
            <div className="options">
                <NavLink to="/bmi">
                    <button className="btn btn-primary m-3">BMI</button>
                </NavLink>
                <NavLink  to="/metabolic"><button  className="btn btn-primary m-3">Metabolic Rate</button></NavLink>
                <NavLink  to="/bodyfat"><button  className="btn btn-primary m-3">Body Fat Percentage</button></NavLink>
                <NavLink  to="/idealbody"><button  className="btn btn-primary m-3">Ideal Body Weight</button></NavLink>
            </div> 
        </div>
    );
}
