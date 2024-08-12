import { format } from 'sql-formatter';


export function SQL({ sql }: { sql: string }) {

    const formattedSQL = format(sql);

    return (
        <div className="flex flex-wrap overflow-x-auto">
            <pre className="text-xs text-left rtl:text-right p-4 whitespace-pre-wrap bg-zinc-100">
                <code className="language-sql">
                    {formattedSQL}
                </code>
            </pre>
        </div>
    );

}