import { NavLink } from 'react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Build Amazing
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {" "}Digital Experiences
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We create stunning websites and applications that help your business grow. 
                  From concept to deployment, we're here to bring your vision to life.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-3">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <NavLink to="/about">Learn More</NavLink>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Modern Technology</h3>
                    <p className="text-white/80">Built with cutting-edge tools</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Optimized performance ensures your website loads quickly and provides excellent user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Reliable & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Built with security best practices and reliable infrastructure to keep your data safe.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <svg className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Customer Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  We prioritize your needs and work closely with you to achieve your business goals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                  <svg className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Mobile First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Responsive design ensures perfect experience across all devices and screen sizes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-red-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-red-500 transition-colors">
                  <svg className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6z" />
                  </svg>
                </div>
                <CardTitle className="text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Our experienced developers and designers bring years of expertise to your project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-indigo-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                  <svg className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 2v12a2 2 0 002 2h6a2 2 0 002-2V6M9 6h6M9 10h6M9 14h6" />
                  </svg>
                </div>
                <CardTitle className="text-xl">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Round-the-clock support ensures your website runs smoothly and issues are resolved quickly.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Let's work together to create something amazing. Contact us today for a free consultation 
              and see how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
                <NavLink to="/contact">Get Free Quote</NavLink>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <NavLink to="/service">View Our Services</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home