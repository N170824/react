import { useState } from "react";
import { GoCircle, GoCheckCircle } from "react-icons/go";

const ToDoList = () => {

  const [itemsList, setItemsList] = useState([]);
  const [item, setItem] = useState('');

  function addItem() {
    if (item.trim() !== '') {
      setItemsList([...itemsList, { text: item, completed: false }]);
      setItem('');
    }
  }

  const getItem = (e) => setItem(e.target.value);

  function removeItem(index) {
    setItemsList(itemsList.filter((_, i) => i !== index));
  }
  
  function toggleComplete(index) {
    setItemsList(itemsList.map((itm, i) => 
      i === index ? { ...itm, completed: !itm.completed } : itm
    ));
  }

  return (
    <>
      <h2>Todo List</h2>
      <input type="text" placeholder="Add a new task ..." value={item} onChange={getItem}
        style={{
          width: '300px', height: '35px', margin: '10px',
          border: '1px solid #ccc', borderRadius: '8px', padding: '0 10px'
        }}
      />
      <button
        onClick={addItem}
        style={{
          width: '35px', height: '35px', margin: '8px', backgroundColor: '#1e81ddff',
          borderRadius: '8px', fontSize: '20px', border: 'none',
          cursor: 'pointer', color: "white"
        }}>
        +
      </button>
      <div style={{ marginTop: '20px' }}>
        {itemsList.map((itm, index) => (
          <div
            key={index}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '360px',
              padding: '10px 15px',
              margin: '8px 0',
              backgroundColor: '#f4f4f4',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              fontSize: '15px',
            }}
          >
            <span
              style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 10 }}
            >
              <span
                style={{ cursor: 'pointer', fontSize: '24px' }}
                onClick={() => toggleComplete(index)}
                title="Mark as completed"
              >
                {itm.completed ? <GoCheckCircle color="#1e81ddff" /> : <GoCircle color="#bbb" />}
              </span>
              <span
                style={{
                  textDecoration: itm.completed ? 'line-through' : 'none',
                  color: itm.completed ? '#999' : '#222'
                }}
              >
                {itm.text}
              </span>
            </span>
            <button
              style={{ color: 'red', background: 'none', border: 'none', fontSize: 20, marginLeft: 6, cursor: 'pointer'}}
              onClick={() => removeItem(index)}
              title="Remove"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
