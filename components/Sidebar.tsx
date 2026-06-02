'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

const links=[['/dashboard','Dashboard'],['/athletes','Athletes'],['/teams','Teams'],['/coaches','Coaches'],['/levels','Levels & Skills'],['/weekly-notes','Weekly Notes'],['/reports','Reports'],['/settings','Settings']]
export default function Sidebar(){const pathname=usePathname();const router=useRouter();async function logout(){await supabase.auth.signOut();router.push('/login')}
return <aside className="sidebar"><div className="brand">Gymnest Team</div><nav className="nav">{links.map(([href,label])=><Link key={href} href={href} className={pathname===href?'active':''}>{label}</Link>)}<button className="btn secondary mt" onClick={logout}>Logout</button></nav></aside>}
