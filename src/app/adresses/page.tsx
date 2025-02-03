/*
 * Copyright (c) 2024 - Shiny Superb Star
 * All rights reserved.
 *
 * This file is the property of Shiny Superb Star.
 * Unauthorized use, copying, or distribution is strictly prohibited.
 * Shiny Superb Star reserves the right to take legal action
 * against any person or entity who makes use of this file without the
 * express written permission of Shiny Superb Star.
 * 
 */

"use client"

import styles from './styles.module.css'
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { MapPin, Phone, Plus } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function Orders() {
    // 新しいコンポーネントを表示するかどうかの状態
    const [
        showNewComponent,
        setShowNewComponent
    ] = useState(false);

    // ボタンがクリックされたときの処理
    const handleButtonClick = () => {
        setShowNewComponent(true);  // ボタンがクリックされたら状態をtrueにする
    };
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/account">Your account</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Your adresses</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h1 className={styles.h1}>
                Your adresses
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center pl-2">
                        <Plus height={21} width={21} />
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button about='Add a new adress' aria-label='Add a new adress' variant='link' className="text-lg font-semibold p-0 pl-1" onClick={handleButtonClick}>
                                    Add a new adress
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Add a new adress</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="country" className="text-right">
                                            Country/Region
                                        </Label>
                                        <Input id="country" className="col-span-3" />
                                        <Label htmlFor="firstname" className="text-right">
                                            First name
                                        </Label>
                                        <Input id="firstname" className="col-span-3" />
                                        <Label htmlFor="lastname" className="text-right">
                                            Last name
                                        </Label>
                                        <Input id="lastname" className="col-span-3" />
                                        <Label htmlFor="phone#" className="text-right">
                                            Phone #
                                        </Label>
                                        <Input id="phone#" className="col-span-3" />
                                        <Label htmlFor="adress1" className="text-right">
                                            Adress line 1
                                        </Label>
                                        <Input id="adress1" className="col-span-3" />
                                        <Label htmlFor="adress2" className="text-right">
                                            Adress line 2
                                        </Label>
                                        <Input id="adress2" className="col-span-3" />
                                        <Label htmlFor="city" className="text-right">
                                            City
                                        </Label>
                                        <Input id="city" className="col-span-3" />
                                        <Label htmlFor="state" className="text-right">
                                            State
                                        </Label>
                                        <Input id="state" className="col-span-3" />
                                        <Label htmlFor="zipcode" className="text-right">
                                            Zip Code
                                        </Label>
                                        <Input id="zipcode" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Add adress</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div>
                        {/* 新しいコンポーネントの条件付きレンダリング */}
                         {showNewComponent && <AddAdress />}
                    </div>
                    <RadioGroup defaultValue="option-one">

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
                                    <Phone height={17} width={17} /> +1(323) 561-8907
                                </div>
                                <div className="flex items-top">
                                    <MapPin height={23} width={23} />
                                    1111 W Beardsley Rd #2050,
                                    Phoenix, AZ 85027, United States
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
                        <Card className="w-[400px] h-[200px]">
                            <CardHeader>
                                <div className="flex items-center space-x-2">
                                    <CardTitle>Saori Shigehisa</CardTitle>
                                    <div className="flex items-center space-x-1">
                                        <RadioGroupItem value="option-two" id="option-two" />
                                        <Label htmlFor="option-two">Default</Label>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center">
                                    <Phone height={17} width={17} /> +1(323) 561-8907
                                </div>
                                <div className="flex items-top">
                                    <MapPin height={26} width={26} />
                                    1270 Indian Trail Lilburn Rd Apt 1653,
                                    Norcross, GA 30093, United States
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
            </div>
            <footer className="text-center py-4 mt-auto">
                <div className="border-t border-gray-300 my-4"></div>
                <div className="flex gap-4 justify-center">
                    <Link className={styles.footermenu} href="/privacy&terms">Privacy & Terms</Link>
                    <Link className={styles.footermenu} href="/contactUs">Contact Us</Link>
                    <Link className={styles.footermenu} href="/changeRegion">Consumer health</Link>
                    <Link className={styles.footermenu} href="/changeRegion">Your Privacy Choices</Link>
                </div>
                <p>&copy; 2024 SSS Corp. All rights reserved.</p>
            </footer>
        </>
    )
    // 新しいコンポーネント
    function AddAdress() {
        return <div>これは新しいaddressです！</div>;
    }
}