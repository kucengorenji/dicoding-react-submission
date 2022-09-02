import './ArchiveNote.scss';

const ArchiveNote = ({ data, onDeleteNote }) => {
  const activeNotes = data.filter((note) => note.archived === true);

  return (
    <>
      <h1 className="archive-title">ArchiveNote</h1>
      <div className="archive-container">
        {activeNotes.map(({ id, title, createdAt, body }) => {
          return (
            <div className="archive-item" key={id}>
              <div className="archive-item__title">{title}</div>
              <div className="archive-item__date">{createdAt}</div>
              <div className="archive-item__body">{body}</div>
              <div className="archive-item__action">
                <button
                  onClick={() => {
                    onDeleteNote(id);
                  }}
                  className="archive-item__action-delete"
                >
                  hapus
                </button>
                <button
                  onClick={() => {
                    onDeleteNote(id);
                  }}
                  className="archive-item__action-archive"
                >
                  arsipkan
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ArchiveNote;
