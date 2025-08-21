import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Calendar, 
  FileText, 
  DollarSign, 
  Activity,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Download
} from "lucide-react";
import { 
  mockEvents, 
  mockResolutions, 
  mockFinancials, 
  mockActivities, 
  mockUsers,
  dashboardStats 
} from "@/data/mockData";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">CICSSO Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your organization's activities and data</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="resolutions">Documents</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalEvents}</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalMembers}</div>
                  <p className="text-xs text-muted-foreground">+15 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Income</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₱{dashboardStats.totalIncome.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+12% from last quarter</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Activities</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardStats.totalActivities}</div>
                  <p className="text-xs text-muted-foreground">This semester</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest organizational activities and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockActivities.slice(0, 3).map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {activity.participants} participants • {new Date(activity.date).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant="outline">{activity.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Events Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>

            <div className="grid gap-6">
              {mockEvents.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="text-sm"><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                        <p className="text-sm"><strong>Time:</strong> {event.time}</p>
                        <p className="text-sm"><strong>Location:</strong> {event.location}</p>
                      </div>
                      <Badge variant={event.status === 'upcoming' ? 'default' : 'secondary'}>
                        {event.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="resolutions" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Documents Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </div>

            <div className="grid gap-6">
              {mockResolutions.map((resolution) => (
                <Card key={resolution.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{resolution.title}</CardTitle>
                        <CardDescription>{resolution.description}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Uploaded: {new Date(resolution.dateUploaded).toLocaleDateString()}
                      </p>
                      <Badge variant="outline">{resolution.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Financial Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </div>

            <div className="grid gap-6">
              {mockFinancials.map((financial) => (
                <Card key={financial.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{financial.title}</CardTitle>
                        <CardDescription>{financial.description}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Badge variant={financial.type === 'income' ? 'default' : 'destructive'}>
                          {financial.type === 'income' ? '+' : '-'}₱{financial.amount.toLocaleString()}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        {new Date(financial.date).toLocaleDateString()}
                      </p>
                      <Badge variant="outline">{financial.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Activities Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Activity
              </Button>
            </div>

            <div className="grid gap-6">
              {mockActivities.map((activity) => (
                <Card key={activity.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{activity.title}</CardTitle>
                        <CardDescription>{activity.description}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <p className="text-sm"><strong>Date:</strong> {new Date(activity.date).toLocaleDateString()}</p>
                        <p className="text-sm"><strong>Participants:</strong> {activity.participants}</p>
                      </div>
                      <Badge variant="outline">{activity.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            <div className="grid gap-6">
              {mockUsers.map((user) => (
                <Card key={user.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{user.username}</CardTitle>
                        <CardDescription>{user.email}</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">
                        Last login: {new Date(user.lastLogin).toLocaleDateString()}
                      </p>
                      <Badge variant={user.role === 'admin' ? 'default' : 'outline'}>
                        {user.role}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;