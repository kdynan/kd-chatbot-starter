import { E2CTableData } from "@/app/types/types";

export const DataTable = ({ data }: { data : E2CTableData }) => {
  const headers = data[0];

  const colCount = headers.length;

  return (
    <table className="w-full text-sm text-center rtl:text-right">
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>



        {[...data.slice(1)].map((row: Array<string>, index: number) => (
          <tr key={index}>
            {row.map((cell: string, index: number) => <td key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};