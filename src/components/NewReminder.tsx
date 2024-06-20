import { Container, Button, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

interface NewReminderProps {
    onAddReminder: (title: string) => void;
}

function NewReminder({onAddReminder}: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('')

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!title) return
        onAddReminder(title)
        setTitle('')
    }
    return (
        <Container py={5}>
            <Center>
                <form onSubmit={submitForm}>
                    <FormControl>
                        <FormLabel htmlFor='title'>Title</FormLabel>
                        <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} 
                        id="title" 
                        type="text" 
                        mb={2} />
                        <Button 
                        type='submit'
                        colorScheme="red"
                        size="sm">Add Reminder</Button>
                    </FormControl>
                </form>
            </Center>
        </Container>
    );
}

export default NewReminder