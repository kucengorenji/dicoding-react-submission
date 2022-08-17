import './Main.scss';
import { useState } from 'react';
import InputNote from './InputNote';
import DisplayNote from './DisplayNote';
import ArchiveNote from './ArchiveNote';
import { getInitialData, showFormattedDate } from '../data';
import SearchBar from './SearchBar';

const Main = () => {
  const initialData = getInitialData();
  const formatDate = showFormattedDate();
  const [data, setData] = useState(initialData);
  const [searchFilter, setSearchFilter] = useState('');
  const [note, setNote] = useState(data);
  console.log(formatDate);
  const [isInputFormActive, setIsInputFormActive] = useState(false);

  const onInsertNote = (item) => {
    setData((item) => {
      return {
        data: [...data, item],
      };
    });
  };
  const onArchiveNote = (item) => {
    if (item.archived) {
      item.archived = false;
    } else {
      item.archived = true;
    }

    setData([...data, item]);
  };

  const onDeleteArchiveNote = (item) => {};

  const onDeleteNote = (item) => {
    const deleteItem = item.filter((item) => item.id !== item.id);
    this.setState({ initialData: deleteItem });
  };
  const onSearchNote = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchFilter(query);
  };

  const filterDataQuery = data.filter((item) => {
    if (searchFilter !== '') {
      return item.title.toLowerCase().includes(searchFilter);
    } else {
      return item;
    }
  });

  const onClickInputNote = () => {
    setIsInputFormActive(true);
  };

  const onCloseInputNote = () => {
    setIsInputFormActive(false);
  };

  return (
    <div className="main">
      <SearchBar
        onClickInputNote={onClickInputNote}
        onSearchNote={onSearchNote}
      />
      <InputNote
        onCloseInputNote={onCloseInputNote}
        isActive={isInputFormActive}
        onInsertNote={onInsertNote}
        inputDate={formatDate}
      />
      <DisplayNote
        data={filterDataQuery}
        onArchiveNote={onArchiveNote}
        onDeleteNote={onDeleteNote}
      />
      <ArchiveNote
        data={filterDataQuery}
        onDeleteArchiveNote={onDeleteArchiveNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  );
};

export default Main;
