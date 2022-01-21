import { jobConstants } from '../constants';
import { jobService } from '../../services';


export const jobActions = {
    addJob,
    updateJob,
    getById,
    getAll,
    deleteJob,
    
};

function addJob(data) { 
    return dispatch => {
        dispatch(request());

        return  jobService.addJob(data)
            .then(
                response => dispatch(success(response.data)),
                error => dispatch(failure(error.msg))
            );
    };

    function request() { return { type: jobConstants.CREATE_REQUEST } }
    function success(payload) { return { type: jobConstants.CREATE_SUCCESS, payload } }
    function failure(error) { return { type: jobConstants.CREATE_FAILURE, error } }
}

function updateJob(data) { 
    return dispatch => {
        dispatch(request());

        return  jobService.updateJob(data)
            .then(
                response => dispatch(success(response.data)),
                error => dispatch(failure(error.msg))
            );
    };

    function request() { return { type: jobConstants.CREATE_REQUEST } }
    function success(payload) { return { type: jobConstants.CREATE_SUCCESS, payload } }
    function failure(error) { return { type: jobConstants.CREATE_FAILURE, error } }
}

function getById(id) { 
    return dispatch => {
        dispatch(request());

        return  jobService.getById(id)
            .then(
                response => dispatch(success(response.data)),
                error => dispatch(failure(error.msg))
            );
    };

    function request() { return { type: jobConstants.DETAIL_REQUEST } }
    function success(payload) { return { type: jobConstants.DETAIL_SUCCESS, payload } }
    function failure(error) { return { type: jobConstants.DETAIL_FAILURE, error } }
}

function getAll(cid) {
    return dispatch => {
        dispatch(request());

        return jobService.getAll(cid)
            .then(
                response => dispatch(success(response.data)),
                error => dispatch(failure(error.msg))
            );
    };

    function request() { return { type: jobConstants.GETALL_REQUEST } }
    function success(payload) { return { type: jobConstants.GETALL_SUCCESS, payload } }
    function failure(error) { return { type: jobConstants.GETALL_FAILURE, error } }
}

function deleteJob(id) {
    return dispatch => {
        dispatch(request());

        return jobService.deleteJob(id)
            .then(
                response => dispatch(success(response.data)),
                error => dispatch(failure(error.msg))
            );
    };

    function request() { return { type: jobConstants.DELETE_REQUEST } }
    function success(payload) { return { type: jobConstants.DELETE_SUCCESS, payload } }
    function failure(error) { return { type: jobConstants.DELETE_FAILURE, error } }
}

