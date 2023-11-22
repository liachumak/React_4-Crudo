import './footer.css';
import FooterItem from "../FooterItem";
import NavigationItem from "../NavigationItem";
import { UsersContext} from '../../App';

import { useContext } from 'react';

const Footer = () => {

   const contextData = useContext(UsersContext);

   console.log(contextData)

   return (
      <footer>
         <FooterItem content='FOOTER' isLowersetext={true} />
         <div className="footer">
         <FooterItem content='Головна' isLowersetext={false} />
         <FooterItem content='Про нас' isLowersetext={false} />
         <FooterItem content='Контакти' isLowersetext={false} />
         <FooterItem content='Блог' isLowersetext={false} />
         <NavigationItem text="navItem" />
         <div>Total Uswers Count: {contextData.usersCount}</div>
         </div>
      </footer>);
}

export default Footer;