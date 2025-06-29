import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Switch } from "../components/ui/switch";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Toggle } from "../components/ui/toggle";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "../components/ui/tooltip";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../components/ui/table";

export default function ThemeTestPage() {
  const [checked, setChecked] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-3xl font-bold mb-4">Theme Test Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Card Example */}
          <Card>
            <CardHeader>
              <CardTitle>Card Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Button variant="default">Default Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <div className="flex items-center gap-2">
                  <Switch id="theme-switch" checked={checked} onCheckedChange={setChecked} />
                  <label htmlFor="theme-switch">Switch Example</label>
                </div>
                <Badge variant="default">Default Badge</Badge>
                <Badge variant="secondary">Secondary Badge</Badge>
                <Separator />
                <Alert>
                  <AlertTitle>Alert Title</AlertTitle>
                  <AlertDescription>This is an alert description for theme testing.</AlertDescription>
                </Alert>
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">Content for Tab 1</TabsContent>
                  <TabsContent value="tab2">Content for Tab 2</TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
          {/* More Components */}
          <Card>
            <CardHeader>
              <CardTitle>More UI Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <Toggle pressed={toggle} onPressedChange={setToggle} aria-label="Toggle Example">
                  Toggle Example
                </Toggle>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Accordion Item 1</AccordionTrigger>
                    <AccordionContent>This is the content for item 1.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Accordion Item 2</AccordionTrigger>
                    <AccordionContent>This is the content for item 2.</AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>Tooltip content for theme test</TooltipContent>
                </Tooltip>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/logo-dark.png" alt="Avatar" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                  <span>Avatar Example</span>
                </div>
                <Progress value={60} className="w-full" />
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Role</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Alice</TableCell>
                      <TableCell>
                        <Badge variant="default">Active</Badge>
                      </TableCell>
                      <TableCell>Admin</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Bob</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Inactive</Badge>
                      </TableCell>
                      <TableCell>User</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
