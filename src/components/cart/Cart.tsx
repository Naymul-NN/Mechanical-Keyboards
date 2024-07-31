import { useGetAllCartQuery } from "../../redux/api/api";

const Cart = () => { 


     const {data } = useGetAllCartQuery(undefined);
     console.log(data.data);
return ( 
     <div className="pt-20">
          <h1> This is Cart page .. </h1>
     </div>
);
};

export default Cart;