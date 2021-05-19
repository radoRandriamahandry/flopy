import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import TextInput from "./components/forms/TextInput.vue"
import Checkbox from "./components/forms/Checkbox.vue"

// Global component

import "./index.css"

const app = createApp(App)
app.use(router)

app.component("TextInput", TextInput)
app.component("Checkbox", Checkbox)

app.mount("#app")
