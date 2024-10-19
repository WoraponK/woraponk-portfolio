'use client'

// Lib
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Firebase
import { addContact } from '@/collections/contacts.collection'

// Shadcn
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

// Include in project
import contactSchema from '@/schemas/contact.schema'
import Link from 'next/link'

const ContactSection: React.FC = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      title: '',
      description: '',
    },
    mode: 'onChange',
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    try {
      form.reset()

      await addContact({
        email: values.email,
        title: values.title,
        description: values.description,
      })

      toast.success('Thank you for your message!', {
        description: `I'll check your message later.`,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div id="contact" className="bg-foreground p-8">
      <div className="container mx-auto text-background w-1/2 space-y-8 max-lg:w-full">
        <h2>Contact me</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel important>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel important>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel important>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter the description..." {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-end">
              <Button type="submit" disabled={!form.formState.isValid}>
                Submit
              </Button>
            </div>
          </form>
        </Form>
        <div className="flex items-center max-sm:flex-col max-sm:items-start">
          <h6>Or email: </h6>
          <Link href="mailto:worapon.klabsri@gmail.com">
            <Button variant="link">worapon.klabsri@gmail.com</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
