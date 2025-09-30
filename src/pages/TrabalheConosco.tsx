import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Briefcase, Upload, MapPin, Clock } from 'lucide-react';
import ScrollAnimation from '@/components/ScrollAnimation';

const formSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres').max(100),
  email: z.string().email('E-mail inválido').max(255),
  phone: z.string().min(10, 'Telefone inválido').max(20),
  salary: z.string().min(1, 'Pretensão salarial é obrigatória'),
  resume: z.instanceof(FileList).refine((files) => files.length > 0, 'Currículo é obrigatório')
});

type FormData = z.infer<typeof formSchema>;

const openPositions = [
  {
    title: 'Consultor de Tecnologia',
    location: 'São Paulo - SP',
    type: 'Tempo Integral',
    description: 'Buscamos profissional com experiência em soluções tecnológicas para o agronegócio.',
  },
  {
    title: 'Analista de Segurança da Informação',
    location: 'Remoto',
    type: 'Tempo Integral',
    description: 'Profissional para atuar com análise e gestão de segurança cibernética.',
  },
  {
    title: 'Contador Sênior',
    location: 'Brasília - DF',
    type: 'Tempo Integral',
    description: 'Contador experiente para gestão fiscal e tributária de empresas.',
  },
];

const TrabalheConosco = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simula envio do formulário
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: 'Candidatura enviada!',
      description: 'Recebemos seu currículo e entraremos em contato em breve.',
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-section relative overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,195,0,0.1)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,195,0,0.1)_0%,transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <ScrollAnimation animation="slide-up">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Trabalhe Conosco
              </h1>
              <p className="text-xl text-black/80 max-w-3xl mx-auto">
                Faça parte de uma equipe que transforma negócios através de soluções inovadoras
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto max-w-3xl px-4">
          <ScrollAnimation animation="slide-up">
            <Card className="bg-black text-white rounded-3xl shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-3xl text-golden">Envie sua Candidatura</CardTitle>
                <CardDescription className="text-white/70 text-base">
                  Preencha o formulário abaixo e anexe seu currículo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nome Completo *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      {...register('name')}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register('email')}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      {...register('phone')}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${errors.phone ? 'border-destructive' : ''}`}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary" className="text-white">Pretensão Salarial *</Label>
                    <Input
                      id="salary"
                      placeholder="Ex: R$ 5.000,00"
                      {...register('salary')}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 ${errors.salary ? 'border-destructive' : ''}`}
                    />
                    {errors.salary && (
                      <p className="text-sm text-destructive">{errors.salary.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-white">Currículo (PDF ou DOC) *</Label>
                    <div className="relative">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        {...register('resume')}
                        className={`bg-white/10 border-white/20 text-white file:text-white ${errors.resume ? 'border-destructive' : ''}`}
                      />
                      <Upload className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                    {errors.resume && (
                      <p className="text-sm text-destructive">{errors.resume.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                    variant="hero"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Candidatura'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto max-w-6xl px-4">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Vagas em Aberto
              </h2>
              <p className="text-xl text-black/80">
                Confira as oportunidades disponíveis em nossa empresa
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <ScrollAnimation
                key={index}
                animation="slide-up"
                delay={index * 100}
              >
                <Card className="h-full bg-black text-white rounded-3xl hover-lift border-0 shadow-card">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-golden/20 rounded-lg">
                        <Briefcase className="h-6 w-6 text-golden" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-golden" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-golden" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-white/80">
                      {position.description}
                    </CardDescription>
                    <Button variant="hero" className="w-full">
                      Candidatar-se
                    </Button>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrabalheConosco;
