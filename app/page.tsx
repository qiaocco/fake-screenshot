"use client"

import styles from './styles.module.css'
import React, {useCallback, useEffect, useRef, useState} from "react";
import {renderCanvas} from "@/app/utils/renderCanvas";

export default function Home() {
    const quotes = ['世界上没有什么事是一顿烧烤不能解决的\n如果有\n那就两顿'];
    const [content, setContent] = useState(quotes[0])
    const [image, setImage] = useState("/assets/赵四.jpg")
    const [fontSize, setFontSize] = useState(24)
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleHeroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log("handleHero:", e.target.value)
        setImage(e.target.value)
    }
    const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleFontSize: ", e.target.value)
        setFontSize(Number(e.target.value))
    }

    const handleRenderCanvas = useCallback(() => {
        renderCanvas(canvasRef.current, content, image, "Arial", fontSize, false);
    }, [image, content, fontSize])

    useEffect(() => {
        handleRenderCanvas();
    }, [image, content, fontSize, handleRenderCanvas]);

    const handleSaveImage = (e: any) => {
        e.preventDefault()
        const canvas = canvasRef.current;
        if (!canvas) {
            return
        }
        const link = document.createElement("a")
        link.download = "screenshot.png"
        link.href = canvas.toDataURL()
        link.click()
    }
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
                        onChange={handleHeroChange}
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
                    <label htmlFor="font-size">字体大小</label>
                    <div className={styles.formFont}>
                        <input type="range" id="font-size" name="font-size" min="12" max="48" step="1"
                               value={fontSize}
                               onChange={handleFontSize}
                        />
                        <span>{fontSize}px</span>
                    </div>
                    <button className={styles.formButton} onClick={handleSaveImage}>保存图片</button>
                </form>
                <div className={styles.right}>
                    <canvas ref={canvasRef} className="w-full h-auto border rounded"></canvas>
                </div>
            </main>
        </div>
    );
}
