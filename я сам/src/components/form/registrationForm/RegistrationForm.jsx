import { useForm } from "react-hook-form"

import { registrationApi } from "../../../api/registrationApi"
import { useState } from "react"
import { Modal } from "../../modal/Modal"

export const RegistrationForm = () => {
    const { register, handleSubmit, formState: {errors}, watch } = useForm()
    const [modal, setModal] = useState({
        status: 0,
        message: ''
    })

    const onSubmit = (data) => {
        registrationApi(data)
        .then((response) => {
            if(response.status === 200) {
                setModal({status: 200, message: 'Success'})
            }
        })
        .catch(() => {
            setModal({status: 400, message: 'Error'})
        })
    }

    return (
        <>
            <Modal status={modal.status} message={modal.message} setModal={setModal}/>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
                <label className="cursor-pointer flex flex-col">
                    <input placeholder="login" type='text' className="bg-banner py-[5px] px-[12px] border-[1px] border-green rounded-[4px] w-[375px] xsmax-w-[375px] xs:w-full outline-none text-white" {...register("login", {required: "Its fields is required", minLength: {
                        value: 4,
                        message: "Name is too short"
                    }})} />
                    {errors.login && <span className="text-rose-800 text-[12px]">{errors.login.message}</span>}
                </label>
                <label className="cursor-pointer flex flex-col">
                    <input placeholder="email" type='email' className="bg-banner py-[5px] px-[12px] border-[1px] border-green rounded-[4px] w-[375px] xsmax-w-[375px] xs:w-full outline-none text-white" {...register("email", {required: "Its fields is required", minLength: {
                        value: 4,
                        message: "Email is too short"
                    }})} />
                    {errors.email && <span className="text-rose-800 text-[12px]">{errors.email.message}</span>}
                </label>
                <label className="cursor-pointer flex flex-col">
                    <input placeholder="password" type='password' className="bg-banner py-[5px] px-[12px] border-[1px] border-green rounded-[4px] w-[375px] xsmax-w-[375px] xs:w-full outline-none text-white"  {...register("password", {required: "Its fields is required", minLength: {
                        value: 8,
                        message: "Password is too short"
                    }})} />
                    {errors.password && <span className="text-rose-800 text-[12px]">{errors.password.message}</span>}
                </label>
                <label className="cursor-pointer flex flex-col">
                    <input placeholder="password Confirm" type='password' className="bg-banner py-[5px] px-[12px] border-[1px] border-green rounded-[4px] w-[375px] xsmax-w-[375px] xs:w-full outline-none text-white" {...register("password_confirm", {
                        required: true,
                        validate: (value) => value === watch('password') || "Passwords do not match"
                    })} />
                    {errors.password_confirm && <span className="text-rose-800 text-[12px]">{errors.password_confirm.message}</span>}
                </label>

                <input className="text-white cursor-pointer bg-green rounded-[4px] max-w-[275px] w-full py-[7px] px-[12px] hover:text-black" type='submit' value='Sign Up' />
            </form>
        </>
    )
}


