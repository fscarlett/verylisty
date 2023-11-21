import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import ProjectList from '@/components/ProjectList'

export default function LeftSide() {
  return (
    <div className={styles.left_side_wrapper}>
      <h2>Left Side</h2>
      <div className={styles.left_side_wrapper}>left side content</div>
      <ProjectList />
    </div>
  )
}
