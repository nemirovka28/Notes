import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../store/contacts/contacts-selectors';
import { updateFilter } from '../../store/contacts/contacts-actions'


const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onUpdateFilter = event => dispatch(updateFilter(event.target.value));
    return (
        <label className={s.filter}>
            Find contacts by name
            <input className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={onUpdateFilter}
            />
        </label>
    )
}

export default Filter;