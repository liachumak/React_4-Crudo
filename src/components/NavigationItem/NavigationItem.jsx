import './NavigationItem.css';

const NavigationItem = (props) => {
   const { text, isUppercasetext, description } = props

   const descriptionSection = (
         <div className='description'>
             { description }
         </div>
   );
  
   return (
      <div className='common'>
         <div className='text'>
            { isUppercasetext ? text.toUpperCase() : text }
         </div>
         {descriptionSection && descriptionSection }
      </div>
     )
}

export default NavigationItem;