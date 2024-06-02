import React from 'react';
import Reminder from "../models/Reminder";
import {Button, Center, Container, Flex, HStack, ListItem, UnorderedList} from "@chakra-ui/react";


interface ReminderListProps {
    items: Reminder[];
    onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
    return (
        <Container>
            <Center>
                <UnorderedList>
                    {items.map((reminder) => (
                        <ListItem key={reminder.id} py={2}>
                            <Flex justifyContent="space-between">
                                {reminder.title}
                                <Button
                                    onClick={() => onRemoveReminder(reminder.id)}
                                    colorScheme="red"
                                    size="sm"
                                    variant="outline">
                                    Remove
                                </Button>
                            </Flex>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Center>
        </Container>
    );
}

export default ReminderList;