import {useNavigate, useParams} from "react-router-dom";
import {deleteInvoice, getInvoice} from "../../data";

export default function Invoice() {
    let navigate = useNavigate();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (
        <main style={{padding: "1rem"}}>
            <h4>Total Due: {invoice.amount}</h4>
            <span>{invoice.name}: {invoice.number}</span><br/>
            <span>Due Date: {invoice.due}</span><br/><br/>
            <span>
                <button onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("..");
                }}>
                    Delete
                </button>
            </span>
        </main>
    );
}
