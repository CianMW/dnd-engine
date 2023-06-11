import { storageContext } from '@/context';
import styles from './Settings.module.css'
import { useContext } from 'react';
export default function Settings() {
    const {
        //@ts-ignore
      adventureLocation:[adventureLocation,setAdventureLocation],
      //@ts-ignore
      season:[season,setSeason],
      //@ts-ignore
      wordCount:[wordCount,setWordCount],
      //@ts-ignore
    } = useContext(storageContext);

    return(<div className={styles.settingContainer}>
        <div className={styles.setting}>
        <label className={styles.label}>Adventure Location: </label>
        <select value={adventureLocation} onChange={(e) => setAdventureLocation(e.currentTarget.value)}>
            <option value={'standard wilderness'}>Standard Wilderness</option>
            <option value={'special wilderness'}>special Wilderness</option>
            <option value={'standard room'}>Standard Room</option>
            <option value={'special room'}>Special Room</option>
            <option value={'passage'}>Passage</option>
        </select>
        </div>
        <div className={styles.setting}>
        <label className={styles.label}>Season: </label>
        <select value={season} onChange={(e) => setSeason(e.currentTarget.value)}>
            <option value={'spring'}>Spring</option>
            <option value={'summer'}>Summer</option>
            <option value={'autumn'}>Autumn</option>
            <option value={'winter'}>Winter</option>
        </select>
        </div>
        <div className={styles.setting}>
        <label className={styles.label}>Word Count: </label>
        <input type={'number'} value={wordCount} onChange={(e) => setWordCount(e.currentTarget.value)}>
        </input>
        </div>
    </div>)

}
