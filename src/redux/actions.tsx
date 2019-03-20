export const setSnackBarText = (text:string) => ({
  type: 'SET_SNACKBAR_TEXT',
  text
})

export const toggleNavbar = (navbarOpen:boolean) => ({
  type: 'TOGGLE_NAVBAR',
  navbarOpen
})

export default setSnackBarText