import {useContext, createContext} from "react"

export const TestContext = createContext()

export const TestProvider = TestContext.Provider

export default  function getTest() {
    return useContext(TestContext)
}