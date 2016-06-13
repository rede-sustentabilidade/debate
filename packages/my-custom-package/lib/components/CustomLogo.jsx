/*
The original Logo components is defined using React's
functional stateless component syntax, so we redefine
it the same way.
*/

import React from 'react';



const CustomLogo = ({logoUrl, siteTitle}) => {
  return (
    <h1 className="logo-text"><a href="/"><img src="/logo-rede.png" width="200" /></a></h1>
  )
}

export default CustomLogo;
