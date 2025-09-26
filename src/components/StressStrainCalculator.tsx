import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator } from 'lucide-react';

export function StressStrainCalculator() {
  const [force, setForce] = useState('');
  const [area, setArea] = useState('');
  const [originalLength, setOriginalLength] = useState('');
  const [changeInLength, setChangeInLength] = useState('');

  const calculateStress = () => {
    const f = parseFloat(force);
    const a = parseFloat(area);
    if (!isNaN(f) && !isNaN(a) && a > 0) {
      return f / a;
    }
    return null;
  };

  const calculateStrain = () => {
    const dl = parseFloat(changeInLength);
    const l = parseFloat(originalLength);
    if (!isNaN(dl) && !isNaN(l) && l > 0) {
      return dl / l;
    }
    return null;
  };

  const stress = calculateStress();
  const strain = calculateStrain();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Stress & Strain Calculator
        </CardTitle>
        <CardDescription>Calculate stress (σ = F/A) and strain (ε = ΔL/L) for engineering materials</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-blue-600">Stress Calculation</h4>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="force">Applied Force (N)</Label>
                <Input
                  id="force"
                  type="number"
                  value={force}
                  onChange={(e) => setForce(e.target.value)}
                  placeholder="Enter force in Newtons"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="area">Cross-sectional Area (m²)</Label>
                <Input
                  id="area"
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="Enter area in square meters"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-green-600">Strain Calculation</h4>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="originalLength">Original Length (m)</Label>
                <Input
                  id="originalLength"
                  type="number"
                  value={originalLength}
                  onChange={(e) => setOriginalLength(e.target.value)}
                  placeholder="Enter original length"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="changeInLength">Change in Length (m)</Label>
                <Input
                  id="changeInLength"
                  type="number"
                  value={changeInLength}
                  onChange={(e) => setChangeInLength(e.target.value)}
                  placeholder="Enter change in length"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <Label className="text-sm font-medium text-blue-900 dark:text-blue-100">Stress (σ)</Label>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">
              {stress !== null ? `${stress.toExponential(2)} Pa` : 'Enter values'}
            </p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
            <Label className="text-sm font-medium text-green-900 dark:text-green-100">Strain (ε)</Label>
            <p className="text-2xl font-bold text-green-600 dark:text-green-300">
              {strain !== null ? strain.toFixed(6) : 'Enter values'}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
