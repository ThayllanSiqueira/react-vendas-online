import { Table as TableAntd, TableProps } from 'antd';

function Table<RecordType extends object = any>(props: TableProps<RecordType>) {
  return <TableAntd {...props} />;
}

export default Table;
