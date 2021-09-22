import React from 'react'
import Table from '../components/Table/Table';
import ModalRemove from '../components/ModalRemove';
import ModalForm from '../components/ModalForm';

const cn = withNaming({ e: '__', m: '--' });

function Page() {

    const block = cn("page");
    const dispatch = useDispatch();
    const [viewModalRemove, setViewModalRemove] = useState(false);
    const [viewModalForm, setViewModalForm] = useState(false);

    return (
        <div classNames={"page"}>
            <div className = "navigation"></div>
            <div className = "menu"></div>
            <Table />
            {viewModalForm && <ModalForm />}
        </div>
    )
}

export default Page
