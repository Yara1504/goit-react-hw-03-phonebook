import css from './Filter.module.css';

function Filter({ filter, changeFilter }) {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={css.input}
      />
    </label>
  );
}

export default Filter;