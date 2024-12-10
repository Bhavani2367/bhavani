import { useSelector } from 'react-redux';

export default function PurchaseHistory() {
  const purchaseHistory = useSelector(state => state.purchaseHistory); // Corrected typo here

  return (
    <div>
      <h2>Purchase History</h2>
      {purchaseHistory.length === 0 ? (
        <p>No purchase history available.</p>
      ) : (
        <ul>
          {purchaseHistory.map((purchase, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <p><strong>Date:</strong> {purchase.date}</p>
              <p><strong>Total Amount:</strong> ${purchase.totalAmount.toFixed(2)}</p>

              <ul>
                {purchase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.name} - ${item.price.toFixed(2)} x {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
