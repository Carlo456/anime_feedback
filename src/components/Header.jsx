import React from 'react'

const Header = ({text, bgColor, textColor}) => {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
      }
    
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>        
    </header>
  )
}

Header.defaultProps = {
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ffa695",
    text: "Anime Feedback"
}


export default Header