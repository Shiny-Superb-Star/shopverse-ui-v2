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

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Plus } from "lucide-react";
import { useState } from 'react';
import styles from './styles.module.css';

export default function Addresses() {
    // 新しいコンポーネントを表示するかどうかの状態
    const [
        showNewAddress,
        setShowNewComponent
    ] = useState(false);

    // ボタンがクリックされたときの処理
    const handleButtonClick = () => {
        // ボタンがクリックされたら状態をtrueにする
        setShowNewComponent(true);  
    };

    const [cards, setCards] = useState([
        { defaultValue: "option-one", id: "card-1", name: "Saori Shigehisa", phone: "123-456-7890", address: "1234 Maple St, Los Angeles, CA 90015" },
        { defaultValue: "option-two", id: "card-2", name: "Steven Sisjayawan", phone: "234-567-8901", address: "5678 Elm Ave, Austin, TX 73301" },
        { defaultValue: "option-three", id: "card-3", name: "Satoru Nakajima", phone: "345-678-9012", address: "9101 Oak Blvd, Miami, FL 33101"},
    ]);

    // 削除処理（クリックされたカードをリストから削除）
    const removeCard = (id: string) => {
        setCards(cards.filter((card) => card.id !== id));
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
                                <Button about='Add a new adress' aria-label='Add a new adress' variant='link' className="text-lg font-semibold p-0 pl-1">
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
                                    <Button type="submit" onClick={handleButtonClick}>Add address</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div>
                        {/* 新しいコンポーネントの条件付きレンダリング */}
                        {showNewAddress && <AddAdress />}
                    </div>

                    {cards.map((card) => (
                        <RadioGroup defaultValue="option-one">
                        <Card key={card.id} className="w-[400px] h-[200px]">
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <CardTitle>{card.name}</CardTitle>
                                        <div className="flex items-center space-x-1">
                                            <RadioGroupItem value={card.defaultValue} id={card.defaultValue} />
                                            <Label htmlFor={card.defaultValue}>Default</Label>
                                            </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center">
                                        <Phone height={17} width={17} /> {card.phone}
                                    </div>
                                    <div className="flex items-top">
                                        <MapPin height={23} width={23} /> {card.address}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex h-3 items-center space-x-1 text-sm">
                                        <Button about='Edit' aria-label='Edit' variant='link'>
                                            Edit
                                        </Button>
                                        <Separator orientation="vertical" />
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button about='Edit' aria-label='Edit' variant='link'>
                                                    Remove
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This action cannot be undone. This will permanently delete your address
                                                        and remove your data from our servers.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={() => removeCard(card.id)} about="Remove" aria-label="Remove">Continue</AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </CardFooter>
                            </Card>
                        </RadioGroup>
                    ))}
                </div>
            </div>
        </>
    )
    // 新しいコンポーネント
    function AddAdress() {
        return <div>
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
                            <Phone height={17} width={17} /> +1(323) 561-8907
                        </div>
                        <div className="flex items-top">
                            <MapPin height={23} width={23} />
                            1117 W Beardsley Rd #2070,
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
            </RadioGroup>
        </div>
    }
}