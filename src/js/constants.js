export const appointments = {
    'f_name': '',
    'l_name': '',
    'dob': '',
    'created_date': '',
    'time': '',
    'status': '',
    'doctor_name': '',
    'docotr_ref': '',
    'staff_ref': '',
    'staff_name': '',
    'cost': '',
    'type': '',
    'appointment_ref': '',
    'patient_ref': '',
}

export const patients = {
    'visits': {
        'appointment_ref': '',
        'date': '',
        'visit_ref': '',
        'patient_ref': '',
    },
    'diagnosis': {
        'diagnosis_ref': '',
        'appointment_ref': '',
        'patient_ref': '',
        'doctor_name': '',
        'doctor_ref': '',
        'cost': '',
        'recommendations': '',
        'comments': '',
        'followup_appointment': '',
    },
    'prescriptions': {
        'prescription_ref': '',
        'date': '',
        'patient_ref': '',
        'patient_name': '',
        'doctor_name': '',
        'doctor_ref': '',
        'medications': {
            'prescription_ref': '',
            'medication_ref': '',
            'patient_ref': '',
            'patient_name': '',
            'doctor_name': '',
            'doctor_ref': '',
            'medication_name': '',
            'cost': '',
            'uses': '',
            'directions': ''
        },
    },
    'lab_tests': {
        'test_ref': '',
        'date': '',
        'lab_staff': '',
        'lab_staff_ref': '',
        'patient_ref': '',
        'patient_name': '',
        'cost': '',
        'doctor_name': '',
        'doctor_ref': '',
        'results': '',
        'type': '',
        'name': '',
    },
    'transactions': {
        'transaction_ref': '',
        'date': '',
        'patient_ref': '',
        'patient_name': '',
        'amount': '',
        'employee_ref': '',
        'status': '',
        'updated_on': '',
    },
    'f_name': '',
    'l_name': '',
    'patient_ref': '',
    'mobile': '',
    'email': '',
}

export const employees = {
    'employee_ref': '',
    'f_name': '',
    'l_name': '',
    'dob': '',
    'join_date': '',
    'title': '',
    'department': '',
    'type': '',
}

export const ROUTES = {
    HOME: '/',
    DASHBOARD: '/dashboard',
    APPOINTMENTS: '/appointments',
    PRESCRIPTIONS: '/prescriptions',
    LOGIN: '/login',
    PATIENTS: '/patients',
    DIAGNOSIS: '/diagnosis',
    TRANSACTIONS: '/transactions',
    SIGNUP: '/signUp',
    LOGIN_SIGNUP: '/login_signup',
    CREATE_PRESCRIPTION: '/create-prescription',
    CREATE_TRANSACTION: '/createtransaction',
    CREATE_TRANSACTION_PATIENTS_TABLE: '/createtransaction-patientstable',
    EMPLOYEES: '/employees',
    EMPLOYEE: '/employee',
    CREATE_EMPLOYEE: '/create-employee',

    PATIENT: '/patient',
    CREATE_APPOINTMENT: '/create-appointment',

}

export const COLLECTIONS = {
    PATIENTS: 'patients',
    USERS: 'users',
    PRESCRIPTIONS: 'prescriptions',
    APPOINTMENTS: 'appointments',
    DIAGNOSIS: 'diagnosis',
    EMPLOYEES: 'employees',
    VISITS: 'visits',
    TRANSACTIONS: 'transactions',
}

export const COLORS = {
    WHITE: 'var(--white)',
    MAIN: 'var(--main)',
    SECONDARY: 'var(--secondary)',
    BACKGROUND: 'var(--background)',
    DARK: 'var(--dark)',
    GREEN: 'var(--green)',
    RED: 'var(--red)',
    SHADOW: 'var(--shadow)',
    BORDER: 'var(--border)'
}


export const OPTIONS = {
    // Hospital Staff
    PATIENTS: {title: 'Patients', path: ROUTES.PATIENTS},
    APPOINTMENTS: {title: 'Appointments', path: ROUTES.APPOINTMENTS},
    CREAT_APPOINTMENT: {title: 'Create Appointment', path: ROUTES.APPOINTMENTS},
    VIEW_TRANSACTIONS: {title: 'View Transactions', path: ROUTES.TRANSACTIONS},
    VIEW_DIAGNOSIS: {title: 'Past Diagnosis', path: ROUTES.APPOINTMENTS},
    VIEW_LAB_TESTS: {title: 'View Lab Tests', path: ROUTES.APPOINTMENTS},
    CREATE_LAB_TESTS: {title: 'Recommend Lab Tests', path: ROUTES.APPOINTMENTS},
    VIEW_PRESCRIPTIONS: {title: 'View Prescription', path: ROUTES.PRESCRIPTIONS},
    CREATE_PRESCRIPTION: {title: 'Create New Prescription', path: ROUTES.CREATE_PRESCRIPTION},
    CREATE_RECORDS: {title: 'Create New Record', path: ROUTES.APPOINTMENTS},
    CREATE_TRANSACTION: {title: 'Create New Transaction', path: ROUTES.APPOINTMENTS},
    VIEW_RECORDS: {title: 'View Records', path: ROUTES.APPOINTMENTS},
    CREATE_DIGNOSIS: {title: 'Create New Diagnosis', path: ROUTES.APPOINTMENTS},
    CREATE_EMPLOYEE: {title: 'Add New Employee', path: ROUTES.CREATE_EMPLOYEE},
    VIEW_EMPLYEES: {title: 'View Employees', path: ROUTES.EMPLOYEES},
    VIEW_EMPLYEE_RECORDS: {title: 'View Records', path: ROUTES.APPOINTMENTS},
    VIEW_INTERNAL_FILES: {title: 'View Internal Files', path: ROUTES.APPOINTMENTS},
    VIEW_SYS_LOGS: {title: 'View System Logs', path: ROUTES.APPOINTMENTS},
    REQUEST_REPORTS: {title: 'Request Reports', path: ROUTES.APPOINTMENTS},

}

export const SIDE_OPTIONS = {
    HOSPITAL_STAFF: [OPTIONS.CREATE_EMPLOYEE, OPTIONS.VIEW_EMPLYEES, OPTIONS.CREATE_PRESCRIPTION,],
    // HOSPITAL_STAFF: [OPTIONS.CREATE_RECORDS, OPTIONS.VIEW_RECORDS, OPTIONS.CREATE_TRANSACTION, OPTIONS.VIEW_TRANSACTIONS, OPTIONS.VIEW_DIAGNOSIS, OPTIONS.VIEW_LAB_TESTS, OPTIONS.VIEW_PRESCRIPTIONS],
    DOCTORS: [OPTIONS.VIEW_RECORDS, OPTIONS.VIEW_DIAGNOSIS, OPTIONS.CREATE_DIGNOSIS, OPTIONS.VIEW_LAB_TESTS, OPTIONS.CREATE_LAB_TESTS, OPTIONS.VIEW_PRESCRIPTIONS, OPTIONS.CREATE_PRESCRIPTION],
    LAB_STAFF: [OPTIONS.VIEW_LAB_TESTS, OPTIONS.CREATE_LAB_TESTS, OPTIONS.VIEW_DIAGNOSIS, ],
    INSURANCE_STAFF: [],
    ADMIN: [OPTIONS.CREATE_EMPLOYEE, OPTIONS.VIEW_EMPLYEE_RECORDS, OPTIONS.VIEW_TRANSACTIONS, OPTIONS.VIEW_INTERNAL_FILES, OPTIONS.VIEW_SYS_LOGS],
    PATIENT: [OPTIONS.CREAT_APPOINTMENT, OPTIONS.VIEW_RECORDS, OPTIONS.VIEW_DIAGNOSIS, OPTIONS.VIEW_PRESCRIPTIONS, OPTIONS.CREATE_LAB_TESTS, OPTIONS.VIEW_TRANSACTIONS, OPTIONS.REQUEST_REPORTS]
}

export const USER_TYPES = {
    HOSPITL_STAFF: 'hospital_staff',
    DOCTOR: 'doctor',
    PATIENT: 'patient',
    INSURANCE_STAFF: 'insurance_staff',
    LAB_STAFF: 'lab_staff',
    ADMIN: 'admin',
}

export const DBS = {
    PATIENTS: 'patients',
    PRESCRIPTIONS: 'prescriptions',
    MEDICATIONS: 'medications',
    
}
