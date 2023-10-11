import api from '@/plugins/api.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useClubs() {
    const clubs = ref([])
    const total = ref(0)
    const perPage = ref(10)
    const club = ref([])
    const errors = ref('')
    const router = useRouter()

    const getClubs = async () => {
        let response = await api.get('clubs/')
        clubs.value = response.data.data
        total.value = response.data.meta.total
        perPage.value = response.data.meta.per_page
    }

    const getClub = async (id) => {
        let response = await api.get('clubs/' + id)
        club.value = response.data.data
    }

    const storeClub = async (data) => {
        errors.value = ''
        try {
            await api.post('clubs/', data)
            await router.push({name: 'clubs.index'})
        } catch (e) {
            if(e.response.status === 422){
                for(let key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const updateClub = async (id) => {
        errors.value = ''
        try {
            await api.put('clubs/' + id, club.value)
            await router.push({name: 'clubs.index'})
        } catch (e) {
            if(e.response.status === 422){
                for(let key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const destroyClub = async (id) => {
        if(! window.confirm('Are you sure?')){
            return
        }
        await api.delete('clubs/' + id)
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
