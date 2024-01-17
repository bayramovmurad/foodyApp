const OfferComponent = () => {
  return (
    <div>
          <table className=" bg-white w-[1100px]">
              <thead>
                  <tr>
                      <th className=" border-y p-5">ID</th>
                      <th className=" border p-5">Image</th>
                      <th className=" border p-5">Title</th>
                      <th className=" border p-5">Descriptions</th>
                      <th className=" border p-5">Edit</th>
                      <th className=" border p-5">Bin</th>
                  </tr>
              </thead>
              {
                  ["Pizza"].map((item) =>
                      <tbody>
                          <tr>

                              <td className=" border- text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap"><span className="border px-2 py-1 rounded-lg">9777</span></td>
                              <td className="border text-center  p-1 w-10" ><img src={`/adminImg/OfferPage/${item}.svg`} /></td>
                              <td className="border text-center  p-1 max-w-[290px] overflow-x-auto whitespace-nowrap">{item}</td>
                              <td className="border text-center font-semibold  p-1">{item}</td>
                              <td className="border font-semibold  p-1"><img src="/adminImg/OfferPage/PenTo.svg" /></td>
                              <td className="border font-semibold  p-1"><img src="/adminImg/OfferPage/Bin.svg" /></td>
                          </tr>
                         

                      </tbody>
                  )
              }
          </table>
    </div>
  )
}
export default OfferComponent