import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, updateCar}) => {
	const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm( {mode: 'all', resolver: joiResolver(carValidator)} );

	useEffect(()=>{
		if(updateCar){
			setValue('brand',updateCar.brand)
			setValue('price',updateCar.price)
			setValue('year',updateCar.year)
		}
	},[updateCar])

	const update = async(car) =>{
		const {data} = await carService.updateById(updateCar.id, car)
		if(Object.keys(data).length){
			const {data} = await carService.getAll()
			setCars(data)
		}
	}


	const submit = async (car) => {
		const {data} = await carService.create(car)
		setCars(prev=>[...prev, data])
		reset()
	}


	return (
		// <form onSubmit={handleSubmit( submit )}>
		// 	<input type="text" placeholder={'brand'} {...register( 'brand', {
		// 		pattern: {
		// 			value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
		// 			message: 'Тільки букви від 1 до 20 символів'
		// 		},
		// 		required: true
		// 	} )}/>
		// 	{errors.brand && <span>{errors.brand.message}</span>}
		// 	<input type="number" placeholder={'price'} {...register( 'price', {
		// 		valueAsNumber: true,
		// 		min: {value: 0, message: 'Мінімум 0'},
		// 		max: {value: 1000000, message: 'Максимум 1000000'},
		// 		required: true
		//
		// 	} )}/>
		// 	{errors.price && <span>{errors.price.message}</span>}
		// 	<input type="number" placeholder={'year'} {...register( 'year', {
		// 		valueAsNumber: true,
		// 		min: {value: 1990, message: 'min 1990'},
		// 		max: {value: new Date().getFullYear(), message: `Max ${new Date().getFullYear()}`},
		// 		required: true
		//
		// 	} )}/>
		// 	{errors.year && <span>{errors.year.message}</span>}
		// 	<button>save me</button>
		// </form>
		<form onSubmit={handleSubmit(updateCar ? update : submit )}>
			<input type="text" placeholder={'brand'} {...register( 'brand'
			 )}/>
			{errors.brand && <span>{errors.brand.message}</span>}
			<input type="text" placeholder={'price'} {...register( 'price' )}/>
			{errors.price && <span>{errors.price.message}</span>}
			<input type="text" placeholder={'year'} {...register( 'year' )}/>
			{errors.year && <span>{errors.year.message}</span>}
			<button disabled={!isValid}>{updateCar?'update':'create'}</button>
		</form>




	);
};

export {CarForm};