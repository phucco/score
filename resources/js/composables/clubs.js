import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useClubs(){
    const CLUB_URL = '/api/clubs/'

    const clubs = ref([])
    const total = ref(500)
    const perPage = ref(10)
    const club = ref([])
    const errors = ref('')
    const router = useRouter()

    const getClubs = async () => {
        let response = await axios.get(CLUB_URL)
        clubs.value = response.data.data
        total.value = response.data.meta.total
        perPage.value = response.data.meta.per_page
    }

    const getClub = async (id) => {
        let response = await axios.get(CLUB_URL + id)
        club.value = response.data.data
    }

    const storeClub = async (data) => {
        errors.value = ''
        try {
            await axios.club(CLUB_URL, data)
            await router.push({name: 'clubs.index'})
        } catch (e) {
            // if(e.response.status === 422){
                // for(const key in e.response.data.errors){
                //     errors.value +=e.response.data.errors[key][0]+' '
                // }
            // }
            // console.log(e.response)
        }
    }

    const updateClub = async (id) => {
        errors.value = ''
        try {
            await axios.put(CLUB_URL + id, club.value)
            await router.push({name: 'clubs.index'})
        } catch (e) {
            if(e.response.status === 422){
                for(const key in e.response.data.errors){
                    errors.value +=e.response.data.errors[key][0]+' '
                }
            }
        }
    }

    const destroyClub = async (id) => {
        if(! window.confirm('Are you sure?')){
            return
        }
        await axios.delete(CLUB_URL + id)
        await getClubs()
    }

    return{
        club,
        total,
        clubs,
        errors,
        perPage,
        getClub,
        getClubs,
        storeClub,
        updateClub,
        destroyClub
    }
}
