import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/api/api";

const ProductDetails = () => {
    const { id } = useParams();

    const { data } = useGetSingleProductQuery(id)
    console.log(data);
    return (
        <div className="pt-20">
            <div className="card bg-slate-200 shadow-xl">
                <figure><img className="h-[300px] w-[600px] hover:scale-125" src={data?.data?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-black"><strong>Title: </strong>{data?.data?.title}</h2>
                    <h2 className="text-black"><strong>Brand: </strong>{data?.data?.brand}</h2>
                    <h2 className="text-black"><strong>Price: </strong>{data?.data?.price}$</h2>
                    <h2 className="text-black"><strong>InStock: </strong>{data?.data?.availableQuantity}</h2>
                    <h2 className="text-black"><strong>Rating: </strong>{data?.data?.rating}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;