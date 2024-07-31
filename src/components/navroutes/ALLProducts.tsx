import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/api/api";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
// import ClipLoader from "react-spinners/ClipLoader";
import { producPprops } from "../home/Product";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setSearchTerm, clearSearchTerm } from "../../redux/features/searchSlice";
import { setPriceRange, clearPriceRange } from "../../redux/features/filterSlice";
import { setSortOption, clearSortOption } from "../../redux/features/sortSlice";

const Products = () => {
    const dispatch: AppDispatch = useDispatch();
    const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
    const priceRange = useSelector((state: RootState) => state.filter.priceRange);
    const sortOption = useSelector((state: RootState) => state.sort.sortOption);

    const { data, isLoading } = useGetAllProductsQuery(undefined);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(e.target.value));
    };

    const handlePriceRangeChange = (min: number, max: number) => {
        dispatch(setPriceRange({ min, max }));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSortChange = (selectedOption: any) => {
        dispatch(setSortOption(selectedOption.value));
    };

    const clearFilters = () => {
        dispatch(clearSearchTerm());
        dispatch(clearPriceRange());
        dispatch(clearSortOption());
    };

    const filteredData = useMemo(() => {
        let products = data?.data || [];

        if (searchTerm) {
            products = products.filter((item: producPprops) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.brand.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        products = products.filter((item: producPprops) =>
            item.price >= priceRange.min && item.price <= priceRange.max
        );

        if (sortOption === "price-low-high") {
            products = products.sort((a: producPprops, b: producPprops) => a.price - b.price);
        } else if (sortOption === "price-high-low") {
            products = products.sort((a: producPprops, b: producPprops) => b.price - a.price);
        }

        return products;
    }, [data, searchTerm, priceRange, sortOption]);

    const sortOptions = [
        { value: "", label: "Low or High" },
        { value: "price-low-high", label: "Price: Low to High" },
        { value: "price-high-low", label: "Price: High to Low" }
    ];

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
            <div className="flex justify-between items-center mb-5">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by name or brand"
                    className="input input-bordered w-full max-w-xs"
                />
                <div className="flex items-center">
                    <h1 className="pr-2">Filter by price</h1>
                    <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange.max)}
                        placeholder="Min Price"
                        className="input input-bordered w-24 mr-2"
                    />
                    <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => handlePriceRangeChange(priceRange.min, Number(e.target.value))}
                        placeholder="Max Price"
                        className="input input-bordered w-24 mr-2"
                    />
                    <Select
                        options={sortOptions}
                        onChange={handleSortChange}
                        value={sortOptions.find(option => option.value === sortOption)}
                        placeholder="Sort by"
                        className="w-48 mr-2"
                    />
                    <button onClick={clearFilters} className="btn btn-secondary">Clear Filters</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-7 justify-evenly items-center pb-10">
                {filteredData.map((item: producPprops) => (
                    <div key={item._id} className="card bg-slate-200 shadow-xl">
                        <figure>
                            <img className="h-[200px] w-[300px] hover:scale-125" src={item.image} alt="Product" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-black"><strong>Title: </strong>{item.title}</h2>
                            <h2 className="text-black"><strong>Brand: </strong>{item.brand}</h2>
                            <h2 className="text-black"><strong>Price: </strong>{item.price}$</h2>
                            <h2 className="text-black"><strong>InStock: </strong>{item.availableQuantity}</h2>
                            <h2 className="text-black"><strong>Rating: </strong>
                                <Rating
                                    readonly
                                    initialRating={item.rating}
                                    emptySymbol={<FaRegStar className="icon" />}
                                    fullSymbol={<FaStar className="icon text-red-400" />}
                                    placeholderSymbol={<FaStarHalfAlt className="icon" />}
                                />
                            </h2>
                            <div className="card-actions">
                                <Link to={`/productDetails/${item._id}`}>
                                    <button className="btn btn-secondary">See details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;