// Table Booking Confirmation
interface Customer{
    name:string
    guests: number
    time: string
}

function formatBookingConfirmation(booking: Customer): string {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`
}

console.log(formatBookingConfirmation({ name: "Aisha", guests: 4, time: "7:00 PM" }));
