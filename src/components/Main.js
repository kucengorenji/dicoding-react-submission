import './Main.scss';
import { useState } from 'react';
import InputNote from './InputNote';
import DisplayNote from './DisplayNote';
import ArchiveNote from './ArchiveNote';
import { getInitialData } from '../data';
import SearchBar from './SearchBar';

const Main = () => {
  const initialData = getInitialData();

  const [data, setData] = useState(initialData);
  const [searchFilter, setSearchFilter] = useState('');
  const [isInputFormActive, setIsInputFormActive] = useState(false);

  const onInsertNote = (item) => {
    setData([...data, item]);
  };
  const onArchiveNote = (id) => {
    const archiveItem = (data.filter((item) => item.id === id)[0].archived =
      !data.filter((item) => item.id === id)[0].archived);
    setData([...data]);
    console.log(data)
  };

  const onDeleteNote = (id) => {
    const deleteItem = data.filter((item) => item.id !== id);
    setData(deleteItem);
  };

  const onSearchNote = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchFilter(query);
  };

  const filterDataQuery = data.filter((item) => {
    if (searchFilter) {
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
      />
      <DisplayNote
        data={filterDataQuery}
        onArchiveNote={onArchiveNote}
        onDeleteNote={onDeleteNote}
      />
      <ArchiveNote
        data={filterDataQuery}
        onArchiveNote={onArchiveNote}
        onDeleteNote={onDeleteNote}
      />
    </div>
  );
};

export default Main;
