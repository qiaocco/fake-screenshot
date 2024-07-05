"use client"

import React, {useCallback, useEffect, useRef, useState} from "react";
import {renderCanvas} from "@/app/utils/renderCanvas";

export default function Home() {
    const quotes = ['世界上没有什么事是一顿烧烤不能解决的\n如果有\n那就两顿'];
    const [content, setContent] = useState(quotes[0])
    const [image, setImage] = useState("/assets/赵四.jpg")
    const [fontSize, setFontSize] = useState(24)
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleHeroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setImage(e.target.value)
    }
    const handleFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFontSize(Number(e.target.value))
    }

    const handleRenderCanvas = useCallback(() => {
        renderCanvas(canvasRef.current, content, image, "Arial", fontSize, false);
    }, [image, content, fontSize])

    useEffect(() => {
        handleRenderCanvas();
    }, [image, content, fontSize, handleRenderCanvas]);

    const handleUpload = (e: any) => {
        const file = e.target.files[0]
        if (!file) {
            console.error("no file selected")
            return
        }
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
            const dataURL = e.target?.result;
            console.log(dataURL)
            setImage(dataURL as string);
        }
    }
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
        <div className="mx-auto max-w-5xl min-w-fit">
            {/*头部*/}
            <header className="bg-blue-500 p-10 text-center text-white">
                <h1 className="text-4xl mb-10 font-bold">字幕截图生成器</h1>
                <h2 className="text-xl">“都有截图了一定是真的”</h2>
            </header>
            {/*内容区*/}
            <main className="flex bg-white">
                {/*表单区*/}
                <form className="w-1/2 rounded p-6">
                    <label className="text-lg font-bold block mb-2" htmlFor="hero">选择英雄</label>
                    <select
                        name="hero"
                        id="hero"
                        className="w-full border-2 border-solid border-gray-200 rounded p-2 mb-2"
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
                    <label className="text-lg font-bold block mb-2 bg-blue-500 p-2 rounded text-white"
                           htmlFor="upload">上传本地英雄</label>
                    <input className="" type="file" id="upload" hidden onChange={handleUpload} name="upload"/>
                    <label className="text-lg font-bold block mb-2" htmlFor="content">台词（一排不要太长了）</label>
                    <textarea
                        name="content"
                        className="w-full border-2 border-solid border-gray-200 rounded p-2 mb-2"
                        placeholder={quotes[0]}
                        value={content}
                        onChange={(e) => setContent(e.target.value)} rows={8} id="content"
                    />
                    <label className="text-lg font-bold block mb-2 " htmlFor="font-size">字体大小</label>
                    <div className="flex items-center mb-4">
                        <input type="range" id="font-size" name="font-size" min="12" max="48" step="1"
                               value={fontSize}
                               className="w-full"
                               onChange={handleFontSize}
                        />
                        <span className="ml-4">{fontSize}px</span>
                    </div>
                    <button className="w-24 h-10 bg-blue-500 text-white rounded px-4 py-2"
                            onClick={handleSaveImage}>保存图片
                    </button>
                </form>
                {/*图片区*/}
                <div className="w-1/2 rounded">
                    <canvas ref={canvasRef} className="w-full h-auto border rounded"></canvas>
                </div>
            </main>
        </div>
    );
}
