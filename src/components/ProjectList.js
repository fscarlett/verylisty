import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

import ProjectListItem from '@/components/ProjectListItem'

export default function ProjectList() {
  return (
    <div className={styles.project_list_wrapper}>
      <h2>Projects</h2>
      <ul>
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
        <ProjectListItem />
      </ul>
    </div>
  )
}
