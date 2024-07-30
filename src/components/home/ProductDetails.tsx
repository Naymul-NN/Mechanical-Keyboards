import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/api";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();

    const { data } = useGetSingleProductQuery(id)
    // console.log(data);
    return (
        <div className="py-24 w-2/3 mx-auto">
            <div className="card bg-slate-200 shadow-xl">
                <figure><img className="h-[200px] w-[400px] hover:scale-125" src={data?.data?.image} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-black"><strong>Description: </strong>{data?.data?.description}</h2>
                    <h2 className="text-black"><strong>Title: </strong>{data?.data?.title}</h2>
                    <h2 className="text-black"><strong>Brand: </strong>{data?.data?.brand}</h2>
                    <h2 className="text-black"><strong>Price: </strong>{data?.data?.price}$</h2>
                    <h2 className="text-black"><strong>InStock: </strong>{data?.data?.availableQuantity}</h2>
                    <h2 className="text-black"><strong>Rating: </strong><Rating
                        readonly
                        initialRating={data?.data?.rating}
                        emptySymbol={<FaRegStar className="icon" />}
                        fullSymbol={<FaStar className="icon text-red-500" />}
                        placeholderSymbol={<FaStarHalfAlt className="icon" />}
                    /></h2>
                    <button className="btn btn-secondary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;