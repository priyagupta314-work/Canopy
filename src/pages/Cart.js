import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { itemsInCart } = useCart();
  console.log(itemsInCart.length);
  return (
    <div>
      <p>
        {" "}
        My Shopping Cart{" "}
        <span style={{ fontWeight: "bold" }}>
          ({itemsInCart.length} items)
        </span>{" "}
      </p>

      <ol>
        {" "}
        {itemsInCart.map((item) => {
          return (
            <li>
              <div class="card-horizontal">
                <div class="card-horizontal card-design">
                  <img
                    src={item.image}
                    class="card-horizontal-img"
                    alt="product-img"
                  />
                  <p class="card-horizontal-text"> {item.name} </p>
                  <h3> Rs. {item.price} </h3>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
