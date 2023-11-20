import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

export default function ProjectListItem() {
  return (
    <li className={styles.project_list_item_wrapper}>
      <h4>Project Title</h4>
    </li>
  )
}
