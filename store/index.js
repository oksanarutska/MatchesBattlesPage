
export const state = () => ({
    currentTypeTourney: 'Matches',

})


export const mutations = {
    changeTypeTourney(state, value) {
        state.currentTypeTourney = value;
    },
}
