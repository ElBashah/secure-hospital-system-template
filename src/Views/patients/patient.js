import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useLocation } from "react-router"

import { setSelectedPatient } from "../../redux/actions";

import { getPatientInformation } from "../../js/post";
import { getOnlyDate, log } from "../../js/utils";
import TextBox from "../components/textfield";

const Patient = ({}) => {  

    const { state } = useLocation();
    const [patient, setPatient] = useState({...state})

    log("Patient", patient)
    useEffect(() => {

        const _getPatientInformation = async () =>{
            // const _user = await getPatientInformation(state)
            // console.log("FULL-INFO: ", _user);
            // setPatient({..._user, ...state})
        }

        _getPatientInformation()
    }, [])
    console.log("P-View-Props: ", state);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSelectedPatient(state))
    }, [])
    return(
        <div className={`col ful-wh center-hv`}>
            <div className={`col center-hv`} style={{width: '50rem'}}>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'f_name'} className={`blocked`} val={patient.f_name} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'First Name'}  />
                    <TextBox name={'l_name'} className={`blocked`} val={patient.l_name} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Last Name'}  />
                    <TextBox name={'mobile'} className={`blocked`} val={patient.mobile} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Mobile'}  />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'ssn'} className={`blocked`} val={patient.ssn} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Social Security (SSN)'} />
                    <TextBox name={'gender'} className={`blocked`} val={patient.gender} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Gender'}  />
                    <TextBox name={'dob'} className={`blocked`} val={getOnlyDate(patient.dob)} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Date of Birth'}  />
                    
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'address'} className={`full-w blocked`} val={patient.address} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Address'} continerStyle={{width: '80%'}}  />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'city'} className={`blocked`} val={patient.city} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'City'}  />
                    <TextBox name={'state'} className={`blocked`} val={patient.state} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'State'}  />
                    <TextBox name={'zip_code'} className={`blocked`} val={patient.zip_code} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Zip Code'}  />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'height'} className={`blocked`} val={patient.height} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Height'}  />
                    <TextBox name={'weight'} className={`blocked`} val={patient.weight} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Weight'}  />
                    <TextBox name={'blood_type'} className={`blocked`} val={patient.blood_type} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Blood Type'}  />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'emergency_name'} className={`blocked`} val={patient.emergency_name} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Emergency Contact Name'}  />
                    <TextBox name={'emergency_phone'} className={`blocked`} val={patient.emergency_phone} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Emergency Contact Phone'}  />
                    <TextBox name={'emergency_relationship'} className={`blocked`} val={patient.emergency_relationship} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Contact Relationship'}  />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'insurance_name'} className={`blocked`} val={patient.insurance_name} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Insurance Name'} continerStyle={{width: '60%'}}  />
                    <TextBox name={'insurance_policy'} className={`blocked`} val={patient.insurance_policy} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Insurance Policy Number'}  />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'insurance_group'} className={`blocked`} val={patient.insurance_group} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Insurance Group Number'}  />
                    <TextBox name={'insurance_phone'} className={`blocked`} val={patient.insurance_phone} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Insurance Phone'}  />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'past_surgeries'} className={`full-w blocked`} val={patient.past_surgeries} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Past Surgeries (seperate each with a comma ",")'} continerStyle={{width: '80%'}} />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx`} style={{width: '85%'}}>
                    <TextBox name={'past_diseases'} className={`full-w blocked`} val={patient.past_diseases} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Past Diseases (seperate each with a comma ",")'} continerStyle={{width: '80%'}} />
                </div>
                <div className={`row j-between full-w a-center margin-t-xx margin-b-xxx`} style={{width: '85%'}}>
                    <TextBox name={'past_alergies'} className={`full-w blocked`} val={patient.past_alergies} handleChange={()=>{}} style={{marginLeft: '0.5rem'}} lable={'Past Alergies (seperate each with a comma ",")'} continerStyle={{width: '80%'}} />
                </div>
            </div>
        </div>
    )
}


export default Patient;
