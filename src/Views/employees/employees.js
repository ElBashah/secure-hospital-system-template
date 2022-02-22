import React, { useEffect, useState } from "react"
import { ROUTES } from "../../js/constants"
import { getEmployeesCollection } from "../../js/get"
import DataTable from "../components/table"


const Employees = ({}) => {

    const [employees, setEmployees] = useState(FAKE_EMPLOYEES)
    useEffect(() => {

        const getEmployees = async () => {
            const _employees = await getEmployeesCollection()
            // console.log("_employees", _employees);
            // setEmployees(_employees)
        }

        getEmployees()
    }, [])

    const headerData = [ 'First Name', 'Last Name', 'Type', 'DOB', 'Title', 'Department']
    const keys = ['f_name', 'l_name', 'type', 'dob', 'title', 'department']

    return(
        <div className={`col full-wh`}>
            <DataTable {...{tableData: employees, headerData, keys, route: ROUTES.EMPLOYEE, title: 'Employees List'}} />
        </div>
    )
}

export default Employees;


const FAKE_EMPLOYEES = [
    {
        "join_date": {
            "seconds": 1228892400,
            "nanoseconds": 0
        },
        "title": "System Admin",
        "l_name": "Jones",
        "f_name": "Jacob",
        "dob": {
            "seconds": -156790800,
            "nanoseconds": 0
        },
        "employee_ref": "1oTZdM0w6jjXDIa0hAyL",
        "type": "admin",
        "department": "Managment"
    },
    {
        "f_name": "Costaz",
        "employee_ref": "4DQCEi6v2Q3XvnyESjDD",
        "join_date": {
            "seconds": 1418540400,
            "nanoseconds": 0
        },
        "type": "hospital-staff",
        "department": "Managment",
        "title": "Hospital Staff",
        "l_name": "Econ",
        "dob": {
            "seconds": 9788400,
            "nanoseconds": 0
        }
    },
    {
        "dob": {
            "seconds": 162284400,
            "nanoseconds": 0
        },
        "department": "Physicians",
        "type": "doctor",
        "join_date": {
            "seconds": 1386658800,
            "nanoseconds": 0
        },
        "employee_ref": "8mV11mKoqCsjqXt3QIYy",
        "title": "General Doctor",
        "l_name": "Ryanz",
        "f_name": "Roshan"
    },
    {
        "department": "Physicians",
        "dob": {
            "seconds": 162284400,
            "nanoseconds": 0
        },
        "type": "doctor",
        "f_name": "Darshan",
        "join_date": {
            "seconds": 1386658800,
            "nanoseconds": 0
        },
        "employee_ref": "KSi5edJZTzh7wtAjJy6v",
        "l_name": "Ryanz",
        "title": "General Doctor"
    },
    {
        "dob": {
            "seconds": 9788400,
            "nanoseconds": 0
        },
        "f_name": "Costaz",
        "type": "hospital-staff",
        "l_name": "Econ",
        "title": "Hospital Staff",
        "department": "Managment",
        "join_date": {
            "seconds": 1418540400,
            "nanoseconds": 0
        },
        "employee_ref": "eAlLT5Goygujw6NzkbRR"
    },
    {
        "f_name": "Randi",
        "type": "lab-staff",
        "join_date": {
            "seconds": 1544425200,
            "nanoseconds": 0
        },
        "title": "Lab Staff",
        "l_name": "Rollen",
        "employee_ref": "fjTJsN3Gppifvoh9DyQ2",
        "dob": {
            "seconds": 789894000,
            "nanoseconds": 0
        },
        "department": "Lab"
    },
    {
        "type": "doctor",
        "department": "Managment",
        "dob": {
            "seconds": -156790800,
            "nanoseconds": 0
        },
        "l_name": "Jones",
        "employee_ref": "mAGZOYClvqXio6qhyfNp",
        "f_name": "Jacob",
        "join_date": {
            "seconds": 1228892400,
            "nanoseconds": 0
        },
        "title": "Doctor"
    },
    {
        "join_date": {
            "seconds": 1544425200,
            "nanoseconds": 0
        },
        "l_name": "Rollen",
        "title": "General Doctor",
        "type": "doctor",
        "department": "Lab",
        "dob": {
            "seconds": 789894000,
            "nanoseconds": 0
        },
        "f_name": "Randi",
        "employee_ref": "ngKXPKFPhcxlEgJOMI03"
    },
    {
        "department": "General",
        "f_name": "Mohammed ",
        "join_date": {
            "seconds": 1644948369,
            "nanoseconds": 200000000
        },
        "type": "Lab Staff",
        "l_name": "Albasha",
        "employee_ref": "zM3aCPI8CQdco9wm0hqf"
    }
]