'use client';

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from '@lmring/ui';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

interface AddModelDialogProps {
  onAdd: (model: { id: string; name: string }) => void;
}

export function AddModelDialog({ onAdd }: AddModelDialogProps) {
  const [open, setOpen] = useState(false);
  const [modelId, setModelId] = useState('');
  const [modelName, setModelName] = useState('');

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      setModelId('');
      setModelName('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!modelId) return;

    onAdd({
      id: modelId.trim(),
      name: modelName.trim() || modelId.trim(),
    });
    handleOpenChange(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="h-9 w-9"
        title="Add model"
        onClick={() => setOpen(true)}
      >
        <PlusIcon className="h-4 w-4" />
      </Button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent open={open} className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add Model</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="modelId">
                  Model ID <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="modelId"
                  value={modelId}
                  onChange={(e) => setModelId(e.target.value)}
                  placeholder="e.g. gpt-4-turbo"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelName">Model Name</Label>
                <Input
                  id="modelName"
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  placeholder="e.g. GPT-4 Turbo"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={!modelId}>
                OK
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
