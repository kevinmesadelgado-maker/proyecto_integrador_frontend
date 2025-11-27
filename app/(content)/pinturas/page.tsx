import { ExpandableCardDemo } from "@/components/ui/expandable-card-demo-grid";



export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Categorias</h1>
  <ExpandableCardDemo />
 
    </div>
  );
}

// 'use client';

// import { useEffect, useState } from 'react';
// import { productService } from '@/services/productService';
// import type { Product } from '@/types/product';

// import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
// import Image from 'next/image';
// import { Button } from '@/components/ui/Button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
// import { Label } from '@/components/ui/label';
// import { Badge } from '@/components/ui/badge';
// import { toast } from 'sonner';
// import { Pencil, Trash2, Plus } from 'lucide-react';

// export default function Page() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState<Product | null>(null);

//   const load = async () => {
//     setLoading(true);
//     try {
//       setProducts(await productService.getAll());
//     } catch {
//       toast.error("No se pudieron cargar los productos");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { load(); }, []);

//   const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const f = new FormData(e.currentTarget);
//     const newProduct = {
//       title: f.get("title") as string,
//       name: (f.get("name") as string) || (f.get("title") as string),
//       description: (f.get("description") as string) || "",
//       imageUrl: (f.get("imageUrl") as string) || "https://via.placeholder.com/600x400.png?text=Nuevo+Producto",
//     };

//     try {
//       await productService.create(newProduct);
//       toast.success("¡Creado! ✅");
//       setOpen(false);
//       load();
//     } catch {
//       toast.error("No se pudo crear");
//     }
//   };

//   const handleUpdate = async () => {
//     if (!editing?.id) return;
//     try {
//       await productService.update(editing.id, editing);
//       toast.success("¡Actualizado! ✅");
//       setEditing(null);
//       load();
//     } catch {
//       toast.error("Error");
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("¿Eliminar este producto?")) return;
//     try {
//       await productService.remove(id);
//       toast.success("Eliminado 🗑️");
//       load();
//     } catch {
//       toast.error("Error");
//     }
//   };

//   if (loading) return <div className="py-32 text-center text-2xl">Cargando productos...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center mb-10">
//           <h1 className="text-4xl font-bold">Gestión de Productos</h1>
//           <Dialog open={open} onOpenChange={setOpen}>
//             <DialogTrigger asChild>
//               <Button size="lg" className="gap-2">
//                 <Plus className="w-5 h-5" /> Nuevo Producto
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-md">
//               <DialogHeader>
//                 <DialogTitle>Nuevo Producto</DialogTitle>
//               <form onSubmit={handleCreate} className="space-y-4">
//                 <div><Label>Título</Label><Input name="title" required /></div>
//                 <div><Label>Nombre</Label><Input name="name" required /></div>
//                 <div><Label>Precio</Label><Input name="price" type="number" required /></div>
//                 <div><Label>Descripción (opcional)</Label><Textarea name="description" /></div>
//                 <div><Label>URL Imagen (opcional)</Label><Input name="imageUrl" placeholder="https://..." /></div>
//                 <DialogFooter>
//                   <Button type="submit">Crear Producto</Button>
//                 </DialogFooter>
//               </form>
//               </DialogHeader>
//             </DialogContent>
//           </Dialog>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((p) => (
//             <Card key={p.id} className="overflow-hidden group hover:shadow-2xl transition-all">
//               <div className="relative h-56">
//                 <Image
//                   src={p.imageUrl || "https://via.placeholder.com/600x400.png?text=Sin+Imagen"}
//                   alt={p.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform"
//                   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                   unoptimized
//                 />
//               </div>
//               <CardHeader>
//                 {editing && editing.id === p.id ? (
//                   <div className="space-y-3">
//                     <Input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} />
//                     <Textarea value={editing.description || ""} onChange={e => setEditing({ ...editing, description: e.target.value })} />
//                     <Input value={editing.imageUrl || ""} onChange={e => setEditing({ ...editing, imageUrl: e.target.value })} placeholder="URL imagen" />
//                     <div className="flex gap-2">
//                       <Button size="sm" onClick={handleUpdate}>Guardar</Button>
//                       <Button size="sm" variant="outline" onClick={() => setEditing(null)}>Cancelar</Button>
//                     </div>
//                   </div>
//                 ) : (
//                   <>
//                     <CardTitle>{p.title}</CardTitle>
//                     {p.description && <CardDescription>{p.description}</CardDescription>}
                    
//                   </>
//                 )}
//               </CardHeader>

//               {editing?.id !== p.id && (
//                 <CardFooter className="flex justify-between">
//                   <Button variant="outline" size="sm" onClick={() => setEditing(p)}>
//                     <Pencil className="w-4 h-4 mr-1" /> Editar
//                   </Button>
//                   <Button variant="destructive" size="sm" onClick={() => handleDelete(p.id!)}>
//                     <Trash2 className="w-4 h-4" />
//                   </Button>
//                 </CardFooter>
//               )}
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
