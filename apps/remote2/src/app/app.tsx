// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from "./nx-welcome";
import { SharedBadge } from '@react-rspack-mf/shared-state';

export function App() {
  return (
    <div>
      <SharedBadge app="remote2" />
      <NxWelcome title="remote2"/>
    </div>
  );
}

export default App;


