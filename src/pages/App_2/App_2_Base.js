/** Temporary placeholder for the App2 base page */
import { Link } from '../../common/components';
import { routes } from '../../common/routes';

export const App_2_Base = () => (
    <div>
        <h2>
            Hello this is the base for App 2.
        </h2>
        <p>
            App2 is the second of two hypothetical applications that could contribute the React-Redux-Django application.
            This is the base page for that application.  Here's a link to the 
            <Link to={routes.app_2.feature_1}>
            <span> first feature </span>
            </Link>
            in that appliation.
        </p>
    </div>
  );
 