import {  Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div>
  
        <nav>
          <ul>
            <li>
              <Link to="/qrcode">Generar QR</Link>
            </li>
            <li>
              <Link to="/pdf">Ver PDF(Carta)</Link>
            </li>
            <li>
              <Link to="/adminpage">Ver adminpage</Link>
            </li>
            <li>
              <Link to="/SelectPFD">Ver select</Link>
            </li>
          </ul>
        </nav>
  
    </div>
  );
};

export default AdminPage;
