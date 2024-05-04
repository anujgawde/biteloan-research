import axios from "axios";
import { useState } from "react";

export default function Trial() {
  const [file, setFile] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const [data, setData] = useState<{
    customerId: string;
    borrowerName: string;
    totalLoanAmount: string;
    currentInstalment: string;
    contactNumber: string;
  }>();

  const documentSubmitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const result: {
        data: {
          customerId: string;
          borrowerName: string;
          totalLoanAmount: string;
          currentInstalment: string;
          contactNumber: string;
        };
      } = await axios.post(
        "http://localhost:8080/documents/extract-data",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result);
      setIsLoading(false);
      setData(result.data);
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      {!isLoading ? (
        <div className="space-y-8">
          <form onSubmit={documentSubmitHandler} className="space-y-4">
            <p className="text-4xl font-bold">Upload Loan Document</p>
            <input
              type="file"
              onChange={(event) => setFile(event.target.files![0])}
            />
            <button className="rounded-md border px-6 py-2">Submit</button>
          </form>

          {data && (
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-xl">Customer ID</p>
                <input className="rounded-md" value={data.customerId} />
              </div>
              <div>
                <p className="font-semibold text-xl">Borrower Name</p>
                <input className="rounded-md" value={data.borrowerName} />
              </div>
              <div>
                <p className="font-semibold text-xl">Total Loan Amount</p>
                <input className="rounded-md" value={data.totalLoanAmount} />
              </div>
              <div>
                <p className="font-semibold text-xl">Current Instalment</p>
                <input className="rounded-md" value={data.currentInstalment} />
              </div>
              <div>
                <p className="font-semibold text-xl">Contact Number</p>
                <input className="rounded-md" value={data.contactNumber} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
