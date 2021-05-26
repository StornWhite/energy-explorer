/** Temporary placeholder for the App1 Feature1 page */
import { Link } from '../../common/components';
import { routes } from '../../common/routes';

export const App_1_Feature_1 = () => (
    <div>
        <h2>
            Hello this is the first feature page for App1.
        </h2>
        <p>
            App1 is one of two hypothetical applications that could contribute the React-Redux-Django application.
            This is a placeholder for the first feature of that application.  Here's a link back to
            <Link to={routes.app_1.base} >
                <span> App1's base page</span>
            </Link>
            .
        </p>
    </div>
  );
 