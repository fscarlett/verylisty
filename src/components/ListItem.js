import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

export default function ListItem() {
  return (
    <li className={styles.list_item_wrapper}>
      <h2>List Item Title</h2>
      <p>List Item Details</p>
    </li>
  )
}
