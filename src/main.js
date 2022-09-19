import { welcome } from './components/welcome.js';
import { register } from './components/register.js';
import { signIn } from './components/signin.js';

const root = document.getElementById('root');
const routes = {
  '/': welcome,
  '/register': register,
  '/signin': signIn,

};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.appendChild(component());
};

root.appendChild(component());
