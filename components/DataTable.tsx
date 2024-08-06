

export const DataTable = ({ data }: { data: Array<Array<string>> }) => {
  const headers = data.shift()!;


  const colCount = headers.length;



  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>



        {data.map((row: Array<string>, index: number) => (
          <tr key={index}>
            {row.map((cell: string, index: number) => <td key={index}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};