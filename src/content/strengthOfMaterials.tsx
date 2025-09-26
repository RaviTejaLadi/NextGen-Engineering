import React from 'react';
import { StressStrainCalculator } from '../components/StressStrainCalculator';

export default function StrengthOfMaterialsContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-3xl font-bold mb-4">Introduction to Strength of Materials</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Strength of materials is a fundamental subject in mechanical engineering that deals with the behavior of solid
          objects subject to stresses and strains. Understanding these concepts is crucial for designing safe and
          efficient structures and mechanical components.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Key Concepts</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-medium mb-3">1. Stress (σ)</h4>
            <p className="mb-4">
              Stress is the internal force per unit area within a material. It represents how much force is distributed
              over a given area and is measured in Pascals (Pa) or N/m².
            </p>
            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-4">
              <p className="font-mono text-center text-lg">σ = F / A</p>
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Where: σ = stress, F = applied force, A = cross-sectional area
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3">2. Strain (ε)</h4>
            <p className="mb-4">
              Strain is the deformation of a material relative to its original dimensions. It's a dimensionless quantity
              often expressed as a percentage.
            </p>
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-4">
              <p className="font-mono text-center text-lg">ε = ΔL / L</p>
              <p className="text-sm text-center mt-2 text-muted-foreground">
                Where: ε = strain, ΔL = change in length, L = original length
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-medium mb-3">3. Types of Stress</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Tensile Stress:</strong> Stress that tends to pull the material apart
              </li>
              <li>
                <strong>Compressive Stress:</strong> Stress that tends to compress or squeeze the material
              </li>
              <li>
                <strong>Shear Stress:</strong> Stress that acts parallel to the cross-sectional area
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Interactive Calculator</h3>
        <p className="mb-6 text-muted-foreground">
          Use this calculator to compute stress and strain values for different scenarios. This helps in understanding
          how materials respond to applied forces.
        </p>
        <StressStrainCalculator />
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Material Properties</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Elastic Modulus (E)</h4>
            <p className="text-sm text-muted-foreground">
              The ratio of stress to strain in the elastic deformation region. Higher values indicate stiffer materials.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Yield Strength</h4>
            <p className="text-sm text-muted-foreground">
              The stress level at which a material begins to deform plastically (permanently).
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Ultimate Tensile Strength</h4>
            <p className="text-sm text-muted-foreground">The maximum stress a material can withstand before failure.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-medium mb-2">Poisson's Ratio (ν)</h4>
            <p className="text-sm text-muted-foreground">
              The ratio of lateral strain to longitudinal strain in the elastic region.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">Applications in Engineering</h3>
        <div className="space-y-4">
          <p>Understanding strength of materials is essential for:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Designing structural components like beams, columns, and frames</li>
            <li>Analyzing machine parts under various loading conditions</li>
            <li>Selecting appropriate materials for specific applications</li>
            <li>Ensuring safety factors in engineering designs</li>
            <li>Predicting failure modes and preventing catastrophic failures</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
