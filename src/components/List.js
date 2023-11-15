import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import ListItem from '@/components/ListItem'
import MiniList from '@/components/MiniList'

export default function List() {
  return (
    <div className={styles.mega_list_container}>
      <div className={styles.left_side_wrapper}>hello left side thingz</div>
      <div className={styles.big_list_wrapper}>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>

      <div className={styles.mini_list_wrapper}>
        <MiniList />
      </div>
    </div>
  )
}
