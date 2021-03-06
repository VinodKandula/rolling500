import {IHit} from "../search/search.model";

export const REQUEST_RECOMMENDATIONS = 'REQUEST_RECOMMENDATIONS';
export const RECEIVE_RECOMMENDATIONS = 'RECEIVE_RECOMMENDATIONS';
export const REQUEST_RECOMMENDATIONS_FAILED = 'REQUEST_RECOMMENDATIONS_FAILED';

export const REQUEST_RECOMMENDATION_DASHBOARD = 'REQUEST_RECOMMENDATION_DASHBOARD';
export const RECEIVE_RECOMMENDATION_DASHBOARD = 'RECEIVE_RECOMMENDATION_DASHBOARD';
export const REQUEST_RECOMMENDATION_DASHBOARD_FAILED = 'REQUEST_RECOMMENDATION_DASHBOARD_FAILED';

export const REQUEST_PREDICTION = 'REQUEST_PREDICTION';
export const RECEIVE_PREDICTION = 'RECEIVE_PREDICTION';
export const REQUEST_PREDICTION_FAILED = 'REQUEST_PREDICTION_FAILED';

export function requestRecommendations() {
    return {
        type: REQUEST_RECOMMENDATIONS,
        payload: {}
    }
}

export function receiveRecommendations(results: any) {
    return {
        type: RECEIVE_RECOMMENDATIONS,
        payload: {
            albums: results
        }
    }
}

export function requestRecommendationsFailed(e: Error) {
    return {
        type: REQUEST_RECOMMENDATIONS_FAILED,
        payload: {
            errorMessage: e.message
        }
    }
}

export function requestRecommendationDashboard() {
    return {
        type: REQUEST_RECOMMENDATION_DASHBOARD,
        payload: {}
    }
}

export function receiveRecommendationDashboard(results: any) {
    return {
        type: RECEIVE_RECOMMENDATION_DASHBOARD,
        payload: {
            statistics: results
        }
    }
}

export function requestRecommendationDashboardFailed(e: Error) {
    return {
        type: REQUEST_RECOMMENDATION_DASHBOARD_FAILED,
        payload: {
            errorMessage: e.message
        }
    }
}

export function requestPrediction(selectedAlbum: IHit) {
    return {
        type: REQUEST_PREDICTION,
        payload: {
            selectedAlbum: selectedAlbum
        }
    }
}

export function receivePrediction(results: any) {
    return {
        type: RECEIVE_PREDICTION,
        payload: {
            prediction: results
        }
    }
}

export function requestPredictionFailed(e: Error) {
    return {
        type: REQUEST_PREDICTION_FAILED,
        payload: {
            errorMessage: e.message
        }
    }
}
