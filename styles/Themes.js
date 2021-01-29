const colors={
    Primary_light:'#0099ff',
    Secondary_light:'white',
    Primary_dark:'#0099ff',
    Secondary_dark:'white'
}
const light = {
    bg: colors.Primary_light,
    fontColor: colors.Secondary_light
  }
  
  const dark = {
    bg: 'black',
    fontColor: 'white'
  }
  
  export const darkTheme = { ...dark }
  export const lightTheme = { ...light }