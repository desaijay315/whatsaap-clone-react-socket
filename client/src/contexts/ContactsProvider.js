import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactContext = React.createContext()

export function useContacts(){
    return useContext(ContactContext);
}

export function ContactsProvider({children}) {

    const [contacts, setContacts] = useLocalStorage('contacts', []);

    const createContact = (id,name) =>{
        setContacts(prevContacts => {
            return [...prevContacts, {id, name}]
        });
    }
    return (
        <ContactContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactContext.Provider>
    )
}
