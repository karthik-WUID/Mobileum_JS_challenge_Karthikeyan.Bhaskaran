// styled.d.ts

// Import the DefaultTheme from styled-components
import 'styled-components'
import { Theme } from './Themes'

// Extend the DefaultTheme interface
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
