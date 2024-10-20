import { Button } from "../ui/button";

function OrderDetail() {
  return (
    <>
      {/* when order is placed */}
      <div className="order-detail-component">
        <div className="main">
          <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-2">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2A9 9 0 1112 3a9 9 0 0112 9z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Thank you, Olivia</h2>
              <p className="text-sm text-gray-500">ORDER NUMBER: 1234</p>
            </div>

            {/* Order Details */}
            <div className="border rounded-lg p-4 space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">oliviajohnson@gmail.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Address</span>
                <span className="font-medium">
                  123 Main Street, Anytown, USA
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Total amount</span>
                <span className="font-medium">$119.57</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Payment method</span>
                <span className="font-medium">Visa ending in ****1234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Payment time</span>
                <span className="font-medium">
                  February 27, 2024 at 10:43 AM (UTC-5)
                </span>
              </div>
            </div>

            {/* Thank you message */}
            <p className="text-gray-700 text-sm mb-6">
              Thank you for your purchase! Your order has been successfully
              processed and you will receive a confirmation email shortly.
            </p>
            <p className="text-gray-700 text-sm mb-6">
              If you have any questions or concerns regarding your order, please
              contact our customer support team at
              <a
                href="mailto:support@example.com"
                className="text-blue-500 underline"
              >
                {" "}
                support@example.com
              </a>{" "}
              or call us at
              <a href="tel:+1-800-123-4567" className="text-blue-500 underline">
                {" "}
                +1-800-123-4567
              </a>
              .
            </p>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <p className="text-gray-500">Need help?</p>
              <Button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
                Continue shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
