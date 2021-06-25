import React, { useEffect } from 'react'
import Link from 'next/link'

import { MDBDataTable } from 'mdbreact'
import easyinvoice from 'easyinvoice'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { clearErrors } from '../../redux/actions/bookingActions'

const MyBookings = () => {

    const dispatch = useDispatch()

    const { bookings, error } = useSelector(state => state.bookings)

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }
    }, [dispatch])


    const setBookings = () => {
        const data = {
            columns: [
                {
                    label: 'Booking ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Check In',
                    field: 'checkIn',
                    sort: 'asc'
                },
                {
                    label: 'Check Out',
                    field: 'checkOut',
                    sort: 'asc'
                },
                {
                    label: 'Amount Paid',
                    field: 'amount',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                    sort: 'asc'
                }

            ],
            rows: []
        }

        bookings && bookings.forEach(booking => {
            data.rows.push({
                id: booking._id,
                checkIn: new Date(booking.checkInDate).toLocaleString('en-US'),
                checkOut: new Date(booking.checkOutDate).toLocaleString('en-US'),
                amount: `$${booking.amountPaid}`,
                actions:
                    <>
                        <Link href={`/bookings/${booking._id}`}>
                            <a className="btn btn-primary">
                                <i className="fa fa-eye"></i>
                            </a>
                        </Link>

                        <button className="btn btn-success mx-2" onClick={() => downloadInvoice(booking)}>
                            <i className="fa fa-download"></i>
                        </button>

                    </>
            })
        })

        return data;

    }

    const downloadInvoice = async (booking) => {

        const data = {
            "documentTitle": "Booking INVOICE", //Defaults to INVOICE
            "currency": "INR",
            "taxNotation": "vat", //or gst
            "marginTop": 25,
            "marginRight": 25,
            "marginLeft": 25,
            "marginBottom": 25,
            "logo": "https://www.squire.com/wp-content/uploads/2020/08/Stay-safe-to-stay-open-logo.jpg",
            "sender": {
                "company": "Stay Safe",
                "address": "Hyderabad, Telangana, India",
                "zip": "500068",
                "city": "Hyderabad",
                "country": "India"
            },
            "client": {
                "company": `${booking.user.name}`,
                "address": `${booking.user.email}`,
                "zip": "",
                "city": `Check In: ${new Date(booking.checkInDate).toLocaleString('en-US')}`,
                "country": `Check Out: ${new Date(booking.checkOutDate).toLocaleString('en-US')}`
            },
            "invoiceNumber": `${booking._id}`,
            "invoiceDate": `${new Date(Date.now()).toLocaleString('en-US')}`,
            "products": [
                {
                    "DaysOfStay": `${booking.daysOfStay} days`,
                    "description": `${booking.room.name}`,
                    "tax": (booking.room.pricePerNight*booking.daysOfStay)*0.025,
                    "price": booking.room.pricePerNight
                }
            ],
            "bottomNotice": "This is auto generated Invoice of your booking on StaySafe."
        };

        const result = await easyinvoice.createInvoice(data);
        easyinvoice.download(`invoice_${booking._id}.pdf`, result.pdf)

    }


    return (
        <div className='container container-fluid'>
            <h1 className='my-5'>My Bookings</h1>

            <MDBDataTable
                data={setBookings()}
                className='px-3'
                bordered
                striped
                hover
            />

        </div>
    )
}

export default MyBookings
