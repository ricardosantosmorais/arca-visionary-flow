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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Trabalhe Conosco
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Faça parte de uma equipe que transforma negócios através de soluções inovadoras
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl">
          <ScrollAnimation animation="slide-up">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Candidatura</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e anexe seu currículo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      {...register('name')}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register('email')}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      {...register('phone')}
                      className={errors.phone ? 'border-destructive' : ''}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="salary">Pretensão Salarial *</Label>
                    <Input
                      id="salary"
                      placeholder="Ex: R$ 5.000,00"
                      {...register('salary')}
                      className={errors.salary ? 'border-destructive' : ''}
                    />
                    {errors.salary && (
                      <p className="text-sm text-destructive">{errors.salary.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Currículo (PDF ou DOC) *</Label>
                    <div className="relative">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        {...register('resume')}
                        className={errors.resume ? 'border-destructive' : ''}
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
                    variant="cta"
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
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimation animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Vagas em Aberto
              </h2>
              <p className="text-lg text-muted-foreground">
                Confira as oportunidades disponíveis em nossa empresa
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position, index) => (
              <ScrollAnimation
                key={index}
                animation="slide-up"
                delay={index * 100}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      {position.description}
                    </CardDescription>
                    <Button variant="outline" className="w-full">
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
