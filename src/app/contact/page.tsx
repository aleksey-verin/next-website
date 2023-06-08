import { FC } from 'react'
import styles from './page.module.css'

interface ContactsProps {}

const Contacts: FC<ContactsProps> = ({}) => {
  return <div className={styles.contact}>Contacts</div>
}

export default Contacts
