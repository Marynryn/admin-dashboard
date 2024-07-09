export const selectIsLoggedIn = (state) => state.adminDashboard.loggedIn;
export const selectUser = (state) => state.adminDashboard.user;
export const selectGetDashboard = (state) => state.adminDashboard.dashboard;
export const selectIsLoading = (state) => state.adminDashboard.isLoading;
export const selectGetOrders = (state) => state.adminDashboard.orders;
// export const selectError = (state) => state.events.error;
// export const selectGetParticipantsFilter = (state) =>
//   state.events.participantsFilter;
// export const selectVisibleEvents = createSelector(
//   selectGetEvents,
//   selectGetFilter,
//   (events, filter) => {
//     switch (filter) {
//       case "AtoZ":
//         return events.slice().sort((a, b) => a.title.localeCompare(b.title));
//       case "ZtoA":
//         return events.slice().sort((a, b) => b.title.localeCompare(a.title));
//       case "organizer":
//         return events
//           .slice()
//           .sort((a, b) => a.organizer.localeCompare(b.organizer));
//       case "eventDate":
//         return events
//           .slice()
//           .sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
//       case "showAll":
//       default:
//         return events;
//     }
//   }
// );
// export const selectVisibleParticipants = createSelector(
//   [selectGetParticipants, selectGetParticipantsFilter],
//   (participants, filter) => {
//     if (!participants.length) {
//       return [];
//     }
//     return participants.filter(
//       (participants) =>
//         participants.name.toLowerCase().includes(filter.toLowerCase()) ||
//         participants.email.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
