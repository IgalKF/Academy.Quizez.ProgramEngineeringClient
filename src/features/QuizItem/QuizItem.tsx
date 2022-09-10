import React, { createRef, HtmlHTMLAttributes, useEffect, useRef } from "react";
import { useState } from "react";
import { Option, x } from '../../data/program-engineering-data';
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';
import { blob } from "stream/consumers";

const QuizItem = () => {

    const [index, setIndex] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedId, setSelectedId] = useState<Option>({ answer: '', right: false });
    const [scoreCount, setScoreCount] = useState<number>(1);
    const ref = createRef<HTMLDivElement>();
    const buttonRef = createRef<HTMLButtonElement>();

    const createImage = () => {
        console.log(ref.current);

        if (ref.current) {
            const x = buttonRef.current?.className!;
            if (buttonRef.current){
                buttonRef.current.className = 'invisible';
            }
            htmlToImage.toBlob(ref.current)
                .then(dataUrl => {
                    if (dataUrl) {
                        const file = new File(
                            [dataUrl], 'image.png', { type: dataUrl.type }
                        )
                        const shareData = {
                            files: [file],
                        };

                        if (buttonRef.current){
                            buttonRef.current.className = x;
                        }
                        navigator.share(shareData);
                    }
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        }
    }

    return (
        <div className="bg-slate-900 p-10 rounded-3xl" ref={ref}>
            <div className="text-right font-sans" style={{ direction: 'rtl' }}>
                <form>
                    <h6>{x[index].question}</h6>
                    <br />
                    {x[index].image ? <img className="h-72" alt={x[index].question} src={x[index].image} /> : null}
                    {x[index].options.map((a, i) => (
                        <div key={i} className="flex">
                            {showResults ?
                                a.right ?
                                    <img alt="יעני תשובה נכונה לפי ה-PDF" className="h-6 m-2" src="Sign-check-icon.png" />
                                    : <img alt="וואלה טעות" className="h-6 m-2" src="x-10366.svg" />
                                : <div className="h-6 w-6 m-2" />}
                            <input checked={a.answer === selectedId.answer} onChange={(e) => { setSelectedId(a) }} name={`${index}`} className="ml-5 radio" id={a.answer + i} type='radio' />
                            <label htmlFor={a.answer + i}>{a.answer}</label>
                            <br />
                        </div>
                    ))}
                </form>
                <div className="flex flex-col-reverse">
                    {showResults
                        ? <button className="bg-slate-500 p-3 text-lg mt-5 rounded-xl" onClick={() => { setShowResults(!showResults); setIndex(index + 1); setSelectedId({ answer: '', right: false }); }}>המשך לשאלה הבאה</button>
                        : <button disabled={selectedId.answer === ''} className="bg-slate-700 p-3 text-lg mt-5 rounded-xl" onClick={() => { setShowResults(!showResults); if (selectedId.right) setScoreCount(x => x + 1); }}>הצג את התשובות</button>
                    }
                    <div className="float-left mt-7">{!showResults ? <div>שאלות שנענו: {index}</div> : '...'}</div>
                    <div className="float-left mt-7">{!showResults ? 'ציון: ' + Math.floor(scoreCount / (index + 1) * 100) : '...'}</div>
                    <button ref={buttonRef}  onClick={createImage} className="sm:invisible float-left bg-slate-800 p-3 text-lg mt-5 ml-5 mr-5 rounded-xl">שתפו תמונה</button>
                </div>
            </div>
        </div>
    )
}

export { QuizItem };