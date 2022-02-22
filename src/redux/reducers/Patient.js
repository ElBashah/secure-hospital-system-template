/// *** Utils *** ///
import { log } from "../../js/utils";
import { SET_PATIENT } from "../actions/action-types";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_PATIENT:
            state = action.patient
            return state;

        default:
            return state
    }
}