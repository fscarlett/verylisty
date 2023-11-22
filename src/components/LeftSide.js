import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import LeftSideContent from '@/components/LeftSideContent'
import ProjectList from '@/components/ProjectList'

export default function LeftSide() {
  return (
    <div className={styles.left_side_wrapper}>
      <LeftSideContent />
      <ProjectList />
    </div>
  )
}
