/** Temporary placeholder for the App2 Feature1 page */
import { Link } from '../../common/components';
import { routes } from '../../common/routes';

export const App_2_Feature_1 = () => (
    <div>
        <h2>
            Hello this is the first feature page for App2.
        </h2>
        <p>
            App2 the second of two hypothetical applications that could contribute the React-Redux-Django application.
            This is a placeholder for the first feature of that application.  Here's a link back to
            <Link to={routes.app_2.base} >
                <span> App_2's base page.</span>
            </Link>
            .
        </p>
    </div>
  );
 