// store/formStore/store.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useFormStore = create(
  persist(
    (set) => ({
      formData: {
        basic: {
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          securityQuestion: "",
          securityAnswer: "",
        },
        id: {},
        residence: {},
        beneficiaries: [],
      },
      currentStep: 0,
      setFormData: (section, data) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [section]: { ...state.formData[section], ...data },
          },
        })),
      setCurrentStep: (step) => set({ currentStep: step }),
    }),
    {
      name: "form-storage",
      storage: createJSONStorage(() => AsyncStorage),
      getStorage: () => AsyncStorage,
    }
  )
);

export default useFormStore;
