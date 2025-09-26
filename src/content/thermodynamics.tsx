import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Thermometer, Zap, RefreshCw, TrendingUp } from 'lucide-react';

export default function ThermodynamicsContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Thermodynamics Fundamentals</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Thermodynamics is the branch of physics that deals with the relationships between heat, work, temperature, and
          energy. It governs the behavior of energy systems and is fundamental to understanding engines, refrigerators,
          and power plants.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">The Four Laws of Thermodynamics</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                  0
                </Badge>
                Zeroth Law
              </CardTitle>
              <CardDescription>Thermal Equilibrium</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                If two systems are in thermal equilibrium with a third system, they are in thermal equilibrium with each
                other. This law establishes the concept of temperature.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                  1
                </Badge>
                First Law
              </CardTitle>
              <CardDescription>Conservation of Energy</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">
                Energy cannot be created or destroyed, only converted from one form to another.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                <p className="font-mono text-center">ΔU = Q - W</p>
                <p className="text-xs text-center mt-1 text-muted-foreground">
                  Change in internal energy = Heat added - Work done by system
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                  2
                </Badge>
                Second Law
              </CardTitle>
              <CardDescription>Entropy & Direction of Processes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">
                The entropy of an isolated system always increases. Heat flows naturally from hot to cold.
              </p>
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded-lg">
                <p className="font-mono text-center">ΔS ≥ 0</p>
                <p className="text-xs text-center mt-1 text-muted-foreground">
                  Entropy change is always positive or zero
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center p-0">
                  3
                </Badge>
                Third Law
              </CardTitle>
              <CardDescription>Absolute Zero</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                The entropy of a perfect crystal approaches zero as temperature approaches absolute zero (0 K or
                -273.15°C).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Key Thermodynamic Processes</h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Thermometer className="h-4 w-4 text-blue-500" />
                Isothermal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">Temperature remains constant</p>
              <p className="font-mono text-xs">PV = constant</p>
              <Badge variant="outline" className="mt-2 text-xs">
                ΔU = 0
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-500" />
                Adiabatic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">No heat transfer</p>
              <p className="font-mono text-xs">PV^γ = constant</p>
              <Badge variant="outline" className="mt-2 text-xs">
                Q = 0
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-orange-500" />
                Isobaric
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">Pressure remains constant</p>
              <p className="font-mono text-xs">V/T = constant</p>
              <Badge variant="outline" className="mt-2 text-xs">
                ΔP = 0
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-purple-500" />
                Isochoric
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">Volume remains constant</p>
              <p className="font-mono text-xs">P/T = constant</p>
              <Badge variant="outline" className="mt-2 text-xs">
                ΔV = 0
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">State Functions vs Path Functions</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">State Functions</CardTitle>
              <CardDescription>Properties that depend only on current state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Temperature (T)</span>
                  <Badge variant="secondary">K</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Pressure (P)</span>
                  <Badge variant="secondary">Pa</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Internal Energy (U)</span>
                  <Badge variant="secondary">J</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Entropy (S)</span>
                  <Badge variant="secondary">J/K</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950 rounded">
                  <span className="font-medium">Enthalpy (H)</span>
                  <Badge variant="secondary">J</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Path Functions</CardTitle>
              <CardDescription>Properties that depend on the process path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded">
                  <span className="font-medium">Heat (Q)</span>
                  <Badge variant="secondary">J</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950 rounded">
                  <span className="font-medium">Work (W)</span>
                  <Badge variant="secondary">J</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Path functions cannot be expressed as exact differentials and depend on the specific process taken
                  between two states.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Applications in Engineering</h3>
        <div className="space-y-4">
          <p>Thermodynamics principles are applied in numerous engineering systems:</p>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">Power Plants</h4>
                <p className="text-sm text-muted-foreground">
                  Steam cycles, gas turbines, and combined cycle systems for electricity generation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">Refrigeration</h4>
                <p className="text-sm text-muted-foreground">
                  Heat pumps, air conditioning systems, and industrial cooling applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h4 className="font-medium mb-2">Automotive Engines</h4>
                <p className="text-sm text-muted-foreground">
                  Otto and Diesel cycles for internal combustion engines and hybrid systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
