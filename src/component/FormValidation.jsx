import { useState } from 'react'
import validator from "validator"

const FormValidation = () => {
    const [info, setInfo] = useState({
        name: "",
        Age: "",
        PhoneNum: "",
        mail: "",
        City: "",
    })

    const [userInfo, setUserInfo] = useState({
        name: "",
        Age: "",
        PhoneNum: "",
        mail: "",
        City: "",
    })

    function userName(e) {
        setInfo({ ...info, name: e.target.value });
    }
    function userAge(e) {
        setInfo({ ...info, Age: e.target.value });
    }

    function userNum(e) {
        setInfo({ ...info, PhoneNum: e.target.value });
    }
    function userCity(e) {
        setInfo({ ...info, City: e.target.value });
    }

    function userMail(e) {
        setInfo({ ...info, mail: e.target.value });
    }

    function submit(e) {
        e.preventDefault();
        if (info.name == "" || info.Age == "" || info.PhoneNum == "" ||
            info.mail == "" || info.City == "") {
            alert("User information should not be empty.")
        }
        else if (info.name.length <= 2) {
            alert("Name should be greater than 2 letter.")
        }
        else if (info.Age < 18) {
            alert("Age should be greater than 18.")
        }
        else if (info.PhoneNum.length != 10) {
            alert(`Phone number should be required 10 digit. `)
        }
        else if (validator.isEmail(info.mail) == false) {
            alert("Invalid email address.")
        }
        else if (info.City.length < 2) {
            alert("City should be greater than 2 letter.")
        } else {

            setUserInfo({
                ...userInfo,
                name: info.name,
                Age: info.Age,
                PhoneNum: info.PhoneNum,
                mail: info.mail,
                City: info.City
            })


            setInfo({
                ...info,
                name: "",
                Age: "",
                PhoneNum: "",
                mail: "",
                City: ""
            })
        }
    }


    return (
        <>
            <h1>Form Validation</h1>
            <form >
                <label htmlFor="name">Name</label>
                <input type="text" id='name' value={info.name} onChange={userName} />
                <br />
                <br />
                <label htmlFor="age">Age</label>
                <input type="text" id="age" value={info.Age} onChange={userAge} />

                <br />
                <br />
                <label htmlFor="num">Phone Number</label>
                <input type="text" id="number" value={info.PhoneNum} onChange={userNum} />

                <br />
                <br />
                <label htmlFor="mail">Email</label>
                <input type="email" id="mail" value={info.mail} onChange={userMail} />

                <br />
                <br />
                <label htmlFor="city">City</label>
                <input type="text" id="city" required value={info.City} onChange={userCity} />
                {/* <button type="submit" onClick={submit}>Submit</button> */}
                <input type="submit" onClick={submit} />
            </form>
            <br />


            <div>
                <p>Name : {userInfo.name}</p>
                <p>Age : {userInfo.Age}</p>
                <p>Phone Number : {userInfo.PhoneNum}</p>
                <p>Email : {userInfo.mail}</p>
                <p>City : {userInfo.City}</p>

            </div>

        </>
    )
}

export default FormValidation