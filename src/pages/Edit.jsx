import React, { useState, useRef } from 'react';
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { toJpeg } from 'html-to-image';
 import { download } from 'downloadjs';

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = useRef(null); 

  const saveMeme = () => {
    if (memeRef.current) {
      toJpeg(memeRef.current, { quality: 0.95 })
        .then((dataUrl) => {
          download(dataUrl, 'meme.jpeg');
        })
        .catch((err) => {
          console.error('Failed to export meme', err);
        });
    }
  };

  const addText = () => setCount(count + 1);
  const imageUrl = params.get("url");

  return (
    <div>
      <div style={{width:"700px", border:"1px solid",backgroundColor:"white",position:"relative",padding:"10px"}} 
       ref={memeRef} className="meme mt-5 mb-5">
        <img src={imageUrl} alt="Meme to edit" width="250px" />
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <Text key={index} />
          ))}
      </div>

      <button onClick={addText}  style={{
    backgroundColor: '#007bff', // Blue
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    marginRight: '10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }}>Add Text</button>
      <button onClick={saveMeme} style={{
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  }}>Save</button>
    </div>
  );
};

export default EditPage;



