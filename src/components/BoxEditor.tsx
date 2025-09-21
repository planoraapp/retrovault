import React, { useState, useEffect } from 'react'
import { Settings, Eye, EyeOff, Ruler, Move, Square, Type, AlignLeft, AlignCenter, AlignRight, AlignJustify, Trash2 } from 'lucide-react'

interface BoxDimensions {
  width: string
  height: string
  padding: string
  margin: string
  gap: string
}

interface TextStyles {
  fontSize: string
  fontWeight: string
  color: string
  textAlign: string
  lineHeight: string
}

interface SelectedBox {
  id: string
  type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image'
  dimensions: BoxDimensions
  textStyles: TextStyles
  elementType?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'button' | 'img'
}


interface BoxEditorProps {
  onBoxUpdate: (box: SelectedBox) => void;
  onBoxSelect: (boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') => void;
  onClearSettings: () => void;
  initialDimensions?: BoxDimensions; // Still here for initial load, but not actively used for updates
  selectedBox?: SelectedBox | null; // Receive selected box from Dashboard
}

export default function BoxEditor({ onBoxUpdate, onBoxSelect, onClearSettings, initialDimensions, selectedBox }: BoxEditorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showGuides, setShowGuides] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  useEffect(() => {
    // When a box is selected, open the editor
    if (selectedBox) {
      setIsVisible(true);
      setIsSelecting(false);
    }
  }, [selectedBox]);

  const handleDimensionChange = (key: keyof BoxDimensions, value: string) => {
    if (selectedBox) {
      const updatedBox = {
        ...selectedBox,
        dimensions: { ...selectedBox.dimensions, [key]: value }
      };
      onBoxUpdate(updatedBox);
    }
  };

  const handleTextStyleChange = (key: keyof TextStyles, value: string) => {
    if (selectedBox) {
      const updatedBox = {
        ...selectedBox,
        textStyles: { ...selectedBox.textStyles, [key]: value }
      };
      onBoxUpdate(updatedBox);
    }
  };

  const startBoxSelection = () => {
    setIsSelecting(true);
    setIsVisible(false);
    // The actual selection will happen when user clicks on a box in Dashboard
  };

  const copyToClipboard = () => {
    if (selectedBox) {
      const cssString = `
        /* Styles for ${selectedBox.id} */
        max-width: ${selectedBox.dimensions.width};
        min-height: ${selectedBox.dimensions.height};
        padding: ${selectedBox.dimensions.padding};
        margin: ${selectedBox.dimensions.margin};
        gap: ${selectedBox.dimensions.gap}rem;

        /* Text styles */
        font-size: ${selectedBox.textStyles.fontSize};
        font-weight: ${selectedBox.textStyles.fontWeight};
        color: ${selectedBox.textStyles.color};
        text-align: ${selectedBox.textStyles.textAlign};
        line-height: ${selectedBox.textStyles.lineHeight};
      `;
      navigator.clipboard.writeText(cssString.trim());
      alert('CSS copiado para a área de transferência!');
    } else {
      alert('Nenhuma box selecionada para copiar CSS.');
    }
  };

  const presetBoxes = [
    { name: 'Hero Section', width: '90%', height: '400px', padding: '20px 12px', margin: '0 auto', gap: '2' },
    { name: 'Stats Grid', width: '90%', height: 'auto', padding: '0', margin: '0 auto', gap: '6' },
    { name: 'Content Grid', width: '90%', height: 'auto', padding: '0', margin: '0 auto', gap: '6' },
    { name: 'Compact', width: '80%', height: '300px', padding: '16px 8px', margin: '0 auto', gap: '1' },
    { name: 'Wide', width: '95%', height: '500px', padding: '24px 16px', margin: '0 auto', gap: '4' }
  ];

  const applyPreset = (preset: typeof presetBoxes[0]) => {
    if (selectedBox) {
      const newDimensions = {
        width: preset.width,
        height: preset.height,
        padding: preset.padding,
        margin: preset.margin,
        gap: preset.gap
      };
      
      const updatedBox = {
        ...selectedBox,
        dimensions: newDimensions
      };
      onBoxUpdate(updatedBox);
    }
  };

  if (!isVisible && !isSelecting) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-50"
        title="Abrir Editor de Boxes"
      >
        <Settings size={20} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-4 w-72 max-h-[80vh] overflow-y-auto z-50">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Square size={14} className="text-green-400" />
          <h3 className="text-white font-semibold text-sm">Box Editor</h3>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setShowGuides(!showGuides)}
            className={`p-1 rounded ${showGuides ? 'bg-green-600' : 'bg-gray-700'} text-white`}
            title="Mostrar/Ocultar Guias"
          >
            {showGuides ? <Eye size={12} /> : <EyeOff size={12} />}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white"
            title="Fechar Editor"
          >
            <EyeOff size={12} />
          </button>
        </div>
      </div>

      {/* Selection Mode */}
      {!selectedBox && (
        <div className="mb-4">
          <button
            onClick={startBoxSelection}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors"
          >
            {isSelecting ? 'Clique em uma Box...' : 'Selecionar Box para Editar'}
          </button>
        </div>
      )}

      {selectedBox && (
        <>
          <div className="mb-4 text-gray-300 text-sm">
            Editando: <span className="font-bold text-green-400">{selectedBox.id}</span>
            <div className="text-xs text-gray-400 mt-1">
              Tipo: {selectedBox.type} | Elemento: {selectedBox.elementType || 'div'}
            </div>
          </div>

          {/* Dimension Controls */}
          <div className="space-y-2">
            {/* Width */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block flex items-center gap-1">
                <Ruler size={10} />
                Largura ({selectedBox.dimensions.width})
              </label>
              <input
                type="range"
                min="50"
                max="100"
                value={parseInt(selectedBox.dimensions.width)}
                onChange={(e) => handleDimensionChange('width', `${e.target.value}%`)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Height */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block flex items-center gap-1">
                <Move size={10} />
                Altura ({selectedBox.dimensions.height})
              </label>
              <input
                type="range"
                min="200"
                max="800"
                step="10"
                value={parseInt(selectedBox.dimensions.height)}
                onChange={(e) => handleDimensionChange('height', `${e.target.value}px`)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Padding */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block">Padding ({selectedBox.dimensions.padding})</label>
              <input
                type="range"
                min="0"
                max="50"
                value={parseInt(selectedBox.dimensions.padding)}
                onChange={(e) => handleDimensionChange('padding', `${e.target.value}px`)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Gap */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block">Gap ({selectedBox.dimensions.gap}rem)</label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={parseFloat(selectedBox.dimensions.gap)}
                onChange={(e) => handleDimensionChange('gap', e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Element-specific Controls */}
          {(selectedBox.type === 'title' || selectedBox.type === 'text' || selectedBox.elementType === 'h1' || selectedBox.elementType === 'h2' || selectedBox.elementType === 'h3' || selectedBox.elementType === 'p') && (
            <div className="mt-3 pt-2 border-t border-gray-700 space-y-2">
              <h4 className="text-white font-semibold text-xs flex items-center gap-1 mb-2">
                <Type size={12} />
                Controles de Texto
              </h4>
              
              {/* Text Content */}
              <div>
                <label className="text-gray-300 text-xs mb-1 block">Conteúdo do Texto</label>
                <textarea
                  value={selectedBox.textStyles.fontSize} // Temporário, vamos criar um campo específico
                  onChange={(e) => handleTextStyleChange('fontSize', e.target.value)}
                  className="w-full p-1 bg-gray-800 border border-gray-600 text-white text-xs rounded resize-none"
                  rows={2}
                  placeholder="Digite o texto aqui..."
                />
              </div>
            </div>
          )}

          {/* Text Formatting Controls */}
          <div className="mt-3 pt-2 border-t border-gray-700 space-y-2">
            <h4 className="text-white font-semibold text-xs flex items-center gap-1 mb-2">
              <Type size={12} />
              Formatação de Texto
            </h4>

            {/* Font Size */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block">Tamanho da Fonte ({selectedBox.textStyles.fontSize})</label>
              <input
                type="range"
                min="12"
                max="48"
                value={parseInt(selectedBox.textStyles.fontSize)}
                onChange={(e) => handleTextStyleChange('fontSize', `${e.target.value}px`)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            {/* Font Weight */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block">Peso da Fonte</label>
              <select
                value={selectedBox.textStyles.fontWeight}
                onChange={(e) => handleTextStyleChange('fontWeight', e.target.value)}
                className="w-full p-1 bg-gray-800 border border-gray-600 text-white text-xs rounded"
              >
                <option value="300">Light</option>
                <option value="400">Normal</option>
                <option value="500">Medium</option>
                <option value="600">Semi Bold</option>
                <option value="700">Bold</option>
                <option value="900">Black</option>
              </select>
            </div>

            {/* Text Color */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block">Cor do Texto</label>
              <div className="flex gap-1 items-center">
                <input
                  type="color"
                  value={selectedBox.textStyles.color}
                  onChange={(e) => handleTextStyleChange('color', e.target.value)}
                  className="w-8 h-6 p-0.5 bg-gray-800 border border-gray-600 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={selectedBox.textStyles.color}
                  onChange={(e) => handleTextStyleChange('color', e.target.value)}
                  className="flex-1 bg-gray-800 border border-gray-600 text-white text-xs px-1 py-0.5 rounded"
                />
                <button
                  onClick={() => handleTextStyleChange('color', '#ffffff')}
                  className="px-1 py-0.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded"
                >
                  Branco
                </button>
                <button
                  onClick={() => handleTextStyleChange('color', '#82E06B')}
                  className="px-1 py-0.5 bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs rounded"
                >
                  Verde
                </button>
              </div>
            </div>

            {/* Text Align */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block">Alinhamento</label>
              <div className="flex justify-around bg-gray-800 p-0.5 rounded border border-gray-600">
                <button
                  onClick={() => handleTextStyleChange('textAlign', 'left')}
                  className={`p-1 rounded ${selectedBox.textStyles.textAlign === 'left' ? 'bg-gray-700 text-green-400' : 'text-gray-400 hover:bg-gray-700'}`}
                >
                  <AlignLeft size={12} />
                </button>
                <button
                  onClick={() => handleTextStyleChange('textAlign', 'center')}
                  className={`p-1 rounded ${selectedBox.textStyles.textAlign === 'center' ? 'bg-gray-700 text-green-400' : 'text-gray-400 hover:bg-gray-700'}`}
                >
                  <AlignCenter size={12} />
                </button>
                <button
                  onClick={() => handleTextStyleChange('textAlign', 'right')}
                  className={`p-1 rounded ${selectedBox.textStyles.textAlign === 'right' ? 'bg-gray-700 text-green-400' : 'text-gray-400 hover:bg-gray-700'}`}
                >
                  <AlignRight size={12} />
                </button>
                <button
                  onClick={() => handleTextStyleChange('textAlign', 'justify')}
                  className={`p-1 rounded ${selectedBox.textStyles.textAlign === 'justify' ? 'bg-gray-700 text-green-400' : 'text-gray-400 hover:bg-gray-700'}`}
                >
                  <AlignJustify size={12} />
                </button>
              </div>
            </div>

            {/* Line Height */}
            <div>
              <label className="text-gray-300 text-xs mb-1 block">Altura da Linha ({selectedBox.textStyles.lineHeight})</label>
              <input
                type="range"
                min="1"
                max="2.5"
                step="0.1"
                value={parseFloat(selectedBox.textStyles.lineHeight)}
                onChange={(e) => handleTextStyleChange('lineHeight', e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </>
      )}

      {/* Presets */}
      <div className="mt-3 pt-2 border-t border-gray-700">
        <label className="text-gray-300 text-xs mb-1 block">Presets Rápidos:</label>
        <div className="grid grid-cols-2 gap-1">
          {presetBoxes.map((preset, index) => (
            <button
              key={index}
              onClick={() => applyPreset(preset)}
              className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 p-1 rounded border border-gray-600 transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-3 pt-2 border-t border-gray-700 space-y-1">
        <button
          onClick={copyToClipboard}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-1 px-2 rounded text-xs transition-colors"
        >
          Copiar CSS
        </button>
        <button
          onClick={onClearSettings}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded text-xs transition-colors"
        >
          🗑️ Limpar Configurações
        </button>
      </div>

      {/* Visual Guide */}
      {showGuides && selectedBox && (
        <div className="mt-4 pt-3 border-t border-gray-700">
          <div className="text-gray-300 text-xs mb-2">Visualização:</div>
          <div 
            className="border-2 border-dashed border-green-400 bg-green-400/10 rounded p-2 text-center"
            style={{
              width: selectedBox.dimensions.width,
              height: selectedBox.dimensions.height === 'auto' ? '60px' : selectedBox.dimensions.height,
              margin: selectedBox.dimensions.margin,
              padding: selectedBox.dimensions.padding,
              fontSize: selectedBox.textStyles.fontSize,
              fontWeight: selectedBox.textStyles.fontWeight,
              color: selectedBox.textStyles.color,
              textAlign: selectedBox.textStyles.textAlign,
              lineHeight: selectedBox.textStyles.lineHeight
            }}
          >
            <div className="text-green-400 text-xs">Box Preview</div>
          </div>
        </div>
      )}
    </div>
  );
}