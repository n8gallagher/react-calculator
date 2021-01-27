import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
const theme = extendTheme ({
  // initialColorMode: "light",
  useSystemColorMode: false,
  components: {
    Button: {
      variants: {
          red: props => ({
          bg: () => {
            console.log(props.colorMode)
            switch (props.colorMode) {
              case "red":
                return "rgb(255, 0, 0)"
              case "blue":
                return "rgb(0, 0, 255)"
              case "green":
                return "rgb(0, 255, 0)"
              case "yellow":
                return "rgb(255, 255, 0)"
              default:
                break;
            }
          }
        }),
        ahmed: props => (
          console.log(props)
        )
      }
    }
  }
})
// 3. extend the theme
// const theme = extendTheme({ config })
export default theme