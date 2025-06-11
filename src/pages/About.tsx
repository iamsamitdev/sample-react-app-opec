import { NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  About
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    {" "}Our Story
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're a passionate team of developers, designers, and innovators dedicated to 
                  creating exceptional digital experiences that make a difference.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3" asChild>
                  <NavLink to="/contact">Work With Us</NavLink>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <NavLink to="/service">Our Services</NavLink>
                </Button>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="text-white/80">Excellence in every project</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600">
                Founded with a vision to bridge the gap between technology and creativity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">How We Started</h3>
                <p className="text-gray-600 leading-relaxed">
                  Back in 2019, we started as a small team of passionate developers who believed 
                  that great software should be both powerful and beautiful. What began as late-night 
                  coding sessions in a garage has evolved into a full-service digital agency.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we've helped over 500 businesses transform their digital presence, 
                  always staying true to our core values of innovation, quality, and client satisfaction.
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-gray-900">2019</div>
                    <div className="text-gray-600">Founded</div>
                    <div className="text-2xl font-bold text-blue-600">→</div>
                    <div className="text-4xl font-bold text-gray-900">500+</div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We constantly explore new technologies and approaches to deliver cutting-edge solutions 
                  that give our clients a competitive advantage.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We never compromise on quality. Every line of code, every design element, 
                  and every user interaction is crafted with attention to detail.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We believe the best results come from working closely with our clients, 
                  understanding their needs, and building solutions together.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Open communication and honest feedback are at the heart of our relationships. 
                  We keep our clients informed every step of the way.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-red-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  When we commit to a project, we deliver on time and on budget. 
                  Our clients can count on us to be there when they need us.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                  <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We strive for excellence in everything we do, continuously learning and 
                  improving to stay at the forefront of our industry.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The talented individuals who make it all happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  JS
                </div>
                <CardTitle className="text-xl">John Smith</CardTitle>
                <CardDescription>Lead Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  SJ
                </div>
                <CardTitle className="text-xl">Sarah Johnson</CardTitle>
                <CardDescription>UI/UX Designer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Creative designer focused on user-centered design and creating beautiful, functional interfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  MW
                </div>
                <CardTitle className="text-xl">Michael Wilson</CardTitle>
                <CardDescription>Project Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Experienced project manager ensuring smooth delivery and excellent client communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-indigo-100 leading-relaxed">
              We'd love to hear about your project and discuss how we can help bring your vision to life. 
              Let's start the conversation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
                <NavLink to="/contact">Get In Touch</NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-indigo-600" asChild>
                <NavLink to="/">Back to Home</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About