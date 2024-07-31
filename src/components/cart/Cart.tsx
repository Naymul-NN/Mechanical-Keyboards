import { useGetAllCartQuery } from "../../redux/api/api";
import { producPprops } from "../home/Product";

const Cart = () => {
     const { data , isLoading} = useGetAllCartQuery(undefined);
     console.log(data?.data);
         
     if (isLoading) {
          return (
              <div className="flex justify-center items-center min-h-screen">
                 <span className="loading loading-spinner text-warning"></span>
                 <span className="loading loading-spinner text-error"></span>
              </div>
          );
      }
     
     return (
          <div className="pt-20">
               <div className="overflow-x-auto">
                   
                         <table  className="table">
                              {/* head */}
                              <thead>
                                   <tr>
                                        <th>Name/brand</th>
                                        <th>price</th>
                                        <th>see full data</th>
                                        <th> Actions</th>
                                   </tr>
                              </thead>
                              {data?.data.map((item: producPprops) => (
                              <tbody key={item._id}>
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
                                                       <div className="font-bold">{item?.product?.title}</div>
                                                       <div className="text-sm opacity-50">{item?.product?.brand}</div>
                                                  </div>
                                             </div>
                                        </td>
                                        <td>
                                            {item.product.price} $
                                        </td>
                                        <td><button className="btn btn-ghost btn-xs">details</button></td>
                                        <th>
                                        <button className="btn btn-ghost btn-xs">remove</button>
                                        </th>
                                   </tr>
                              </tbody>
                    )
               )}
               </table>

               </div>
          </div>
     );
};

export default Cart;