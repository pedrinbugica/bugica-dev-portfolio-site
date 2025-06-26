
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
        console.log('Enviando email via Supabase function...');
        
        // Try to send via Supabase function
        const { data, error } = await supabase.functions.invoke('send-contact-email', {
          body: formData
        });

        if (error) {
          console.error('Erro na function:', error);
          throw error;
        }

        console.log('Email enviado com sucesso:', data);

        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Pedro retornará em breve!",
        });
      } else {
        console.log('Supabase não configurado adequadamente');
        throw new Error('Configuração do Supabase incompleta');
      }

      return { success: true };
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Verifique se a chave RESEND_API_KEY está configurada no Supabase.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
};
