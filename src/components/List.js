import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import ListItem from '@/components/ListItem'

export default function List() {
  return (
    <div className={styles.list_wrapper}>
      <ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  )
}
