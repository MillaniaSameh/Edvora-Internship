import Card from "./Card";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <Card>
      <div className={classes.table_style}>
        <table>
          <tbody>
            <tr>
              <td rowSpan={3} className={classes.column_width}>
                <img src={props.image} alt="" className={classes.image} />
              </td>
              <td className={classes.product_name}>{props.prodName}</td>
            </tr>

            <tr>
              <td className={classes.brand_name}>{props.brandName}</td>
            </tr>

            <tr>
              <td className={classes.price}>$ {props.price}</td>
            </tr>

            <tr>
              <td className={classes.location}>
                {props.city}, {props.state}.
              </td>
              <td>
                <span className={classes.date_heading}>Date: </span>
                <span className={classes.date_actual}>
                  {new Date(props.date).toLocaleDateString("us")}
                </span>
              </td>
            </tr>

            <tr>
              <td colSpan={2} className={classes.description}>
                {props.discription}.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default Item;
