'use client'
import { useEffect, useState } from 'react'
import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import { supabase } from '@/lib/supabaseClient'
export default function Reports(){const[rows,setRows]=useState<any[]>([]);useEffect(()=>{load()},[]);async function load(){const{data}=await supabase.rpc('athlete_readiness_report');setRows(data||[])}return <AppShell><h1 className="title">Reports</h1><p className="muted">Readiness report by athlete.</p><table><thead><tr><th>Athlete</th><th>Level</th><th>Total Skills</th><th>Achieved</th><th>Readiness</th><th>Status</th></tr></thead><tbody>{rows.map((r,i)=><tr key={i}><td>{r.athlete_name}</td><td>{r.level_name||'-'}</td><td>{r.total_skills}</td><td>{r.achieved_skills}</td><td><ProgressBar value={Number(r.readiness)||0}/></td><td>{Number(r.readiness)>=85?<span className="badge">Ready for evaluation</span>:'Keep training'}</td></tr>)}</tbody></table></AppShell>}
