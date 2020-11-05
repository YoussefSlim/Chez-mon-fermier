import React, { useEffect } from 'react';

// import { addShipping } from 'src/actions/cart';

// eslint-disable-next-line arrow-body-style
const Recipe = ({ totlal }) => {
  return (
    <tfoot>
      <tr>
        <td className="text-right" colSpan="2">
          Total HT
        </td>
        <td className="item-subtotal">$84.96</td>
      </tr>

      <tr>
        <td className="text-right" colSpan="2">
          TVA 20%
        </td>
        <td className="item-subtotal">$16.99</td>
      </tr>

      <tr className="row-total">
        <td className="text-right" colSpan="2">
          {totlal}
        </td>
        <td className="item-total">$101.94</td>
      </tr>
    </tfoot>
  );
};

export default Recipe;
