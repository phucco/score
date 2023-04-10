import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useFormats() {
    const FORMAT_URL = '/api/formats'

    const formats = ref([])
    // const total = ref(0)
    // const perPage = ref(10)
    const format = ref([])
    // const errors = ref('')
    // const router = useRouter()

    const getFormats = async () => {
        let response = await axios.get(FORMAT_URL)
        formats.value = response.data.data
        // total.value = response.data.meta.total
        // perPage.value = response.data.meta.per_page
    }

    const getFormat = async (id) => {
        let response = await axios.get(FORMAT_URL + '/' + id)
        format.value = response.data.data
    }

    // const storeFormat = async (data) => {
    //     errors.value = ''
    //     try {
    //         await axios.post(FORMAT_URL, data)
    //         await router.push({name: 'formats.index'})
    //     } catch (e) {
    //         if(e.response.status === 422){
    //             for(let key in e.response.data.errors){
    //                 errors.value += e.response.data.errors[key][0] + ' '
    //             }
    //         }
    //     }
    // }

    // const updateFormat = async (id) => {
    //     errors.value = ''
    //     try {
    //         await axios.put(FORMAT_URL + '/' + id, format.value)
    //         await router.push({name: 'formats.index'})
    //     } catch (e) {
    //         if(e.response.status === 422){
    //             for(let key in e.response.data.errors){
    //                 errors.value += e.response.data.errors[key][0] + ' '
    //             }
    //         }
    //     }
    // }

    // const destroyFormat = async (id) => {
    //     if(! window.confirm('Are you sure?')){
    //         return
    //     }
    //     await axios.delete(FORMAT_URL + '/' + id)
    //     await getFormats()
    // }

    return{
        format,
        // total,
        formats,
        // errors,
        // perPage,
        getFormat,
        getFormats,
        // storeFormat,
        // updateFormat,
        // destroyFormat
    }
}
