import Link from 'next/link';
import { ArrowRight, CheckCircle, LucideIcon, Sparkles } from 'lucide-react';

interface ServicePageTemplateProps {
  locale: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: { title: string; description: string }[];
  gradient: string;
}

export default function ServicePageTemplate({
  locale,
  icon: Icon,
  title,
  description,
  features,
  benefits,
  gradient,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-r ${gradient} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob`}></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-400/30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Our Service</span>
            </div>
            <div className="mb-8 inline-flex">
              <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${gradient} shadow-2xl shadow-${gradient.split('-')[1]}-500/50`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-base font-medium text-gray-300">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Key Benefits
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
              Why choose this service for your business
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative flex flex-col rounded-3xl bg-gray-800/50 backdrop-blur-sm p-8 border border-gray-700 hover:border-gray-600 transition-all hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <div className="relative">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="h-3 w-3 rounded-full bg-white"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${gradient} py-24 sm:py-32`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
              Let's discuss how we can help transform your business with {title.toLowerCase()}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
