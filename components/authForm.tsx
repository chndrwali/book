'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FIELD_NAMES, FIELD_TYPES } from '@/constant';
import ImageUpload from './imageUpload';

interface Props<T extends FieldValues> {
  type: 'SIGN_IN' | 'SIGN_UP';
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <T extends FieldValues>({ type, schema, defaultValues, onSubmit }: Props<T>) => {
  const isSignIn = type === 'SIGN_IN';

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">{isSignIn ? 'Selamat datang kembali di BukuKita' : 'Buat Akun BukuKita Anda'}</h1>
      <p className="text-light-100">
        {isSignIn ? 'mengakses koleksi sumber daya yang luas, dan terus mendapatkan informasi terbaru' : 'harap lengkapi semua kolom dan unggah ID universitas yang valid untuk mendapatkan akses ke perpustakaan'}
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">{FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
                  <FormControl>{field.name === 'universityCard' ? <ImageUpload onFileChange={field.onChange} /> : <Input required type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]} {...field} className="form-input" />}</FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" className="form-btn">
            {isSignIn ? 'Masuk' : 'Daftar '}{' '}
          </Button>
        </form>
      </Form>
      <p className="text-center text-base font-medium">
        {isSignIn ? 'Baru mengenal BukuKita?' : 'Sudah punya akun?'}{' '}
        <Link href={isSignIn ? '/sign-up' : '/sign-in'} className="font-bold text-primary">
          {isSignIn ? 'Buat akun' : 'Masuk'}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
