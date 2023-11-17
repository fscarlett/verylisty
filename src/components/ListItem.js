import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

export default function ListItem() {
  return (
    <li className={styles.list_item_wrapper}>
      <h2>List Item Title</h2>
      <p>List Item Details</p>
      <div className={styles.list_item_status_wrapper}>
        <span className={styles.list_item_status}>Level</span>
        <span className={styles.list_item_status}>Status</span>
        <span className={styles.list_item_status}>Project</span>
        <span className={styles.list_item_status}>Due</span>
      </div>
    </li>
  )
}
