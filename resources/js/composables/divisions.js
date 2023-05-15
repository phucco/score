import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useDivisions() {
  const DIVISION_URL = '/api/divisions'

  const divisions = ref([])
  const division = ref([])
    // const errors = ref('')
    const router = useRouter()

    const getDivisions = async () => {
      let response = await axios.get(DIVISION_URL)
      divisions.value = response.data.data
    }

    const getDivision = async (id) => {
      let response = await axios.get(DIVISION_URL + '/' + id)
      division.value = response.data.data
    }

    const storeDivision = async (data) => {
      try {
        await axios.post(DIVISION_URL, data)
        await router.push({name: 'tournaments.index'})
      } catch (e) {
        console.log(e)
      }
    }

    // const updateDivision = async (id) => {
    //     errors.value = ''
    //     try {
    //         await axios.put(DIVISION_URL + '/' + id, division.value)
    //         await router.push({name: 'divisions.index'})
    //     } catch (e) {
    //         if(e.response.status === 422){
    //             for(let key in e.response.data.errors){
    //                 errors.value += e.response.data.errors[key][0] + ' '
    //             }
    //         }
    //     }
    // }

    const destroyDivision = async (id) => {
        if(! window.confirm('Are you sure?')){
            return
        }
        await axios.delete(DIVISION_URL + '/' + id)
        await getDivisions()
    }

    return{
      division,
      divisions,
        // errors,
        getDivision,
        getDivisions,
        storeDivision,
        // updateDivision,
        destroyDivision
      }
    }
