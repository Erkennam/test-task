import AppRouters from './routes/appRouters';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <AppRouters></AppRouters>
      <ToastContainer position='top-right'></ToastContainer>
    </div>
  );
}

export default App;
