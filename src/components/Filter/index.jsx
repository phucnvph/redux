
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAction } from '../../redux/actions';

const Filter = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    const handelChangeSearch = (e) => {
        let value = e.target.value;
        setSearch(value);
    }

    const handelSearch = () => {
        dispatch(searchAction(search));
    }
    return (
        <>
            <div>
                <input value={search} onChange={handelChangeSearch} />
                <button onClick={handelSearch}>Auto Search</button>
            </div>
        </>
    )

}

export default Filter;