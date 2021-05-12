import { useState } from 'react';
import { DataProvider } from './classes/DataProvider';
import DataPresenter from './components/DataPresenter';
import { Pagination } from './components/Pagination';


const App = () => {
    const [page, setPage] = useState(1);
    const dataProvider = new DataProvider();

    return (
        <div>
            <DataPresenter data={dataProvider.getData(page)} />
            <Pagination currentPage={page} maxPageCount={10} setPage={setPage} />
        </div>
    );
}

export default App;
