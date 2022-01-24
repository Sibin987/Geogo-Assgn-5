import './App.css';
//import React from react;

import Pform from './Components/Pform';
import PostList from './Components/PostList';

function App() {
    return ( <div className='abk'>
  

     <h1>Post Creation Form By Sibin Varghese</h1>
      <div clsssName="row">
    
       <div className='column'>
        <div className='fm1'>
            <Pform/>
        </div>
       
      </div>
        <div className='column'>
          <PostList/>
        </div>
        </div>

      
      </div> 
    );
}

export default App;