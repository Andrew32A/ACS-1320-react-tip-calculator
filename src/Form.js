import { useState } from 'react'
import "./Form.css"

function TipForm() {
 const [bill, setBill] = useState(0)
 const [tip, setTip] = useState(0)
 const [split, setSplit] = useState(0)

 let tip_conversion = tip / 100
 let tip_amount = parseFloat(bill) * parseFloat(tip_conversion)
 let bill_total = parseFloat(tip_amount) + parseFloat(bill)
 let per_person = parseFloat(bill_total) / parseFloat(split)

  return (
    <div className='wrapper'>
        <form>
            <div className='tipPrompt'>Bill total:</div>
            <input
                placeholder='Bill total' 
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
            />

            <div className='tipPrompt'>Tip %:</div>
            <input 
                placeholder='Tip %' 
                type="number"
                value={tip}
                onChange={(e) => setTip(e.target.value)}
            />

            <div className='tipPrompt'># People:</div>
            <input
                placeholder='How many people?' 
                type="number"
                value={split}
                onChange={(e) => setSplit(e.target.value)}
            />
        </form>

        <div className='results'>
            <div>Bill total: ${bill_total.toFixed(2)}</div>
            <div>Tip amount: ${tip_amount.toFixed(2)}</div>
            <div>Per person: ${per_person.toFixed(2)}</div>
        </div>
    </div>
  )
}

export default TipForm