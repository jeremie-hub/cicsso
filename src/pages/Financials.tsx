import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { mockFinancials, dashboardStats } from "@/data/mockData";

const Financials = () => {
  const totalIncome = dashboardStats.totalIncome;
  const totalExpenses = dashboardStats.totalExpenses;
  const netBalance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Financial Transparency
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete transparency of CICSSO's financial activities and reports
          </p>
        </div>

        {/* Financial Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Income</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">₱{totalIncome.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last quarter
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">₱{totalExpenses.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                -5% from last quarter
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${netBalance >= 0 ? 'text-primary' : 'text-red-500'}`}>
                ₱{netBalance.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Current fiscal year
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Financial Records */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-foreground">Financial Records</h2>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Full Report
            </Button>
          </div>

          <div className="grid gap-6">
            {mockFinancials.map((financial) => (
              <Card key={financial.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{financial.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {financial.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant={financial.type === 'income' ? 'default' : 'destructive'}>
                        {financial.type === 'income' ? '+' : '-'}₱{financial.amount.toLocaleString()}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        {new Date(financial.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{financial.category}</Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      View Receipt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transparency Notice */}
        <Card className="mt-12 bg-accent/50">
          <CardHeader>
            <CardTitle className="text-primary">Financial Transparency Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              CICSSO is committed to complete financial transparency. All financial records, 
              including income, expenses, and budget allocations, are available for public viewing. 
              For detailed financial statements or audit reports, please contact our treasurer 
              or visit our office during business hours.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Financials;