

export default function StatList({top1, top2, top3, stat1, stat2, stat3}) {

    return (

        <>

            <div>
                <ul className="flex flex-col gap-2 p-4 text-text-primary">
                    <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                        <p>{top1}</p>
                        <p>{stat1}</p>
                    </li>
                    <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                        <p>{top2}</p>
                        <p>{stat2}</p>
                    </li>
                    <li className="flex flex-row rounded-md p-1 hover:bg-bg-110 justify-between">
                        <p>{top3}</p>
                        <p>{stat3}</p>
                    </li>
                </ul>

            </div>


        </>

    )

}