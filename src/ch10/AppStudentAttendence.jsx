import React from "react"
import StudentAttendance from "./StudentAttendance";

const students1 =[
    {id:1, name:"윤이나", grade:2, major: "인공지능소프트웨어"},
    {id:2, name:"윤임", grade:3, major: "전기"},
    {id:3, name:"윤이미", grade:2, major: "그린에너지"},
    {id:4, name:"윤이머", grade:4, major: "시각디자인"},
    {id:5, name:"오은영", grade:1, major: "인공지능소프트웨어"}
];

const students2 =[
    {id:1, name:"건우", grade:2, major: "인공지능소프트웨어"},
    {id:2, name:"현민", grade:3, major: "전기"},
    {id:3, name:"윤이미", grade:2, major: "그린에너지"},
    {id:4, name:"윤이머", grade:4, major: "시각디자인"},
    {id:5, name:"렌델", grade:1, major: "인공지능소프트웨어"}
];

function AppStudentAttendance(){
    return(
        <div>
            <StudentAttendance students={students1}/>
            <hr/>
            <StudentAttendance students={students2}/>
        </div>
    );
}
export default AppStudentAttendance