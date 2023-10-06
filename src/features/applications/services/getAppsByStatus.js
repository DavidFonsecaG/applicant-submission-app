
export const getAppsByStatus = (statusFilter, applications) => {

    return statusFilter
    ? applications.filter(application => application.status === statusFilter)
    : applications
}