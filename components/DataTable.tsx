import { E2CTableData } from "@/app/types/types";

export const DataTable = ({ data }: { data : E2CTableData }) => {
  const headers = data[0];

  const colCount = headers.length;

  return (
    <table className="text-sm text-left rtl:text-right px-4">
      <thead className="bg-gray-50">
        <tr>
          {headers.map(header => <th className="border" key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>

        {[...data.slice(1)].map((row: Array<string>, index: number) => (
          <tr key={index}>
            {row.map((cell: string, index: number) => <td className="border" key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};