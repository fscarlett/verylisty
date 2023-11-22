import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/List.module.css'

export default function NoteToSelf() {
  return (
    <div className={styles.note_to_self_wrapper}>
      <h2>Note to self</h2>
      <div className={styles.note_to_self_content}>
        left side content Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ipsam magni reiciendis, sint eum quas ea dolorum sunt aspernatur
        nesciunt laboriosam possimus. Dolores accusamus minima voluptatibus
        voluptate porro distinctio necessitatibus autem?
      </div>
    </div>
  )
}
