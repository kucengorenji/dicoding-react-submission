import './DisplayNote.scss';

const DisplayNote = ({ data }) => {
  const handleArchive = (id) => {};
  const handleDelete = (id) => {};

  return (
    <>
      <div className="note-container">
        {data.map(({ id, title, createdAt, body }) => {
          return (
            <div className="note-item" key={id}>
              <div className="note-item__title">{title}</div>
              <div className="note-item__date">{createdAt}</div>
              <div className="note-item__body">{body}</div>
              <div className="note-item__action">
                <button
                  onClick={() => {
                    handleDelete(id);
                  }}
                  className="note-item__action-delete"
                >
                  hapus
                </button>
                <button
                  onClick={() => {
                    handleArchive(id);
                  }}
                  className="note-item__action-archive"
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

export default DisplayNote;
