import React from "react";
import {Link} from "react-router-dom"

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
];

const Orders = () => {
  return (
    <div className="bg-white text-xs px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong>Orders</strong>
      <div className="mt-3 text-xs ">
        <table className="w-full text-gray-700 " >
          <thead className="bg-neutral-100 ">
            <tr className="border  border-gray-300" >
              <td className="py-2 px-2">Id</td>
              <td className="py-2 px-2">Product ID</td>
              <td className="py-2 px-2">Customer Name</td>
              <td className="py-2 px-2">Order Date</td>
              <td className="py-2 px-2">Order Total</td>
              <td className="py-2 px-2">Shipping Address</td>
              <td className="py-2 px-2">Order Status</td>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => ( 
              <tr key={order.id} className="border-b border-gray-400" >
                  <td className="py-2 px-2">#{order.id}</td>
                  <td className="py-2 px-2 text-sky-500"><Link to={'/product'} >{order.product_id}</Link></td>
                  <td className="py-2 px-2">{order.customer_name}</td>
                  <td className="py-2 px-2">{new Date(order.order_date).toLocaleDateString()}</td>
                  <td className="py-2 px-2">{order.order_total}</td>
                  <td className="py-2 px-2">{order.shipment_address}</td>
                  <td className="py-2 px-2">{order.current_order_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
