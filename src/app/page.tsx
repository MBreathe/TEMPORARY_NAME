'use client'
import styles from './page.module.css'
import { useState } from 'react'
import fetcher from '@/utils/fetcher'

export default function Home() {
    const [cmd, setCmd] = useState('')

    const func = async () => {
        try {
            const res = await fetcher('/api/commands', {
                method: 'POST',
                body: JSON.stringify({ cmd: cmd }),
            })
            console.log(res.msg)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <input
                    type="text"
                    value={cmd}
                    onChange={(e) => setCmd(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && func()}
                />
            </main>
        </div>
    )
}
