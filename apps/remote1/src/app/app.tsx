// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from "./nx-welcome";
import { SharedBadge } from '@react-rspack-mf/shared-state';

export function App() {
  return (
    <div>
      <SharedBadge app="remote1" />
      <NxWelcome title="remote1"/>
    </div>
  );
}

export default App;


