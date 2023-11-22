import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import NoteToSelf from '@/components/NoteToSelf'
import ProjectList from '@/components/ProjectList'

export default function LeftSide() {
  return (
    <div className={styles.left_side_wrapper}>
      <NoteToSelf />
      <ProjectList />
    </div>
  )
}
