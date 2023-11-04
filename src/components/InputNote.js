import { useState } from 'react';
import './InputNote.scss';

const InputNote = ({ isActive, onCloseInputNote, onInsertNote }) => {
  const [data, setData] = useState({
    id: new Date().toISOString(),
    title: '',
    body: '',
    archived: false,
    createdAt: new Date().toISOString(),
  });

  const handleTitle = (e) => {
    e.preventDefault();
    setData({
      ...data,
      title: e.target.value,
    });
  };

  const handleBody = (e) => {
    e.preventDefault();
    setData({
      ...data,
      body: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onInsertNote(data);
    onCloseInputNote();
    setData({
      title: '',
      body: '',
      archived: false,
    });
  };

  return (
    <div className={`input-note ${isActive ? 'active' : ''}`}>
      <div className="input-note-container">
        <div className="input-note-header">
          <h1>Buat Catatan</h1>
          <button className="close-button" onClick={onCloseInputNote}>
            close input form
          </button>
        </div>
        <form type="submit" onSubmit={handleSubmit} className="input-note-form">
          <input
            className="input-note-form__title"
            type="text"
            placeholder="insert note title"
            onChange={handleTitle}
            value={data.title}
            required
          />
          <textarea
            className="input-note-form__text-area"
            placeholder="insert your note here..."
            onChange={handleBody}
            value={data.body}
            required
          />
          <button onClick={handleSubmit} className="input-note-form__button">
            insert note
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputNote;
