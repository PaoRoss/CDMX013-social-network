import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
//import { signIn } from './components/sign-in.js';
const root = document.getElementById('root');
const routes = {
  '/': welcome,
  '/register': register,
};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  console.log(root.firstChild)
  //root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
root.appendChild(component());
