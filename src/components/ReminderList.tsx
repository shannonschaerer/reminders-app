import React from 'react';
import Reminder from "../models/Reminder";
import {ListItem, UnorderedList} from "@chakra-ui/react";


interface ReminderListProps {
    items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
    return (
        <UnorderedList>
            {items.map((reminder) => (
                <ListItem key={reminder.id}>{reminder.title}</ListItem>
            ))}
        </UnorderedList>
    );
}

export default ReminderList;