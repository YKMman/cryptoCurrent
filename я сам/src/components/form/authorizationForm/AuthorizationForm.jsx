import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

import { authorizationApi } from "../../../api/authorizationApi"
import { userAsyncSlice } from "../../../store/user/userSlice"
import { useState } from "react";
import { Modal } from "../../modal/Modal";

export const AuthorizationForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()

    const [modal, setModal] = useState({
        status: 0,
        message: ''
    })

    const onSubmit = (data) => {
        authorizationApi(data)
        .then((response) => {
            const token = response.data['auth-token']
            const ttl = response.data.ttl
            const date1 = new Date(ttl)
            document.cookie = `auth=${token}; expires=${date1}`
            setModal({status: 200, message: 'Success'})
            dispatch(userAsyncSlice())
            setTimeout(() => {
                navigate("/profile");
            }, 2000);
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
                        <input placeholder="password" type='password' className="bg-banner py-[5px] px-[12px] border-[1px] border-green rounded-[4px] w-[375px] xsmax-w-[375px] xs:w-full outline-none text-white"  {...register("password", {required: "Its fields is required", minLength: {
                            value: 8,
                            message: "Password is too short"
                        }})} />
                        {errors.password && <span className="text-rose-800 text-[12px]">{errors.password.message}</span>}
                    </label>

                    <input className="text-white cursor-pointer bg-green rounded-[4px] max-w-[275px] w-full py-[7px] px-[12px] hover:text-black" type='submit' value='Sign Up' />
                </form>
            </>
    )
}












