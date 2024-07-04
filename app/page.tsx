"use client"

import styles from './styles.module.css'
import {useEffect, useRef, useState} from "react";
import {renderCanvas} from "@/app/utils/renderCanvas";

export default function Home() {
    const quotes = ['世界上没有什么事是一顿烧烤不能解决的\n如果有\n那就两顿'];
    const [content, setContent] = useState(quotes[0])
    const [hero, setHero] = useState("/assets/赵四.jpg")
    // const canvasRef = useRef();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const handleHero = (e: any) => {
        console.log("handleHero:", e.target.value)
        setHero(e.target.value)
    }

    const handleRenderCanvas = (text: string) => {
        renderCanvas(canvasRef.current, content, hero, "Arial", 24, false);
    }

    useEffect(() => {
        handleRenderCanvas(content);
    }, [hero, content]);

    return (
        <div className={styles.container}>
            <header className={styles.pageHeader}>
                <h1 className={styles.firstTitle}>字幕截图生成器</h1>
                <h2 className={styles.secondTitle}>“都有截图了一定是真的”</h2>
            </header>
            <main className={styles.content}>
                <form className={styles.left}>
                    <label htmlFor="hero" className={styles.fieldTitle}>选择英雄</label>
                    <select
                        name="hero"
                        id="hero"
                        className={styles.selectHero}
                        onChange={handleHero}
                    >
                        <option value="/assets/赵四.jpg">赵四</option>
                        <option value="/assets/刘能.jpg">刘能</option>
                        <option value="/assets/郭德纲.jpg">郭德纲</option>
                        <option value="/assets/鲁迅.jpg">鲁迅</option>
                        <option value="/assets/罗永浩.jpg">罗永浩</option>
                        <option value="/assets/马斯克.jpg">马斯克</option>
                        <option value="/assets/马云.jpg">马云</option>
                        <option value="/assets/莫言.jpg">莫言</option>
                        <option value="/assets/乔布斯.jpg">乔布斯</option>
                        <option value="/assets/杨澜.jpg">杨澜</option>
                        <option value="/assets/于丹.jpg">于丹</option>
                    </select>
                    <label htmlFor="content" className={styles.fieldTitle}>台词（一排不要太长了）</label>
                    <textarea
                        name="content"
                        className={styles.formContent}
                        placeholder={quotes[0]}
                        value={content}
                        onChange={(e) => setContent(e.target.value)} rows={8} id="content"
                    />
                    <button className={styles.formButton}>保存图片</button>
                </form>
                <div className={styles.right}>
                    <canvas ref={canvasRef} className="w-full h-auto border rounded"></canvas>
                </div>
            </main>
        </div>
    );
}