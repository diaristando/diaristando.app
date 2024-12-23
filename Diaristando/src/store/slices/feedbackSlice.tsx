import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FeedbackState {
    service: string;
    time: string;
    description: string;
    reciveValue: string;
    typeService: string;
}

const initialState: FeedbackState = {
    description: '',
    reciveValue: '',
    service: '',
    time: '',
    typeService: '',
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        setFeedback(state, action: PayloadAction<FeedbackState>) {
            return {
                ...action.payload,
            };
        },
    },
});
export const { setFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
