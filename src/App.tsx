import { useEffect, useState } from 'react'
import './App.css'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import SmartPaginator from "@/components/SmartPaginator.tsx";
import {client as myaFimClient, components as myaFimComponents} from "@/lib/api/myafim";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState<myaFimComponents["schemas"]["Transaction"][]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const currencyFormatter = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });
  const dateFormatter = new Intl.DateTimeFormat('fr-FR', { dateStyle: "short" });

  useEffect(() => {
    myaFimClient
      .GET("/transactions", { params: { query: { page: currentPage, limit: 10 } } })
      .then((res) => {
        if (!res.data) {
          throw new Error(res.error)
        }
        return res.data;
      })
      .then((data) => {
        setTotalPages(data.totalPages);
        setTransactions(data.results);
      });
  }, [currentPage]);

  return (
    <div className="w-screen">
      <Table>
        <TableCaption>TableCaption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10/12">Invoice</TableHead>
            <TableHead className="w-1/12">Date</TableHead>
            <TableHead className="text-right w-1/12">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            transactions.map(transaction => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.description}</TableCell>
                <TableCell>{
                  dateFormatter.format(Date.parse(transaction.valueDate))
                }</TableCell>
                <TableCell className="text-right">{
                  currencyFormatter.format(transaction.amount / 100)
                }</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

      <SmartPaginator currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  )
}
