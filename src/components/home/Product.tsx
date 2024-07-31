import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/api";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";


export type producPprops = {
    _id: string;
    product?:string
    image: string;
    title: string;
    brand: string;
    availableQuantity: number;
    price: number;
    rating: number

}
const Product = () => {

    const { data } = useGetProductsQuery(undefined);
   
    return (
        <div>


            <div className=" grid grid-cols-3 gap-7 justify-evenly items-center pb-10 ">

                {data?.data.map((item: producPprops) => (
                    <div key={item._id} className="card bg-slate-200 shadow-xl">
                        <figure><img className="h-[200px] w-[300px] hover:scale-125" src={item.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-black"><strong>Title: </strong>{item.title}</h2>
                            <h2 className="text-black"><strong>Brand: </strong>{item.brand}</h2>
                            <h2 className="text-black"><strong>Price: </strong>{item.price}$</h2>
                            <h2 className="text-black"><strong>InStock: </strong>{item.availableQuantity}</h2>
                            <h2 className="text-black"><strong>Rating: </strong><Rating
                                readonly
                                initialRating={item.rating}
                                emptySymbol={<FaRegStar className="icon" />}
                                fullSymbol={<FaStar className="icon text-red-400" />}
                                placeholderSymbol={<FaStarHalfAlt className="icon" />}
                            /></h2>
                            <div className="card-actions ">
                                <Link to={`/productDetails/${item._id}`}><button className="btn btn-secondary">see details</button></Link>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            <h1 className="text-center pb-5">
                <Link to={'/products'}>
                <button className="btn btn-secondary">View all product</button>
                </Link>
            </h1>
        </div>
    );
};

export default Product;