import React from "react";
import './AttendanceCard2.css'
const students =[
    {id:1, name:"김재홍4", grade:2, major: "인공지능소프트웨어",avatar: "https://randomuser.me/api/portraits/women/1.jpg"},
    {id:2, name:"김재홍3", grade:3, major: "전기",avatar: "https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"김재홍2", grade:2, major: "그린에너지",avatar: "https://randomuser.me/api/portraits/women/3.jpg"},
    {id:4, name:"김재홍", grade:4, major: "시각디자인",avatar: "https://randomuser.me/api/portraits/women/4.jpg"},
    {id:5, name:"김재홍123", grade:1, major: "인공지능소프트웨어",avatar: "https://randomuser.me/api/portraits/women/5.jpg"},
    {id:6, name:"김재홍14", grade:1, major: "인공지능소프트웨어",avatar: "https://randomuser.me/api/portraits/women/6.jpg"},
    {id:7, name:"김재홍89", grade:1, major: "인공지능소프트웨어",avatar: "https://randomuser.me/api/portraits/women/7.jpg"},
    {id:8, name:"김재홍134", grade:1, major: "인공지능소프트웨어",avatar: "https://randomuser.me/api/portraits/women/8.jpg"}

];

function AttendanceCard(){
    return(
        <div className="attendance-container">
            <h2 className= "attendance-title">학생 사진 출석부</h2>
            <div className = "card-container">
                {
                    students.map((student)=>(
                        <div className="student-card">
                            <img src={student.avatar} alt={student.name} className="student-avatar"/>
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AttendanceCard;