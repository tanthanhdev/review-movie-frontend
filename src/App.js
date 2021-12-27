import {
  BrowserRouter,
} from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import styles from './App.module.css';
import { useRoutes } from './routers';

export const App = () => {
  const routes = useRoutes();
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>{routes}</div>
    </BrowserRouter>
  );
};

export default App;
