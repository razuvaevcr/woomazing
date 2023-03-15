import { useState, useEffect } from "react";

import GoodsList from "../googsList/GoodsList";

import './shop.scss';
import tshort from '../../resources/img/usa.jpg';

const Shop = () => {
	//пренести товары в бд
	//настроить пагинацию товаров
	//настроить отображение спанов "покаазано 4 из 4"
	const goods ={
		'categories': ['Все', 'Пальто', 'Свитшоты', 'Кардиганы', 'Толстовки'],
		'goods': [
			{
				'id': 1,
				'categories': ['Все', 'Пальто'],
				'name': 'Футболка USA',
				'price': 100,
				'color': 'grey',
				'img': tshort
			},
			{
				'id': 2,
				'categories': ['Все', 'Футболки'],
				'name': 'Футболка USA',
				'price': 100,
				'color': 'grey',
				'img': tshort
			},
			{
				'id': 3,
				'categories': ['Все', 'Футболки'],
				'name': 'Футболка USA',
				'price': 100,
				'color': 'grey',
				'img': tshort
			},
			{
				'id': 4,
				'categories': ['Все', 'Футболки'],
				'name': 'Футболка USA',
				'price': 100,
				'color': 'grey',
				'img': tshort
			}
		]
	};

	const categories = goods['categories'];
	const [activeCategory, setActiveCategory] = useState('');
	const [goodsList, setGoodsList] = useState(goods['goods']);

	useEffect(() => changeCategory('Все'),[]);

	useEffect(() => {
		setGoodsList(filterGoodsList(goods['goods'], activeCategory))
	},[activeCategory])

	const changeCategory = (item) => {
		setActiveCategory(item);
	}

	const renderCategories = (arr, active) => {
		return (
			arr.map((item, i) => {
				return (
					<button key={i} href="#" onClick={() => changeCategory(item)} className={`${active === item ? 'categories-item active' : 'categories-item ' }`}>{item}</button>
				)
			})
		)
	}

	const filterGoodsList = (goodsList, category) => {
		if (category) {
			return goodsList.filter((item) => item['categories'].some((item) => item === category)); //фильтрует массив элементы которого совпадают с указанной категорией
		} else {
			return goodsList;
		}
	}

	

	return (
		<div className="shop">
			<div className="categories">
				{renderCategories(categories, activeCategory)}
			</div>
			<span className="shop__quality shop__quality_top">{`Показано: ${goods['goods'].length} из ${goods['goods'].length} товаров`}</span>
			<GoodsList goods={goodsList}/>
			<span className="shop__quality shop__quality_bottom">{`Показано: ${goods['goods'].length} из ${goods['goods'].length} товаров`}</span>
			<div className="shop__pages">
				<a href="#" className="shop__pages-page">1</a>
				<a href="#" className="shop__pages-page">2</a>
				<a href="#" className="shop__pages-page shop__pages-page_next">
					arrow
				</a>
			</div>
		</div>
	)
}

export default Shop;