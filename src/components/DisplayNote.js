import './DisplayNote.scss';

const DisplayNote = ({ data, onDeleteNote, onArchiveNote }) => {
  const activeNotes = data.filter((note) => note.archived === false);

  return (
    <>
      <div className="note-container">
        {activeNotes.length !== 0 ? (
          activeNotes.map(({ id, title, createdAt, body }) => {
            return (
              <div className="note-item" key={id}>
                <div className="note-item__title">{title}</div>
                <div className="note-item__date">{createdAt}</div>
                <div className="note-item__body">{body}</div>
                <div className="note-item__action">
                  <button
                    onClick={() => {
                      onDeleteNote(id);
                    }}
                    className="note-item__action-delete"
                  >
                    hapus
                  </button>
                  <button
                    onClick={() => {
                      onArchiveNote(id);
                    }}
                    className="note-item__action-archive"
                  >
                    arsipkan
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1>tidak ada catatan</h1>
        )}
      </div>
    </>
  );
};

export default DisplayNote;
