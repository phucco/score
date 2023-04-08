import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useTournaments(){
    const TOURNAMENT_URL = '/api/tournaments'

    const tournaments = ref([])
    const total = ref(0)
    const perPage = ref(10)
    const tournament = ref([])
    const errors = ref('')
    const router = useRouter()

    const getTournaments = async () => {
        let response = await axios.get(TOURNAMENT_URL)
        tournaments.value = response.data.data
        total.value = response.data.meta.total
        perPage.value = response.data.meta.per_page
    }

    const getTournament = async (id) => {
        let response = await axios.get(TOURNAMENT_URL + '/' + id)
        tournament.value = response.data.data
    }

    const storeTournament = async (data) => {
        errors.value = ''
        try {
            await axios.post(TOURNAMENT_URL, data)
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
            await axios.put(TOURNAMENT_URL + '/' + id, tournament.value)
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
        await axios.delete(TOURNAMENT_URL + '/' + id)
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
