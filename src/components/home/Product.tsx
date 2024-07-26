import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/api";


export type producPprops = {
    _id: string;
    image: string;
    title: string;
    brand:string;
    availableQuantity: number;
    price:number;
    rating: number

  }
const Product = () => {

    const {data} = useGetProductsQuery(undefined);
    console.log(data?.data)
    return (
        <div className=" grid grid-cols-3 gap-7 justify-evenly items-center pb-10 ">
           
          {data?.data.map((item : producPprops) => (
                                <div key={item._id} className="card bg-slate-200 shadow-xl">
                                    <figure><img className="h-[200px] w-[300px] hover:scale-125" src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-black"><strong>Title: </strong>{item.title}</h2>
                                        <h2 className="text-black"><strong>Brand: </strong>{item.brand}</h2>
                                        <h2 className="text-black"><strong>Price: </strong>{item.price}$</h2>
                                        <h2 className="text-black"><strong>InStock: </strong>{item.availableQuantity}</h2>
                                        <h2 className="text-black"><strong>Rating: </strong>{item.rating}</h2>
                                        <div className="card-actions ">
                                        <Link to={`/allDetails/${item._id}`}><button className="btn btn-secondary">View package</button></Link>   
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
        </div>
    );
};

export default Product;