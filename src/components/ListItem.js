import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

export default function ListItem() {
  return (
    <li className={styles.list_item_wrapper}>
      <div className={styles.list_item_header}>
        <h2>Nice Big Important List Item Title</h2>
        <span className={styles.list_item_header_icon}>
          edit
          {/* <Image src='/icons/arrow-right.svg' width={12} height={12} /> */}
        </span>
      </div>
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
