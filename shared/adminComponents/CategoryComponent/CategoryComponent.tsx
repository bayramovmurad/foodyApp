import { table } from "console"

const CategoryComponent = () => {
    return (
        <div>


            <table className="border-collapse bg-white w-[1100px]">
                <thead>
                    <tr>
                        <th className=" border p-5">ID</th>
                        <th className=" border p-5">Image</th>
                        <th className=" border p-5">Name</th>
                        <th className=" border p-5">Slug</th>
                    </tr>
                </thead>
                {
                    ["Pizza"].map((item) =>
                        <tbody>
                            <tr>

                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                                <td className="border text-center  p-1 w-10" ><img src={`/adminImg/CategoryPage/${item}.svg`} /></td>
                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">{item}</td>
                                <td className="border text-center font-semibold  p-1">{item}</td>
                            </tr>
                            <tr>

                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                                <td className="border text-center  p-1 w-10" ><img src={`/adminImg/CategoryPage/${item}.svg`} /></td>
                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">{item}</td>
                                <td className="border text-center font-semibold  p-1">{item}</td>
                            </tr>
                            <tr>

                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                                <td className="border text-center  p-1 w-10" ><img src={`/adminImg/CategoryPage/${item}.svg`} /></td>
                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">{item}</td>
                                <td className="border text-center font-semibold  p-1">{item}</td>
                            </tr>
                            <tr>

                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                                <td className="border text-center  p-1 w-10" ><img src={`/adminImg/CategoryPage/${item}.svg`} /></td>
                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">{item}</td>
                                <td className="border text-center font-semibold  p-1">{item}</td>
                            </tr>
                            <tr>

                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                                <td className="border text-center  p-1 w-10" ><img src={`/adminImg/CategoryPage/${item}.svg`} /></td>
                                <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">{item}</td>
                                <td className="border text-center font-semibold  p-1">{item}</td>
                            </tr>

                        </tbody>
                    )
                }
            </table>


        </div>
    )
}
export default CategoryComponent