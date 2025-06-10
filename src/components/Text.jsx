import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

const Text = () => {
  const nodeRef = useRef(null); // useRef replaces findDOMNode
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} style={{ display: 'inline-block' }}>
        {editMode ? (
          <input
            autoFocus
            onBlur={() => setEditMode(false)}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              border: '1px solid ',
              padding: '5px',
            }}
          />
        ) : (
          <h1
            onDoubleClick={() => setEditMode(true)}
            style={{
              cursor: 'move',
              fontSize: '24px',
              textShadow: '2px 2px 4px black',
            }}
          >
            {val}
          </h1>
        )}
      </div>
    </Draggable>
  );
};

export default Text;

