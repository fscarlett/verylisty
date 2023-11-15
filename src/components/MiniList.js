import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import MiniListItem from '@/components/MiniListItem'

export default function MiniList() {
  return (
    <div className={styles.mini_list_wrapper}>
      <ul>
        <MiniListItem />
        <MiniListItem />
        <MiniListItem />
        <MiniListItem />
        <MiniListItem />
      </ul>
    </div>
  )
}
