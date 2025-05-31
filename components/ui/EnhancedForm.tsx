'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, AlertCircle, Loader2 } from 'lucide-react';

interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  label: string;
  placeholder?: string;
  required?: boolean;
  validation?: (value: string) => string | null;
  options?: { value: string; label: string }[];
}

interface EnhancedFormProps {
  fields: FormField[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
  title: string;
  description?: string;
  submitText?: string;
  successMessage?: string;
  className?: string;
}

export function EnhancedForm({
  fields,
  onSubmit,
  title,
  description,
  submitText = 'Kirim',
  successMessage = 'Pesan berhasil dikirim!',
  className = ''
}: EnhancedFormProps) {  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Simple announce function for accessibility
  const announce = (message: string) => {
    console.log('Accessibility announcement:', message);
  };

  const validateField = (field: FormField, value: string): string | null => {
    if (field.required && !value.trim()) {
      return `${field.label} harus diisi`;
    }

    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Format email tidak valid';
      }
    }

    if (field.type === 'tel' && value) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(value.replace(/[\s-]/g, ''))) {
        return 'Format nomor telepon tidak valid';
      }
    }

    if (field.validation) {
      return field.validation(value);
    }

    return null;
  };

  const handleChange = (fieldId: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }));
    
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }));
    }
  };

  const handleBlur = (field: FormField) => {
    const value = formData[field.id] || '';
    const error = validateField(field, value);
    if (error) {
      setErrors(prev => ({ ...prev, [field.id]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    fields.forEach(field => {
      const value = formData[field.id] || '';
      const error = validateField(field, value);
      if (error) {
        newErrors[field.id] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      announce('Terdapat kesalahan dalam form. Silakan periksa kembali.');
      
      // Focus on first error field
      const firstErrorField = fields.find(field => newErrors[field.id]);
      if (firstErrorField) {
        const errorElement = formRef.current?.querySelector(`#${firstErrorField.id}`) as HTMLElement;
        errorElement?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      setIsSuccess(true);
      setFormData({});
      announce(successMessage);
    } catch (error) {
      announce('Terjadi kesalahan saat mengirim form. Silakan coba lagi.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const value = formData[field.id] || '';    const error = errors[field.id];
    const fieldId = field.id;
    const errorId = `${fieldId}-error`;

    const baseInputClasses = `w-full px-4 py-3 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      error 
        ? 'border-red-500 bg-red-50 dark:bg-red-900/20' 
        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800'
    }`;

    const commonProps = {
      id: fieldId,
      name: field.name,
      value,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => 
        handleChange(fieldId, e.target.value),
      onBlur: () => handleBlur(field),
      'aria-invalid': !!error,
      'aria-describedby': error ? errorId : undefined,
      required: field.required,
      className: baseInputClasses
    };

    return (
      <div key={fieldId} className="space-y-2">
        <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {field.label}
          {field.required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
        </label>
        
        {field.type === 'textarea' ? (
          <textarea
            {...commonProps}
            placeholder={field.placeholder}
            rows={4}
          />
        ) : field.type === 'select' ? (
          <select {...commonProps}>
            <option value="">{field.placeholder || `Pilih ${field.label}`}</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...commonProps}
            type={field.type}
            placeholder={field.placeholder}
          />
        )}
        
        {error && (
          <div id={errorId} role="alert" className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}
      </div>
    );
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center ${className}`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Check className="w-16 h-16 text-green-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
          Berhasil!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          {successMessage}
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Kirim Pesan Lain
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 ${className}`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
        {fields.map(renderField)}
          <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {submitText}
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

// Predefined form configurations
export const contactFormFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Nama Lengkap',
    placeholder: 'Masukkan nama lengkap Anda',
    required: true
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'contoh@email.com',
    required: true
  },
  {
    id: 'phone',
    name: 'phone',
    type: 'tel',
    label: 'Nomor Telepon',
    placeholder: '+62 812 3456 7890',
    required: true
  },
  {
    id: 'service',
    name: 'service',
    type: 'select',
    label: 'Layanan yang Diminati',
    required: true,
    options: [
      { value: 'website', label: 'Website Development' },
      { value: 'mobile', label: 'Mobile App Development' },
      { value: 'design', label: 'UI/UX Design' },
      { value: 'consultation', label: 'Konsultasi' },
      { value: 'other', label: 'Lainnya' }
    ]
  },
  {
    id: 'message',
    name: 'message',
    type: 'textarea',
    label: 'Pesan',
    placeholder: 'Ceritakan tentang proyek Anda...',
    required: true,
    validation: (value) => {
      if (value.length < 10) {
        return 'Pesan minimal 10 karakter';
      }
      return null;
    }
  }
];

export const newsletterFormFields: FormField[] = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true
  }
];
