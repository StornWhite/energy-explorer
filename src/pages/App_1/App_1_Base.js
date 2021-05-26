/** Temporary placeholder for the App1 base page */
import { Link } from '../../common/components';
import { routes } from '../../common/routes';

export const App_1_Base = () => (
    <div>
        <h2>
            Hello this is the base for App1.
        </h2>
        <p>
            App1 is one of two hypothetical applications that could contribute the React-Redux-Django application.
            This is the base page for that application.  Here's a link to the 
            <Link to={routes.app_1.feature_1}>
            <span> first feature </span>
            </Link>
            in that appliation.
        </p>
    </div>
  );
  