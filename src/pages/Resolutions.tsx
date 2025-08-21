import { useState } from "react";
import { Download, FileText, Calendar, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Resolutions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const documents = [
    {
      id: 1,
      title: "Student Financial Assistance Program Resolution",
      type: "resolution",
      date: "2024-01-15",
      description: "Expanding financial aid programs for computing sciences students",
      category: "Financial",
      downloadUrl: "#",
      status: "approved"
    },
    {
      id: 2,
      title: "Annual Financial Statement 2023",
      type: "financial",
      date: "2024-01-01",
      description: "Complete financial overview and budget allocation for the academic year",
      category: "Financial",
      downloadUrl: "#",
      status: "published"
    },
    {
      id: 3,
      title: "Tech Innovation Summit Progress Report",
      type: "report",
      date: "2023-12-20",
      description: "Comprehensive report on the planning and execution of our flagship event",
      category: "Events",
      downloadUrl: "#",
      status: "final"
    },
    {
      id: 4,
      title: "Academic Partnership Initiative",
      type: "resolution",
      date: "2023-12-15",
      description: "Resolution to establish partnerships with industry leaders for internships",
      category: "Academic",
      downloadUrl: "#",
      status: "approved"
    },
    {
      id: 5,
      title: "Q3 Accomplishment Report",
      type: "report",
      date: "2023-11-30",
      description: "Quarterly accomplishments and key performance indicators",
      category: "Administrative",
      downloadUrl: "#",
      status: "published"
    },
    {
      id: 6,
      title: "Student Mentorship Program Guidelines",
      type: "resolution",
      date: "2023-11-10",
      description: "Establishing formal mentorship programs for junior students",
      category: "Academic",
      downloadUrl: "#",
      status: "draft"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-success";
      case "published": return "bg-primary";
      case "final": return "bg-warning";
      case "draft": return "bg-muted";
      default: return "bg-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "resolution": return "📋";
      case "financial": return "💰";
      case "report": return "📊";
      default: return "📄";
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || doc.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resolutions & Reports
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our organizational documents, financial statements, and progress reports. 
              Transparency and accountability are at the core of our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="resolution">Resolutions</SelectItem>
                    <SelectItem value="financial">Financial</SelectItem>
                    <SelectItem value="report">Reports</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <Card key={doc.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="text-2xl mb-2">{getTypeIcon(doc.type)}</div>
                    <Badge className={`${getStatusColor(doc.status)} text-white`}>
                      {doc.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(doc.date).toLocaleDateString()}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{doc.category}</Badge>
                      <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No documents found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Transparency Statement */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Transparency</h2>
          <p className="text-lg text-muted-foreground mb-8">
            CICSSO believes in open governance and accountability to our members. All organizational 
            decisions, financial allocations, and progress reports are made available to ensure 
            transparency in our operations and build trust within our community.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="font-semibold mb-2">Open Access</h3>
                <p className="text-sm text-muted-foreground">
                  All members can access organizational documents and reports
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="font-semibold mb-2">Regular Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Quarterly reports and regular progress updates
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="font-semibold mb-2">Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Clear documentation of all organizational decisions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resolutions;