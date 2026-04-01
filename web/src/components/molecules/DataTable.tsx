import type { ReactNode } from "react";
import { Div, Table, Tbody, Td, Th, Thead, Tr } from "../atoms/html";

export interface DataTableColumn<T> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
  align?: "left" | "center" | "right";
}

interface DataTableProps<T> {
  columns: Array<DataTableColumn<T>>;
  rows: T[];
  rowKey: (row: T) => string | number;
  emptyMessage?: string;
}

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  emptyMessage = "표시할 데이터가 없습니다.",
}: DataTableProps<T>) {
  return (
    <Div className="data-table__scroll">
      <Table className="data-table">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th
                key={column.key}
                className={column.align ? `is-align-${column.align}` : undefined}
              >
                {column.header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <Tr key={rowKey(row)}>
                {columns.map((column) => (
                  <Td
                    key={column.key}
                    className={column.align ? `is-align-${column.align}` : undefined}
                  >
                    {column.render(row)}
                  </Td>
                ))}
              </Tr>
            ))
          ) : (
            <Tr>
              <Td className="data-table__empty" colSpan={columns.length}>
                {emptyMessage}
              </Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </Div>
  );
}
