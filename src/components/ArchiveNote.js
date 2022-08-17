import './ArchiveNote.scss';

const ArchiveNote = ({ data }) => {
  const handleDeleteArchive = (id) => {};
  const handleDeleteNote = (id) => {};

  return (
    <>
      <div className="archive-container">
        {data.map(({ id, title, createdAt, body }) => {
          return (
            <div className="archive-item" key={id}>
              <div className="archive-item__title">{title}</div>
              <div className="archive-item__date">{createdAt}</div>
              <div className="archive-item__body">{body}</div>
              <div className="archive-item__action">
                <button
                  onClick={() => {
                    handleDeleteNote(id);
                  }}
                  className="archive-item__action-delete"
                >
                  hapus
                </button>
                <button
                  onClick={() => {
                    handleDeleteArchive(id);
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
