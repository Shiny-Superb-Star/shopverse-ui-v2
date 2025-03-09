/*
 * Copyright (c) 2025 - Shiny Superb Star
 * All rights reserved.
 *
 * This file is the property of Shiny Superb Star.
 * Unauthorized use, copying, or distribution is strictly prohibited.
 * Shiny Superb Star reserves the right to take legal action
 * against any person or entity who makes use of this file without the
 * express written permission of Shiny Superb Star.
 * 
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@radix-ui/react-separator";
import { MapPin, Phone } from "lucide-react";

export default function AddAdress() {
    return (
        <div>
            <RadioGroup defaultValue="option-three">
                <Card className="w-[400px] h-[200px]">
                    <CardHeader>
                        <div className="flex items-center space-x-2">
                            <CardTitle>Saori Shigehisa</CardTitle>
                            <div className="flex items-center space-x-1">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Default</Label>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center">
                            <Phone height={17} width={17} /> +1(653) 753-9357
                        </div>
                        <div className="flex items-top">
                            <MapPin height={23} width={23} />
                            1117 W Beardsley Rd #6645,
                            Mesa, AZ 85034, United States
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex h-3 items-center space-x-1 text-sm">
                            <Button about='Edit' aria-label='Edit' variant='link'>
                                Edit
                            </Button>
                            <Separator orientation="vertical" />
                            <Button about='Edit' aria-label='Edit' variant='link'>
                                Remove
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </RadioGroup>
        </div>
    )
}