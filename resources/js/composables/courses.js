import api from '@/plugins/api.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useCourses() {
    const courses = ref([])
    const total = ref(0)
    const perPage = ref(10)
    const course = ref([])
    const errors = ref('')
    const router = useRouter()

    const getCourses = async () => {
        let response = await api.get('/courses/')
        courses.value = response.data.data
        total.value = response.data.meta.total
        perPage.value = response.data.meta.per_page
    }

    const getCourse = async (id) => {
        let response = await api.get('/courses/' + id)
        course.value = response.data.data
    }

    const storeCourse = async (data) => {
        errors.value = ''
        try {
            await api.post('/courses/', data)
            await router.push({name: 'courses.index'})
        } catch (e) {
            if(e.response.status === 422){
                for(let key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const updateCourse = async (id) => {
        errors.value = ''
        try {
            await api.put('/courses/' + id, course.value)
            await router.push({name: 'courses.index'})
        } catch (e) {
            if(e.response.status === 422){
                for(let key in e.response.data.errors){
                    errors.value += e.response.data.errors[key][0] + ' '
                }
            }
        }
    }

    const destroyCourse = async (id) => {
        if(! window.confirm('Are you sure?')){
            return
        }
        await api.delete('/courses/' + id)
        await getCourses()
    }

    return{
        course,
        total,
        courses,
        errors,
        perPage,
        getCourse,
        getCourses,
        storeCourse,
        updateCourse,
        destroyCourse
    }
}
