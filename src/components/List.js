import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import ListItem from '@/components/ListItem'
import MiniList from '@/components/MiniList'
import LeftSide from '@/components/LeftSide'

export default function List() {
  return (
    <div className={styles.mega_list_container}>
      <LeftSide />
      <div className={styles.big_list_wrapper}>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>

      <MiniList />
    </div>
  )
}
