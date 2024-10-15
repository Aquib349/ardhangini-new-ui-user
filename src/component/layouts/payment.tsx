import { CreditCard } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

function Payment() {
  return (
    <>
      <div className="border px-4 py-3 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Payment Summary</h2>
        <div className="cod flex items-center justify-between">
          <p className="">Cash On Delivery</p>
          <Switch id="airplane-mode" />
        </div>
        <div className="mt-4">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Card</TabsTrigger>
              <TabsTrigger value="password">RazorPay</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <Accordion type="single" collapsible className="w-full px-4">
                  {/* debit card */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-x-2">
                        <CreditCard /> Debit Card
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4">
                        <Input
                          type="text"
                          placeholder="Card Number"
                          maxLength={16}
                          inputMode="numeric"
                        />
                        <Input type="text" placeholder="Cardholder Name" />
                        <div style={{ display: "flex", gap: "1rem" }}>
                          <Input
                            type="text"
                            placeholder="MM/YY"
                            maxLength={5}
                            inputMode="numeric"
                            style={{ width: "50%" }}
                          />
                          <Input
                            type="text"
                            placeholder="CVV"
                            maxLength={4}
                            inputMode="numeric"
                            style={{ width: "50%" }}
                          />
                        </div>
                        <Button>Pay Now</Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* credit card */}
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-x-2">
                        <CreditCard /> Credit Card
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-4">
                        <Input
                          type="text"
                          placeholder="Card Number"
                          maxLength={16}
                          inputMode="numeric"
                        />
                        <Input type="text" placeholder="Cardholder Name" />
                        <div style={{ display: "flex", gap: "1rem" }}>
                          <Input
                            type="text"
                            placeholder="MM/YY"
                            maxLength={5}
                            inputMode="numeric"
                            style={{ width: "50%" }}
                          />
                          <Input
                            type="text"
                            placeholder="CVV"
                            maxLength={4}
                            inputMode="numeric"
                            style={{ width: "50%" }}
                          />
                        </div>
                        <Button>Pay Now</Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <img src="assets/razorpay.png" alt="raxor-pay" />
                <div className="p-1">
                  <Button className="w-full">Pay With RazorPay</Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Payment;
