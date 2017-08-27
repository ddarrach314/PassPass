import React from 'react';
import RestrictedGyms from './RestrictedGyms.jsx';


var CurrentPasses = (props) => (
  <div className="profilePending">
    <li>
      Pass Start Date: {new Date(props.pass.period_start.slice(0, 10)).toDateString().slice(4)}
    </li>
    <li>
      Pass End Date: {new Date(props.pass.period_end.slice(0, 10)).toDateString().slice(4)}
    </li>
    {props.pass.restrictedStudios.length > 0 &&
     <li>
       {props.pass.restrictedStudios.map((gym, index) =>
         <RestrictedGyms gym={gym} key={index}/>
       )}
     </li>
     }
     {props.pass.restrictedStudios.length === 0 &&
      <li>
        Restricted Gyms: No Restricted Gyms
      </li>
    }
    <li>
    Price: {props.pass.current_price}
    </li>
    <li>
      Passes Available: {props.pass.pass_volume - props.pass.passes_sold}
    </li>
    <li>
      Seller: {props.pass.first_name}
    </li>
    <li>
      Email: {props.pass.email}
    </li>
  </div>
);



// [ RowDataPacket {
//     id: 5,
//     perspective_buyer_id: 4,
//     for_sale_block_id: 5,
//     pass_volume: 9,
//     seller_id: 1,
//     current_price: 8.99,
//     period_start: 2017-04-20T07:00:00.000Z,
//     period_end: 2017-04-30T07:00:00.000Z,
//     passes_sold: 5 } ]

// [ RowDataPacket { first_name: 'Billy', email: 'billy@bob.com' } ]




export default CurrentPasses;
