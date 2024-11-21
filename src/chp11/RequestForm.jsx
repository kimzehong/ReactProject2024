import React, {useState} from "react";

function RequestForm(props){
    const [details, setDetails] = useState('');

    const handleSubmit = (event) => {
        event.precentDefault();
            alert(`상세 입력사항 ${details}`);
    }
    const handleChange = (event) => {
        setDetails(event.target.value);
    }
    return(
        <form>
            <label>
                요청사항:
                <textarea value = {details} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default RequestForm;