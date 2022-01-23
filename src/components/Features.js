import React from 'react';
import featureimage from '../images/pic9.png'

function Features() {
  return (
    <div id='features'>
     <div className='features-model'>
         <img src={featureimage} alt='feature-image' />
     </div>
     <div className='features-text'>
         <h2>Features</h2>
         <h3>This Application is my small <span> project</span></h3>
         <p>I want to create some crash courses for beginers on React, javascript, Html and CSS,
             In future you can watch the tutorials on my Youtube Channel <i>"CodeFalcon"</i>.
         </p>

     <button>View More Features</button>
     </div>
    </div>
  )
}

export default Features;
