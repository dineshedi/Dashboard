import React from 'react'
import { Link } from 'react-router-dom'


const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_price: '$699.00',
		product_stock: 0
	}
]

const PopularProduct = () => {
  return (
    <div className='bg-white text-xs px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[19rem]' >
        <strong>Popular Orders</strong>
        <div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<span
								className={`
									${product.product_stock === 0
										? 'text-red-500'
										: product.product_stock > 50
										? 'text-green-500'
										: 'text-orange-500'}
									'text-xs font-medium'
								`}
							>
								{product.product_stock === 0 ? 'Out of Stock' : product.product_stock + ' in Stock'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.product_price}</div>
					</Link>
				))}
			</div>
    </div>  
  )
}

export default PopularProduct