"use client";

import { useState } from 'react';

export default function ContactForm() {
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
        const { firstName, lastName, email, company, phone, message } = formData;
        const nameRegex = /^[A-Za-z]{1,30}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{0,15}$/;
        let errorMessage = "";

        if (!nameRegex.test(firstName)) {
            errorMessage += "Nombre no válido (solo letras, máximo 30 caracteres).\n";
        }

        if (!nameRegex.test(lastName)) {
            errorMessage += "Apellido no válido (solo letras, máximo 30 caracteres).\n";
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
<div className="relative bg-white dark:bg-black">
                    <div className="lg:absolute lg:inset-0 lg:left-1/2">
                        <img
                            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
                            src="/images/cowork.jpg" 
                            alt="Cowork"
                        />
                    </div>
                    <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                        <div className="px-6 lg:px-8">
                            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Trabajemos Juntos
                                </h2>
                                <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-white">
                                    Dejanos tus datos y nosotros nos pondremos en contacto contigo.
                                </p>
                                <form onSubmit={handleSubmit} className="mt-16">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="first-name"
                                                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                Nombre*
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="last-name"
                                                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                Apellido*
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                Correo*
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="company"
                                                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                Compañia
                                            </label>
                                            <div className="mt-2.5">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    id="company"
                                                    autoComplete="organization"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-customGray"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                Telefono
                                            </label>
                                            <div className="relative mt-2.5">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="tel"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-customGray"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                            >
                                                Mensaje*
                                            </label>
                                            <div className="mt-2.5">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-customGray"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            {success ? 'Enviado' : 'Enviar'}
                                        </button>
                                        {success && (
                                            <p className="mt-4 text-sm text-green-500">
                                                Formulario enviado con éxito.
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

export function BusinessForm() {
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
            <div className="w-full flex">
                <div className=" lg:mx-auto ">
                    <div className="px-6 lg:px-8">
                        <div className="mx-auto max-w-xl lg:mx-0 w-full">
                            <form onSubmit={handleSubmit} className="">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                                    <div>
                                        <label
                                            htmlFor="first-name"
                                            className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                        >
                                            Nombre*
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autoComplete="given-name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                        >
                                            Correo*
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="company"
                                            className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                        >
                                            Compañia*
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                name="company"
                                                id="company"
                                                autoComplete="organization"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                        >
                                            Telefono
                                        </label>
                                        <div className="relative mt-2.5">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-sm sm:leading-6 dark:bg-customGray"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                                        >
                                            Mensaje*
                                        </label>
                                        <div className="mt-2.5">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder='Cuéntanos cómo te gustaría colaborar'
                                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-light-citc sm:text-sm sm:leading-6 dark:bg-customGray"
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
                                        <p className="mt-4 text-sm text-green-500">
                                            Formulario enviado con éxito.
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