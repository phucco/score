import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useGroups() {
    const GROUP_URL = '/api/groups'

    const groups = ref([])
    const group = ref([])
    // const errors = ref('')
    const router = useRouter()

    const getGroups = async () => {
        let response = await axios.get(GROUP_URL)
        groups.value = response.data.data
    }

    const getGroup = async (id) => {
        let response = await axios.get(GROUP_URL + '/' + id)
        group.value = response.data.data
    }

    const storeGroup = async (data) => {
        try {
            await axios.post(GROUP_URL, data)
            await router.push({name: 'tournaments.index'})
        } catch (e) {
            console.log(e)
        }
    }

    // const updateGroup = async (id) => {
    //     errors.value = ''
    //     try {
    //         await axios.put(GROUP_URL + '/' + id, group.value)
    //         await router.push({name: 'groups.index'})
    //     } catch (e) {
    //         if(e.response.status === 422){
    //             for(let key in e.response.data.errors){
    //                 errors.value += e.response.data.errors[key][0] + ' '
    //             }
    //         }
    //     }
    // }

    // const destroyGroup = async (id) => {
    //     if(! window.confirm('Are you sure?')){
    //         return
    //     }
    //     await axios.delete(GROUP_URL + '/' + id)
    //     await getGroups()
    // }

    return{
        group,
        groups,
        // errors,
        getGroup,
        getGroups,
        storeGroup,
        // updateGroup,
        // destroyGroup
    }
}
