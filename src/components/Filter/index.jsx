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
            <div className='pb-3'>
                <input value={search} onChange={handelChangeSearch} />
                <button onClick={handelSearch}>Search</button>
            </div>
        </>
    )

}

export default Filter;