
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
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
    console.log('Iniciando envio de email:', formData);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      console.log('Resposta da function:', { data, error });

      if (error) {
        console.error('Erro na function:', error);
        throw error;
      }

      console.log('Email enviado com sucesso:', data);

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Pedro retornará em breve!",
      });

      return { success: true };
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Houve um problema. Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
      return { success: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading };
};
