import React, { useEffect, useState } from "react"
import { ROUTES } from "../../js/constants"
import { getPatientsCollection } from "../../js/get"
import { log } from "../../js/utils"
import DataTable from "../components/table"

const Patients = ({}) => {

    const [patients, setPatients] = useState(FAKE_PATIENTS_DATA)
    log("patients", patients)
    useEffect(() => {

        const getPatients = async () => {
            const _patients = await getPatientsCollection()
            // setPatients(_patients)

            // setPatients(FAKE_PATIENTS_DATA)
        }

        getPatients()
    }, [])

    const headerData = [ 'First Name', 'Last Name', 'Mobile', 'DOB',]
    const keys = ['f_name', 'l_name', 'mobile', 'dob']

    return(
        <div className={`col full-wh`}>
            <DataTable {...{tableData: patients, headerData, keys, route: ROUTES.PATIENT, title: 'Patients List'}} />
        </div>
    )
}

export default Patients;

const FAKE_PATIENTS_DATA = [
    {
        "l_name": "JJ",
        "email": "asb.asb.com",
        "mobile": "4508542545",
        "f_name": "John",
        "dob": {
            "seconds": 833439600,
            "nanoseconds": 0
        },
        "patient_ref": "5OBq23YPwS2l25e5eYY1"
    },
    {
        "f_name": "Akash",
        "phone": "123-123-1234",
        "dob": "2022-02-11",
        "email": "akash_patel@gmail.com",
        "l_name": "Patel",
        "patient_ref": "7QprbSBDvPu6kJh6skne",
        "join_date": {
            "seconds": 1645260273,
            "nanoseconds": 739000000
        }
    },
    {
        "patient_ref": "CfGqFgCg5gkeNw3JndiV",
        "l_name": "Mayers",
        "f_name": "Aron",
        "dob": {
            "seconds": 675586800,
            "nanoseconds": 0
        },
        "mobile": "8885922236"
    },
    {
        "past_alergies": [
            "vortpk ",
            "roptgk",
            " r",
            "vkto"
        ],
        "insurance_policy": "486543",
        "l_name": "Albasha",
        "insurance_name": "lkjhlhuhjio",
        "patient_ref": "DV1FOycVM8ebfNnQ3zrY",
        "past_diseases": [
            "mdowsikcmwe ",
            " erlokifmj",
            " erofk"
        ],
        "dob": {
            "seconds": 1644562800,
            "nanoseconds": 0
        },
        "user_ref": "oQqvBZs9RTuzqXbLDKwd",
        "insurance_group": "568546",
        "blood_type": "o+",
        "emergency_phone": "7896546854",
        "f_name": "Mohammed",
        "height": "5774",
        "insurance_phone": "4586518564",
        "emergency_relationship": "lkmlkmkkl",
        "past_surgeries": [
            "klmrtgm",
            "cermkij",
            "feroikmj"
        ],
        "weight": "5448",
        "emergency_name": ";lkop"
    },
    {
        "patient_ref": "SayZPUQAl76xcdFsOT5w",
        "dob": {
            "seconds": 833439600,
            "nanoseconds": 0
        },
        "l_name": "JJ",
        "f_name": "John"
    },
    {
        "f_name": "Matt",
        "dob": "2006-02-15",
        "join_date": {
            "seconds": 1645254532,
            "nanoseconds": 468000000
        },
        "l_name": "Skone",
        "email": "mattskine",
        "patient_ref": "Xkw6AAfMmFdyaxUOhDhY",
        "phone": "123"
    },
    {
        "l_name": "Bashah",
        "f_name": "Turki",
        "patient_ref": "febDs3M3OxMhtxKuUP5E",
        "dob": {
            "seconds": 928047600,
            "nanoseconds": 0
        }
    },
    {
        "dob": "2012-04-01",
        "patient_ref": "k1wjKZfvp371ePIWuiM6",
        "l_name": "Snow",
        "join_date": {
            "seconds": 1645249032,
            "nanoseconds": 231000000
        },
        "email": "jon_snow@got.com",
        "f_name": "Jon",
        "phone": "4567812341"
    },
    {
        "patient_ref": "v7ZC9b3GStFAbSbSIIU7",
        "dob": {
            "seconds": 928047600,
            "nanoseconds": 0
        },
        "l_name": "Bashah",
        "f_name": "Turki"
    },
    {
        "l_name": "Mayers",
        "f_name": "Aron",
        "dob": {
            "seconds": 675586800,
            "nanoseconds": 0
        },
        "patient_ref": "w8ioFM6zkkU8MMSKCWy8"
    }
]