const equipment = [
  'Workstation with Nvidia GPU (4 Nos.)',
  'Raspberry Pi 5 16GB (4 Nos.)',
  'Jetson Orin Super Nano Dev Kit (2 Nos.)',
  'PynQ Z2 FPGA Dev board',
  'STM32 Dev Board (2 Nos.)',
  'IoT Kit with Node MCU (5 Nos.)',
  'IoT Kit with Micro:bit (2 Nos.)',
  '20GHz RF Spectrum Analyzer (2 Nos.)',
  '100MSps DSO (3 Nos.)',
  'Chip Whisperer Nano (2 Nos.)',
  '3D Printer with Filament (1 No.)',
  'Soldering-Desoldering Station (2 Nos.)',
  '32 Channel EEG Setup (1 No.)',
  'BP Monitor with ECG Setup (1 No.)',
]

export default function LabEquipment() {
  return (
    <section className="bg-ocean/5 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-ocean-dark text-center mb-2">
          Lab Equipment
        </h2>
        <p className="text-gray-600 text-center mb-10">Facilities available at the IEDC Lab</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {equipment.map((item, i) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-white border border-ocean/15 rounded-xl p-4 shadow-sm"
            >
              <span className="shrink-0 w-8 h-8 rounded-full bg-ocean text-white text-sm font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-ocean-dark font-medium text-sm leading-snug pt-1">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
