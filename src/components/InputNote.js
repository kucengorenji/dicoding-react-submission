import { useState } from 'react';
import './InputNote.scss';

const InputNote = ({
  onSearch,
  isActive,
  onCloseInputNote,
  onInsertNote,
  inputDate,
}) => {
  const [data, setData] = useState({
    id: 5,
    title: '',
    body: '',
    createdAt: inputDate,
    archived: false,
  });

  const handleSubmit = () => {
    onInsertNote(data);
  };

  return (
    <div className={`input-note ${isActive ? 'active' : ''}`}>
      <div className="input-note-container">
        <div className="input-note-header">
          <h1>Buat Catatan</h1>
          <button onClick={onCloseInputNote}>close input form</button>
        </div>
        <form type="submit" className="input-note-form">
          <input
            className="input-note-form__title"
            type="text"
            placeholder="insert note title"
          />
          <input
            className="input-note-form__text-area"
            type="text-area"
            placeholder="insert your note here..."
          />
          <button onSubmit={handleSubmit} className="input-note-form__button">
            insert note
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputNote;
