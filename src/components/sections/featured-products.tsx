import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star, ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'

export function FeaturedProducts() {
  const products = [
    {
      id: 'stainless-steel-mesh',
      name: 'Stainless Steel Wire Mesh',
      category: 'Wire Mesh',
      description: '304/316 grade stainless steel mesh for corrosion resistance and durability',
      features: ['Corrosion Resistant', '304/316 Grade', 'Food Safe'],
      meshSizes: '10-400 mesh',
      applications: ['Filtration', 'Food Processing', 'Chemical Industry'],
      href: '/products/stainless-steel',
      popular: true,
      emoji: '🔧'
    },
    {
      id: 'welded-mesh-panels',
      name: 'Welded Wire Mesh Panels',
      category: 'Welded Mesh',
      description: 'Heavy-duty welded mesh panels for construction and security applications',
      features: ['High Strength', 'Custom Sizes', 'Galvanized'],
      meshSizes: '1/2" - 4" openings',
      applications: ['Construction', 'Security', 'Fencing'],
      href: '/products/welded',
      popular: false,
      emoji: '⚡'
    },
    {
      id: 'filter-mesh',
      name: 'Precision Filter Mesh',
      category: 'Filter Mesh',
      description: 'Ultra-fine mesh for industrial filtration and separation processes',
      features: ['Precision Weave', 'Multi-layer', 'Custom Specs'],
      meshSizes: '50-635 mesh',
      applications: ['Oil Filtration', 'Water Treatment', 'Air Filtration'],
      href: '/products/filter',
      popular: true,
      emoji: '🔬'
    },
    {
      id: 'hardware-accessories',
      name: 'Hardware Accessories',
      category: 'Hardware',
      description: 'Complete range of fasteners, clips, and mounting hardware',
      features: ['Stainless Steel', 'Corrosion Resistant', 'Various Sizes'],
      meshSizes: 'Multiple options',
      applications: ['Installation', 'Mounting', 'Securing'],
      href: '/products/hardware',
      popular: false,
      emoji: '🔩'
    }
  ]

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Our Bestsellers
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our most popular wire mesh and hardware solutions, trusted by professionals worldwide for their quality and reliability.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 h-full border-0 shadow-md overflow-hidden">
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 z-10 bg-primary">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <div className="aspect-[4/3] relative bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <span className="text-6xl">{product.emoji}</span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="text-xs mb-2">
                        {product.category}
                      </Badge>
                      <CardTitle className="text-lg leading-tight">
                        {product.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Specifications */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Mesh Size:</span>
                      <span className="font-medium">{product.meshSizes}</span>
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <div className="text-xs text-muted-foreground mb-2">Applications:</div>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app) => (
                        <Badge key={app} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={product.href}>
                        View Details
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="/contact">
                        <ShoppingCart className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}