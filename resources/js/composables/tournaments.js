import api from '@/plugins/api.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useTournaments() {
    const tournaments = ref([])
    const total = ref(0)
    const perPage = ref(10)
    const tournament = ref([])
    const errors = ref('')
    const router = useRouter()

    const getTournaments = async () => {
        let response = await api.get('/tournaments/')
        tournaments.value = response.data.data
        total.value = response.data.meta.total
        perPage.value = response.data.meta.per_page
    }

    const getTournament = async (id) => {
        let response = await api.get('/tournaments/' + id)
        tournament.value = response.data.data
    }

    const storeTournament = async (data) => {
        errors.value = ''
        try {
            await api.post('/tournaments/', data)
            await router.push({name: 'tournaments.index'})
        } catch (e) {
            if(e.response.status === 422){
                for(let key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const updateTournament = async (id) => {
        errors.value = ''
        try {
            await api.put('/tournaments/' + id, tournament.value)
            await router.push({name: 'tournaments.index'})
        } catch (e) {
            if(e.response.status === 422){
                for(let key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const destroyTournament = async (id) => {
        if(! window.confirm('Are you sure?')){
            return
        }
        await api.delete('/tournaments/' + id)
        await getTournaments()
    }

    return{
        tournament,
        total,
        tournaments,
        errors,
        perPage,
        getTournament,
        getTournaments,
        storeTournament,
        updateTournament,
        destroyTournament
    }
}
