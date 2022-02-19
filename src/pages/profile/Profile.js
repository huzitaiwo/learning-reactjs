import { useFetch } from '../../hooks/useFetch'

// styles
import './Profile.css'


export default function Profile() {
  const { data: pofiles, error, isPending } = useFetch

  return (
    <div>Profile</div>
  )
}
