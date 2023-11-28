import './footer.css';
import FooterItem from "../FooterItem";
import NavigationItem from "../NavigationItem";
import { UsersContext} from '../../App';

import { useContext } from 'react';

const Footer = () => {

   const contextData = useContext(UsersContext);
   
   return (
     <footer className="footer">
       <FooterItem content="Головна" isLowersetext={false} />
       <FooterItem content="Про нас" isLowersetext={false} />
       <FooterItem content="Контакти" isLowersetext={false} />
       <FooterItem content="Блог" isLowersetext={false} />
       <div>Total Users Count: {contextData.usersCount}</div>
       <div>Longest Name: {contextData.longestName}</div> 
     </footer>
   );
 };

export default Footer;