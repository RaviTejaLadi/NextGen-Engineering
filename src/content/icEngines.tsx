import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Fuel, Thermometer, Settings, TrendingUp, RotateCcw } from 'lucide-react';

export default function ICEnginesContent() {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <img
          src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Internal Combustion Engine"
          className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Internal Combustion Engines</h1>

        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Internal combustion engines are the heart of modern transportation and power generation. These remarkable
          machines convert chemical energy from fuel into mechanical work through controlled combustion processes,
          powering everything from automobiles to generators.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Fuel className="h-5 w-5 text-orange-500" />
                Fuel Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Precise fuel delivery and mixing systems ensure optimal combustion efficiency and performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-blue-500" />
                Ignition Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Spark plugs and ignition timing control the combustion process for maximum power output.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Thermometer className="h-5 w-5 text-red-500" />
                Cooling Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Heat management systems prevent overheating and maintain optimal operating temperatures.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-foreground">Engine Cycles and Operation</h2>

        <p className="mb-6 leading-relaxed">
          Internal combustion engines operate on thermodynamic cycles that convert fuel energy into mechanical work. The
          most common cycles are the Otto cycle (gasoline engines) and the Diesel cycle (diesel engines). Understanding
          these cycles is fundamental to engine design and optimization.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <RotateCcw className="h-5 w-5" />
            Four-Stroke Engine Cycle
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">1. Intake Stroke</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The piston moves down, creating vacuum that draws the fuel-air mixture into the cylinder through the
                intake valve.
              </p>

              <h4 className="font-medium mb-2">2. Compression Stroke</h4>
              <p className="text-sm text-muted-foreground">
                Both valves close as the piston moves up, compressing the fuel-air mixture to increase temperature and
                pressure.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Power Stroke</h4>
              <p className="text-sm text-muted-foreground mb-3">
                The spark plug ignites the compressed mixture, creating an explosion that forces the piston down,
                generating power.
              </p>

              <h4 className="font-medium mb-2">4. Exhaust Stroke</h4>
              <p className="text-sm text-muted-foreground">
                The piston moves up again, pushing the burnt gases out through the exhaust valve, completing the cycle.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-foreground">Engine Performance Parameters</h2>

        <p className="mb-6 leading-relaxed">
          Engine performance is measured through various parameters that indicate efficiency, power output, and
          environmental impact. These metrics help engineers optimize engine design and operation for specific
          applications.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                Power and Torque
              </CardTitle>
              <CardDescription>Mechanical output characteristics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium">Brake Power (BP)</h4>
                <p className="text-sm text-muted-foreground">Actual power delivered by the engine to the crankshaft</p>
              </div>
              <div>
                <h4 className="font-medium">Indicated Power (IP)</h4>
                <p className="text-sm text-muted-foreground">Theoretical power developed inside the cylinder</p>
              </div>
              <div>
                <h4 className="font-medium">Torque</h4>
                <p className="text-sm text-muted-foreground">Rotational force available at the crankshaft</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-purple-500" />
                Efficiency Metrics
              </CardTitle>
              <CardDescription>Energy conversion effectiveness</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-medium">Thermal Efficiency</h4>
                <p className="text-sm text-muted-foreground">Ratio of work output to heat input from fuel</p>
              </div>
              <div>
                <h4 className="font-medium">Mechanical Efficiency</h4>
                <p className="text-sm text-muted-foreground">Ratio of brake power to indicated power</p>
              </div>
              <div>
                <h4 className="font-medium">Volumetric Efficiency</h4>
                <p className="text-sm text-muted-foreground">Effectiveness of the intake process</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-foreground">Types of Internal Combustion Engines</h2>

        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-3">Spark Ignition (SI) Engines</h3>
            <p className="mb-3 leading-relaxed">
              Also known as gasoline or petrol engines, these use spark plugs to ignite a homogeneous fuel-air mixture.
              They operate on the Otto cycle and are commonly found in passenger vehicles due to their smooth operation
              and lower emissions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Otto Cycle</Badge>
              <Badge variant="outline">Spark Plug Ignition</Badge>
              <Badge variant="outline">Homogeneous Mixture</Badge>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-3">Compression Ignition (CI) Engines</h3>
            <p className="mb-3 leading-relaxed">
              Diesel engines use the heat of compression to ignite fuel that's injected directly into the combustion
              chamber. They operate on the Diesel cycle and offer higher thermal efficiency and torque output, making
              them ideal for heavy-duty applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Diesel Cycle</Badge>
              <Badge variant="outline">Compression Ignition</Badge>
              <Badge variant="outline">Direct Injection</Badge>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-foreground">Modern Engine Technologies</h2>

        <p className="mb-6 leading-relaxed">
          Contemporary internal combustion engines incorporate advanced technologies to improve efficiency, reduce
          emissions, and enhance performance. These innovations represent the cutting edge of engine development.
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Turbocharging</h4>
            <p className="text-sm text-muted-foreground">
              Uses exhaust gases to drive a turbine that compresses intake air, increasing power density.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Direct Injection</h4>
            <p className="text-sm text-muted-foreground">
              Precise fuel delivery directly into the combustion chamber for improved efficiency and emissions.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Variable Valve Timing</h4>
            <p className="text-sm text-muted-foreground">
              Optimizes valve operation across different engine speeds and loads for better performance.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Hybrid Systems</h4>
            <p className="text-sm text-muted-foreground">
              Combines internal combustion with electric motors for improved fuel economy and reduced emissions.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Advanced Materials</h4>
            <p className="text-sm text-muted-foreground">
              Lightweight alloys and ceramics reduce weight while improving durability and heat resistance.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Electronic Control</h4>
            <p className="text-sm text-muted-foreground">
              Sophisticated ECUs manage fuel injection, ignition timing, and emissions control systems.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-foreground">Applications and Future Trends</h2>

        <p className="mb-6 leading-relaxed">
          Internal combustion engines continue to evolve, adapting to environmental regulations and efficiency demands.
          While electric vehicles gain prominence, IC engines remain crucial in many applications, especially when
          combined with hybrid technologies.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Future Developments</h3>
          <ul className="space-y-2 text-sm">
            <li>
              • <strong>Alternative Fuels:</strong> Hydrogen, biofuels, and synthetic fuels for carbon neutrality
            </li>
            <li>
              • <strong>Advanced Combustion:</strong> HCCI, RCCI, and other low-temperature combustion modes
            </li>
            <li>
              • <strong>Waste Heat Recovery:</strong> Thermoelectric generators and organic Rankine cycles
            </li>
            <li>
              • <strong>AI Integration:</strong> Machine learning for predictive maintenance and optimization
            </li>
            <li>
              • <strong>Micro-Hybrid Systems:</strong> 48V electrical systems for improved efficiency
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed">
          Understanding internal combustion engines remains essential for mechanical engineers, as these power plants
          continue to drive innovation in transportation, power generation, and industrial applications. The principles
          learned from IC engine design and operation form the foundation for developing next-generation propulsion
          systems.
        </p>
      </div>
    </article>
  );
}
