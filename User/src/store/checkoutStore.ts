import { create } from 'zustand';

interface CheckoutState {
  currentStep: number;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
  currentStep: 3, // 3: Guest, 4: Payment, 5: Confirmation
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(5, state.currentStep + 1) })),
  prevStep: () => set((state) => ({ currentStep: Math.max(3, state.currentStep - 1) })),
}));
