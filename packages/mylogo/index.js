import mylogo from '~/mylogo/src/mylogo'

mylogo.Install = (Vue) => {
    Vue.component(mylogo.name, mylogo)
}

export default mylogo