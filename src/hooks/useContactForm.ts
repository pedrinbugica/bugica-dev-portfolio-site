
import { useState } from 'react';
import { supabase, hasSupabaseConfig } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async (formData: ContactForm) => {
    setIsLoading(true);
    
    try {
      if (hasSupabaseConfig && supabase) {
        // Try to send via Supabase function
        const { data, error } = await supabase.functions.invoke('send-contact-email', {
          body: formData
        });

        if (error) throw error;

        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Retornarei em breve!",
        });
      } else {
        // Fallback: simulate sending without Supabase
        console.log('Supabase não configurado. Simulando envio:', formData);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Mensagem recebida!",
          description: "Formulário funcionando! Configure o Supabase para envio real de emails.",
        });
      }

      return { success: true };
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato diretamente pelo email.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
};
