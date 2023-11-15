import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

export default function List() {
  return (
    <div className={styles.list_wrapper}>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    </div>
  )
}
