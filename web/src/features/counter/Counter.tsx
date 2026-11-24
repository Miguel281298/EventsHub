import Typography from '@mui/material/Typography'
import { useStore } from '../../lib/stores/useStore'
import { Observer } from 'mobx-react-lite'

export default function Counter() {
  const { counterStore } = useStore()

  return (
    <Observer>
      {() => (
        <>
          <Typography variant="h4" gutterBottom>
            {counterStore.title}
          </Typography>
          <Typography variant="h6">
            Current count {counterStore.count}
          </Typography>
        </>
      )}
    </Observer>
  )
}
