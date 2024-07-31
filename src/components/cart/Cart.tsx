import { useGetAllCartQuery } from "../../redux/api/api";
import { producPprops } from "../home/Product";

const Cart = () => {
     const { data } = useGetAllCartQuery(undefined);
     console.log(data?.data);
     return (
          <div className="pt-20">

               <div className="overflow-x-auto">
                    {data?.data.map((item: producPprops) => (
                         <table key={item._id} className="table">
                              {/* head */}
                              <thead>
                                   <tr>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Favorite Color</th>
                                        <th></th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {/* row 1 */}
                                   <tr>
                                        <td>
                                             <div className="flex items-center gap-3">
                                                  <div className="avatar">
                                                       <div className="mask mask-squircle h-12 w-12">
                                                            <img
                                                                 src={item?.product?.image}
                                                                 alt="Avatar Tailwind CSS Component" />
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="font-bold">Hart Hagerty</div>
                                                       <div className="text-sm opacity-50">United States</div>
                                                  </div>
                                             </div>
                                        </td>
                                        <td>
                                             Zemlak, Daniel and Leannon
                                             <br />
                                             <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                             <button className="btn btn-ghost btn-xs">details</button>
                                        </th>
                                   </tr>
                                   {/* row 2 */}
                              </tbody>
                         </table>
                    )
                    )}

               </div>
          </div>
     );
};

export default Cart;