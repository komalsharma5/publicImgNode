
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {

  const [file,setFile] = useState();

  const upload = async() =>{
    const formData = new FormData()
    formData.append("avatar", file)
      await axios.post('http://localhost:5000/api/upload', formData)
    }

  return (
    <div className="App">
        <form action="/stats" enctype="multipart/form-data" method="post" className='border border-1 my-5 mx-auto w-50'>
          <input type='file' className='mt-5' name='avatar' onChange={(e) => setFile(e.target.files[0])}></input> <br></br>
          <button type='button' className='btn btn-primary my-5' onClick={upload}>upload</button>
        </form>
    </div>
  );
}

export default App;
