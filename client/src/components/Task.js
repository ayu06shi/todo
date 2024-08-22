import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay, useDisclosure, Text, ButtonGroup, FormControl, FormLabel, Input } from '@chakra-ui/react'

const Task = () => {
      
        const OverlayTwo = () => (
          <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
          />
        )
      
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayTwo />)
      
  return (
    <div>
        <section class="text-gray-600 body-font">
            <div class=" px-5 py-9 mx-auto border flex flex-wrap">
                <div class="flex flex-col mx-auto flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 text-center">
                <div class="flex flex-col mb-10 lg:items-start items-center">
                    <p className='text-3xl mb-5'>TO-DOs</p>

                    {/* modal */}
                    <Button
                        ml='4'
                        onClick={() => {
                        setOverlay(<OverlayTwo />)
                        onOpen()
                        }}
                    >
                    <i class="ri-add-circle-fill cursor-pointer text-3xl mr-1 fill-slate-600"></i>Add Todo
                    </Button>
                    <Modal isCentered isOpen={isOpen} onClose={onClose}>
                        {overlay}
                        <ModalContent>
                            <ModalHeader>ADD A TODO</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input placeholder='Title' />
                                </FormControl>

                                <FormControl mt={4}>
                                <FormLabel>Description</FormLabel>
                                <Input placeholder='Description' />
                                </FormControl>

                                <FormControl mt={4}>
                                <FormLabel>Tags</FormLabel>
                                <Input placeholder='Tags' />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3}>
                                Add
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    
                </div>
                <div class="flex flex-col justify-between mb-10 lg:w-full lg:items-start items-center border shadow-lg  rounded-md ">
                    
                    <div class="flex justify-between w-full p-4">
                    <div className='flex flex-col'>
                    <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Todo title</h2>
                    <p class="leading-relaxed text-base">todo description</p>
                    </div>
                    <div className='flex flex-col'>
                    <a class="">
                        <i class="ri-edit-2-fill cursor-pointer text-3xl fill-slate-600 hover:fill-slate-950 hover:scale-105"></i>
                    </a>
                    <a class="">
                        <i class="ri-delete-bin-fill cursor-pointer text-3xl fill-slate-600"></i>
                    </a>
                    </div>
                    </div>
                </div>
                
                </div>
            </div>
        </section>
    </div>
  )
}

export default Task