'use client'
import { useEffect, useState } from 'react'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import type { Coach } from '@/lib/types'
export default function Coaches(){const[items,setItems]=useState<Coach[]>([]);const[form,setForm]=useState<any>({});useEffect(()=>{load()},[]);async function load(){const{data}=await supabase.from('coaches').select('*').order('full_name');setItems(data||[])}async function add(e:React.FormEvent){e.preventDefault();await supabase.from('coaches').insert(form);setForm({});load()}async function del(id:string){if(confirm('Delete coach?')){await supabase.from('coaches').delete().eq('id',id);load()}}
return <AppShell><h1 className="title">Coaches</h1><div className="card mb"><form onSubmit={add} className="form-grid"><label>Full name<input required value={form.full_name||''} onChange={e=>setForm({...form,full_name:e.target.value})}/></label><label>Phone<input value={form.phone||''} onChange={e=>setForm({...form,phone:e.target.value})}/></label><button className="btn">Add Coach</button></form></div><table><thead><tr><th>Name</th><th>Phone</th><th></th></tr></thead><tbody>{items.map(x=><tr key={x.id}><td>{x.full_name}</td><td>{x.phone||'-'}</td><td><button className="btn danger" onClick={()=>del(x.id)}>Delete</button></td></tr>)}</tbody></table></AppShell>}
