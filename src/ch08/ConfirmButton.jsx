import React from "react";

// bind 대신에 클래스 필드 문법으로 변경
class ConfirmButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isConfirmed: false
        };

        this.handleConfirm = this.handleConfirm.bind(this)
    }

    handleConfirm(){
        this.setState((prevState) => ({
            isConfirmed : !prevState.isConfirmed
        }));
    }

    render() {
        return(
            <button >

                ConfirmButton {this.state.isConfirmed? "확인됨" : "확인하기"}
            </button>
        );
    }

}

export default ConfirmButton