import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Waves, Droplets, Wind, Calculator } from 'lucide-react';

function BernoulliCalculator() {
  const [p1, setP1] = useState('');
  const [v1, setV1] = useState('');
  const [h1, setH1] = useState('');
  const [p2, setP2] = useState('');
  const [v2, setV2] = useState('');
  const [h2, setH2] = useState('');
  const [density, setDensity] = useState('1000'); // Water density default

  const calculateBernoulli = () => {
    const rho = parseFloat(density);
    const pressure1 = parseFloat(p1);
    const velocity1 = parseFloat(v1);
    const height1 = parseFloat(h1);
    const pressure2 = parseFloat(p2);
    const velocity2 = parseFloat(v2);
    const height2 = parseFloat(h2);
    const g = 9.81; // gravitational acceleration

    if (!isNaN(rho) && rho > 0) {
      const energy1 = (pressure1 || 0) + 0.5 * rho * Math.pow(velocity1 || 0, 2) + rho * g * (height1 || 0);
      const energy2 = (pressure2 || 0) + 0.5 * rho * Math.pow(velocity2 || 0, 2) + rho * g * (height2 || 0);
      return { energy1, energy2, diff: Math.abs(energy1 - energy2) };
    }
    return null;
  };

  const result = calculateBernoulli();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Bernoulli's Equation Calculator
        </CardTitle>
        <CardDescription>Calculate energy terms in Bernoulli's equation: P + ½ρv² + ρgh = constant</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="density">Fluid Density (kg/m³)</Label>
          <Input
            id="density"
            type="number"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
            placeholder="1000 (water)"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-blue-600">Point 1</h4>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="p1">Pressure (Pa)</Label>
                <Input
                  id="p1"
                  type="number"
                  value={p1}
                  onChange={(e) => setP1(e.target.value)}
                  placeholder="Pressure at point 1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="v1">Velocity (m/s)</Label>
                <Input
                  id="v1"
                  type="number"
                  value={v1}
                  onChange={(e) => setV1(e.target.value)}
                  placeholder="Velocity at point 1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="h1">Height (m)</Label>
                <Input
                  id="h1"
                  type="number"
                  value={h1}
                  onChange={(e) => setH1(e.target.value)}
                  placeholder="Height at point 1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-green-600">Point 2</h4>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="p2">Pressure (Pa)</Label>
                <Input
                  id="p2"
                  type="number"
                  value={p2}
                  onChange={(e) => setP2(e.target.value)}
                  placeholder="Pressure at point 2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="v2">Velocity (m/s)</Label>
                <Input
                  id="v2"
                  type="number"
                  value={v2}
                  onChange={(e) => setV2(e.target.value)}
                  placeholder="Velocity at point 2"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="h2">Height (m)</Label>
                <Input
                  id="h2"
                  type="number"
                  value={h2}
                  onChange={(e) => setH2(e.target.value)}
                  placeholder="Height at point 2"
                />
              </div>
            </div>
          </div>
        </div>

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <Label className="text-sm font-medium text-blue-900 dark:text-blue-100">Total Energy Point 1</Label>
              <p className="text-xl font-bold text-blue-600 dark:text-blue-300">{result.energy1.toFixed(2)} J/m³</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <Label className="text-sm font-medium text-green-900 dark:text-green-100">Total Energy Point 2</Label>
              <p className="text-xl font-bold text-green-600 dark:text-green-300">{result.energy2.toFixed(2)} J/m³</p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
              <Label className="text-sm font-medium text-orange-900 dark:text-orange-100">Energy Difference</Label>
              <p className="text-xl font-bold text-orange-600 dark:text-orange-300">{result.diff.toFixed(2)} J/m³</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function FluidMechanicsContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Fluid Mechanics Fundamentals</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Fluid mechanics is the study of fluids (liquids and gases) and the forces acting on them. It encompasses fluid
          statics, fluid dynamics, and the practical applications in engineering systems like pumps, turbines, and flow
          control devices.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Fluid Properties</h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-blue-500" />
                Density (ρ)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Mass per unit volume of fluid, typically measured in kg/m³.</p>
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded-lg">
                <p className="font-mono text-center">ρ = m/V</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>Water: 1000 kg/m³</span>
                  <span>Air: 1.2 kg/m³</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-green-500" />
                Viscosity (μ)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Resistance to flow and deformation, measured in Pa·s.</p>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg">
                <p className="font-mono text-center">τ = μ(du/dy)</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>Water: 1×10⁻³ Pa·s</span>
                  <span>Air: 1.8×10⁻⁵ Pa·s</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Waves className="h-5 w-5 text-purple-500" />
                Surface Tension (σ)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Force per unit length acting along liquid surfaces, measured in N/m.</p>
              <div className="bg-purple-50 dark:bg-purple-950 p-3 rounded-lg">
                <p className="font-mono text-center">F = σ × L</p>
                <div className="flex justify-between mt-2 text-xs">
                  <span>Water-air: 0.073 N/m</span>
                  <span>Mercury-air: 0.486 N/m</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Fundamental Equations</h3>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Continuity Equation</CardTitle>
              <CardDescription>Conservation of mass for fluid flow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-4">
                <p className="font-mono text-center text-lg">ρ₁A₁v₁ = ρ₂A₂v₂</p>
                <p className="text-sm text-center mt-2 text-muted-foreground">For incompressible flow: A₁v₁ = A₂v₂</p>
              </div>
              <p className="text-sm">
                States that mass flow rate must remain constant throughout a flow system. As cross-sectional area
                decreases, velocity must increase to maintain constant mass flow.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bernoulli's Equation</CardTitle>
              <CardDescription>Energy conservation for fluid flow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-4">
                <p className="font-mono text-center text-lg">P + ½ρv² + ρgh = constant</p>
                <p className="text-sm text-center mt-2 text-muted-foreground">
                  Pressure + Kinetic + Potential energy per unit volume
                </p>
              </div>
              <p className="text-sm">
                Describes the relationship between pressure, velocity, and elevation in a flowing fluid. Used for
                analyzing flow in pipes, nozzles, and around objects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Interactive Bernoulli Calculator</h3>
        <p className="mb-6 text-muted-foreground">
          Use this calculator to analyze energy balance between two points in a fluid flow system using Bernoulli's
          equation.
        </p>
        <BernoulliCalculator />
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Flow Types and Characteristics</h3>

        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Laminar Flow</CardTitle>
                <CardDescription>Re &lt; 2300</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Smooth, orderly flow in layers</li>
                  <li>• Parabolic velocity profile</li>
                  <li>• Low friction losses</li>
                  <li>• Predictable flow patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Turbulent Flow</CardTitle>
                <CardDescription>Re &gt; 4000</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1">
                  <li>• Chaotic, mixing flow patterns</li>
                  <li>• Flatter velocity profile</li>
                  <li>• Higher friction losses</li>
                  <li>• Enhanced heat/mass transfer</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Reynolds Number</CardTitle>
              <CardDescription>Dimensionless parameter characterizing flow regime</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg mb-4">
                <p className="font-mono text-center text-lg">Re = ρvD/μ = vD/ν</p>
                <p className="text-sm text-center mt-2 text-muted-foreground">
                  Where: ρ = density, v = velocity, D = diameter, μ = dynamic viscosity, ν = kinematic viscosity
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                <Badge variant="outline" className="p-2 justify-center">
                  Re &lt; 2300: Laminar
                </Badge>
                <Badge variant="outline" className="p-2 justify-center">
                  2300 &lt; Re &lt; 4000: Transition
                </Badge>
                <Badge variant="outline" className="p-2 justify-center">
                  Re &gt; 4000: Turbulent
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Engineering Applications</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">Hydraulic Systems</h4>
              <p className="text-sm text-muted-foreground">
                Design of pumps, turbines, pipes, and hydraulic machinery for power transmission and fluid transport.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">Aerodynamics</h4>
              <p className="text-sm text-muted-foreground">
                Analysis of flow around vehicles, aircraft, and buildings for drag reduction and performance
                optimization.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">Process Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Flow control in chemical plants, HVAC systems, and manufacturing processes involving fluid handling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
