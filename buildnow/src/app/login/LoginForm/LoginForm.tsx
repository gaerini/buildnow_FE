import { useState } from "react";

export default function LogoForm(){

    const [formValue, setFormValue] = useState({recruiterId: '', password:''});

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormValue(
            prevState => ({
                ...prevState,
                [name]: value,
            })
        );
        console.log(formValue);
    };
    return (
        <>
            <form>
                <div>
                    <input
                    type='text'
                    id = 'recruiterId'
                    name = 'recruiterId'
                    value = {formValue.recruiterId}
                    onChange={onChangeHandler}
                    ></input>
                    <input
                    type='text'
                    id='password'
                    name = 'password'
                    value={formValue.password}
                    onChange={onChangeHandler}
                    >
                    </input>
                </div>
            </form>
        </>
    );
}