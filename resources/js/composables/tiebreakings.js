import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useTiebreakings() {
    const TIEBREAKING_URL = '/api/tiebreakings'

    const tiebreakings = ref([])
    // const total = ref(0)
    // const perPage = ref(10)
    const tiebreaking = ref([])
    // const errors = ref('')
    // const router = useRouter()

    const getTiebreakings = async () => {
        let response = await axios.get(TIEBREAKING_URL)
        tiebreakings.value = response.data.data
        // total.value = response.data.meta.total
        // perPage.value = response.data.meta.per_page
    }

    const getTiebreaking = async (id) => {
        let response = await axios.get(TIEBREAKING_URL + '/' + id)
        tiebreaking.value = response.data.data
    }

    // const storeTiebreaking = async (data) => {
    //     errors.value = ''
    //     try {
    //         await axios.post(TIEBREAKING_URL, data)
    //         await router.push({name: 'tiebreakings.index'})
    //     } catch (e) {
    //         if(e.response.status === 422){
    //             for(let key in e.response.data.errors){
    //                 errors.value += e.response.data.errors[key][0] + ' '
    //             }
    //         }
    //     }
    // }

    // const updateTiebreaking = async (id) => {
    //     errors.value = ''
    //     try {
    //         await axios.put(TIEBREAKING_URL + '/' + id, tiebreaking.value)
    //         await router.push({name: 'tiebreakings.index'})
    //     } catch (e) {
    //         if(e.response.status === 422){
    //             for(let key in e.response.data.errors){
    //                 errors.value += e.response.data.errors[key][0] + ' '
    //             }
    //         }
    //     }
    // }

    // const destroyTiebreaking = async (id) => {
    //     if(! window.confirm('Are you sure?')){
    //         return
    //     }
    //     await axios.delete(TIEBREAKING_URL + '/' + id)
    //     await getTiebreakings()
    // }

    return{
        tiebreaking,
        // total,
        tiebreakings,
        // errors,
        // perPage,
        getTiebreaking,
        getTiebreakings,
        // storeTiebreaking,
        // updateTiebreaking,
        // destroyTiebreaking
    }
}
