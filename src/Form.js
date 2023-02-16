import { useState } from 'react'

function TipForm() {
 const [bill, setBill] = useState('')
 const [tip, setTip] = useState('')
 const [split, setSplit] = useState('')

 let tip_amount = bill * tip
 let bill_total = tip_amount + bill
 let per_person = bill_total / split

  return (
    <div>
        <form>
        <input
            placeholder='Bill total' 
            type="bill"
            value={bill}
            onChange={(e) => setBill(e.target.value )}
        />

        <input 
            placeholder='Tip %' 
            type="tip"
            value={tip}
            onChange={(e) => setTip(e.target.value )}
        />

        <input
            placeholder='How many people?' 
            type="split"
            value={split}
            onChange={(e) => setSplit(e.target.value )}
        />
        </form>

        <div>Bill total: ${bill_total}</div>
        <div>Tip amount: ${tip_amount}</div>
        <div>Per person: ${per_person}</div>
    </div>
  )
}

export default TipForm