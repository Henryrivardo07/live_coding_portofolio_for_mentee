'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import Section from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const services = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Please enter a valid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one service.',
  }),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      services: [],
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
          services: data.services.join(', '),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <Section
      title='Let’s Build Something Great Together'
      subtitle='Have a project in mind? Fill out the form below, and our team will get back to you shortly'
      id='contact'
    >
      <Form {...form}>
        <form
          className='mx-auto max-w-180 space-y-5'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <Input
                  disabled={loading}
                  placeholder='Input your name'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Input
                  disabled={loading}
                  placeholder='Input your email'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <Textarea
                  disabled={loading}
                  placeholder='Input your message'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='services'
            render={() => (
              <FormItem>
                <FormLabel>Services</FormLabel>
                <div className='mt-3 grid grid-cols-1 gap-y-3 md:mt-3.5 md:grid-cols-[repeat(2,max-content)] md:gap-x-9.25 md:gap-y-4'>
                  {services.map((service) => (
                    <FormField
                      key={service}
                      control={form.control}
                      name='services'
                      render={({ field }) => (
                        <FormItem
                          key={service}
                          className='flex items-center gap-3'
                        >
                          <FormControl>
                            <Checkbox
                              disabled={loading}
                              checked={field.value?.includes(service)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, service])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== service
                                      )
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className='text-sm-regular md:text-md-regular'>
                            {service}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} className='mt-6 w-full md:mt-10'>
            {loading ? <ClipLoader size={20} color='#fff' /> : 'Send'}
          </Button>
        </form>
      </Form>
      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </Section>
  );
};

export default ContactForm;
