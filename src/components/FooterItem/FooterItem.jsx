const FooterItem = (props) => {
	const { content, isLowersetext } = props;
	let textToRender;
	!isLowersetext
	  ? (textToRender = content.toLowerCase())
	  : (textToRender = content.toUpperCase());
	return <div>{textToRender}</div>;
  };
  
  export default FooterItem;