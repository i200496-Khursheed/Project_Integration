const BuyerDetails = ({ buyer }) => {

    const handleClick = async () => {
        const response = await fetch('/api/buyerinfo/' + buyer._id, {
            method: 'DELETE'
        })
    }

    const updateInfo = async() => {
        const name = prompt('Update Name')
        const location = prompt('Update Location')
        const phoneNo = prompt('Update Phone No')

        const Property = {
            name: name,
            location:location,
            phoneNo: phoneNo
        }

        const update = await fetch('/api/buyerinfo/' + buyer._id, {
            method: 'PUT',
            body: JSON.stringify(Property),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="buyer-details" data-testid="buyerDetail">
            <h4>{buyer.name}</h4>
            <p><strong>Location: </strong>{buyer.location}</p>
            <p><strong>Phone No: </strong>{buyer.phoneNo}</p>
            <button className="deleteButton" onClick={handleClick}> Delete </button>
            <button className="updateButton" onClick={updateInfo}>Update</button>
        </div>
    )
}

export default BuyerDetails