import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

export default function MiniListItem() {
  return (
    <li className={styles.mini_list_item_wrapper}>
      <h4>Mini List Item Title</h4>
      <p>List Item Details</p>
    </li>
  )
}
