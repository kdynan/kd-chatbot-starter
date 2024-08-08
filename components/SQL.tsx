import { format } from 'sql-formatter';


export function SQL({ sql }: { sql: string }) {

    const formattedSQL = format(sql);

    return (
        <div className="overflow-x-auto">
            <pre className="text-sm text-left rtl:text-right p-4 whitespace-pre-wrap">
                <code className="language-sql">
                    {formattedSQL}
                </code>
            </pre>
        </div>
    );

}