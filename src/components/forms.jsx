"use client";

import { useState } from 'react';

export default function ContactForm({ content }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errorMessage = validateForm();
        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        try {
            const response = await fetch('/api/formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: ''
                });
            } else {
                console.error(`${content.error}`);
            }
        } catch (error) {
            console.error(`${content.error}`, error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { firstName, lastName, email, company, phone, message } = formData;
        const nameRegex = /^[A-Za-z]{1,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{0,15}$/;
        let errorMessage = "";

        if (!nameRegex.test(firstName)) {
            errorMessage += `${content.verify.firstName}`;
        }

        if (!nameRegex.test(lastName)) {
            errorMessage += `${content.verify.lastName}`;
        }

        if (!emailRegex.test(email)) {
            errorMessage += `${content.verify.email}`;
        }

        if (company.length > 50) {
            errorMessage += `${content.verify.company}`;
        }

        if (!phoneRegex.test(phone)) {
            errorMessage += `${content.verify.phone}`;
        }

        if (!message) {
            errorMessage += `${content.verify.message}`;
        }

        return errorMessage;
    };
    return(
<div className="relative bg-gray-50 dark:bg-neutral-800/90">
                    <div className="lg:absolute lg:inset-0 lg:left-1/2">
                        <img
                            className="h-[20rem] w-full bg-gray-50 object-bottom object-cover sm:h-80 lg:absolute lg:h-full"
                            src="/images/backgrounds/cuu_4.jpg" 
                            alt="Chihuahua Image"
                        />
                    </div>
                    <div className="py-10 sm:py-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                        <div className=" px-6 lg:px-8">
                            <div className=" mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                <h2 className="text-h5 font-bold tracking-tight text-blue-dark-citc dark:text-white">
                                    {content.title}
                                </h2>
                                <p className="mt-3 text-p font-medium leading-7 text-gray-600">
                                    {content.description}
                                </p>
                                <form onSubmit={handleSubmit} className="mt-5">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="first-name"
                                                className="block text-[1.05rem] md:text-p font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                {content.firstName} *
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder={content.firstName}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="last-name"
                                                className="block text-[1.05rem] md:text-p font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                {content.lastName} *
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder={content.lastName}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="email"
                                                className="block text-[1.05rem] md:text-p font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                {content.email} *
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder={content.email}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="company"
                                                className="block text-[1.05rem] md:text-p font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                {content.company}
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    id="company"
                                                    autoComplete="organization"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder={content.company}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="phone"
                                                className="block text-[1.05rem] md:text-p font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                {content.phone}
                                            </label>
                                            <div className="relative mt-2.5">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder={content.phone}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="message"
                                                className="block text-[1.05rem] md:text-p font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                {content.message} *
                                            </label>
                                            <div className="mt-2.5">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder={content.message_placeholder}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-dark-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md bg-blue-dark-citc px-3.5 py-2.5 text-center text-[1.05rem] md:text-p font-semibold text-white shadow-sm hover:text-blue-dark-citc hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-dark-citc transition-all duration-200 ease-in-out"
                                        >
                                            {success ? `${content.summited}` : `${content.button}`}
                                        </button>
                                        {success && (
                                            <p className="mt-4 text-sm text-green-600">
                                                {content.summit_succed}
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export function BusinessForm({ content }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '' 
    });
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errorMessage = validateForm();
        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        try {
            const response = await fetch('/api/formulario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: ''
                });
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error al enviar el formulario', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        const { name, email, company, phone, message } = formData;
        const nameRegex = /^[A-Za-z]{1,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{0,15}$/;
        let errorMessage = "";

        if (!nameRegex.test(name)) {
            errorMessage += "Nombre no válido (solo letras, máximo 30 caracteres).\n";
        }

        if (!emailRegex.test(email)) {
            errorMessage += "Correo no válido.\n";
        }

        if (company.length > 50) {
            errorMessage += "Compañia no puede tener más de 50 caracteres.\n";
        }

        if (!phoneRegex.test(phone)) {
            errorMessage += "Teléfono no válido (solo números, máximo 15 caracteres).\n";
        }

        if (!message) {
            errorMessage += "Mensaje es obligatorio.\n";
        }

        return errorMessage;
    };
    return(
            <div className="w-full flex justify-center">
                <div className="w-[90%] sm:w-auto lg:mx-auto ">
                    <div className="px-6 lg:px-8">
                        <div className="mx-auto max-w-xl lg:mx-0 w-full">
                            <form onSubmit={handleSubmit} className="">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                                    <div>
                                        <label
                                            htmlFor="first-name"
                                            className="block text-[1.1rem] font-semibold leading-6 text-blue-dark-citc whitespace-pre"
                                        >
                                            {content.name} *
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="given-name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-blue-dark-citc shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-[1.1rem] sm:leading-6 dark:bg-customGray"
                                                required
                                                placeholder={content.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="email"
                                            className="block text-[1.1rem] font-semibold leading-6 whitespace-pre text-blue-dark-citc "
                                        >
                                            {content.email} *
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-[1.1rem] sm:leading-6 dark:bg-customGray"
                                                required
                                                placeholder={content.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="company"
                                            className="block text-[1.1rem] font-semibold leading-6 whitespace-pre text-blue-dark-citc"
                                        >
                                            {content.company} *
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                autoComplete="organization"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-[1.1rem] sm:leading-6 dark:bg-customGray"
                                                required
                                                placeholder={content.company}
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="phone"
                                            className="block text-[1.1rem] font-semibold leading-6 text-blue-dark-citc"
                                        >
                                            {content.phone}
                                        </label>
                                        <div className="relative mt-2.5">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder={content.phone}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-[1.1rem] sm:leading-6 dark:bg-customGray"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="message"
                                            className="block text-[1.1rem] font-semibold leading-6 whitespace-pre text-blue-dark-citc "
                                        >
                                            {content.message} *
                                        </label>
                                        <div className="mt-2.5">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder={content.message_placeholder}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-[1.1rem] sm:leading-6 dark:bg-customGray"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md bg-blue-light-citc px-3.5 py-2.5 text-center text-h6 font-semibold text-gray-50 shadow-sm hover:bg-gray-50 hover:text-blue-dark-citc focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-dark-citc transition-all duration-200 ease-in-out"
                                    >
                                        {success ? 'Enviado' : 'Enviar'}
                                    </button>
                                    {success && (
                                        <p className="mt-4 text-[1.1rem] text-green-500"> 
                                            {content.success_message}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}