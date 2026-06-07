-- GymTrack Option B routine element import for USAG Levels 1-5
-- Run after schema.sql. This replaces existing routine_elements for USAG Levels 1-5.
insert into programs (name) values ('USAG') on conflict (name) do nothing;

insert into program_levels (program_id, name) select id, 'USAG Level 1' from programs where name='USAG' on conflict do nothing;
insert into program_levels (program_id, name) select id, 'USAG Level 2' from programs where name='USAG' on conflict do nothing;
insert into program_levels (program_id, name) select id, 'USAG Level 3' from programs where name='USAG' on conflict do nothing;
insert into program_levels (program_id, name) select id, 'USAG Level 4' from programs where name='USAG' on conflict do nothing;
insert into program_levels (program_id, name) select id, 'USAG Level 5' from programs where name='USAG' on conflict do nothing;

-- Remove older USAG L1-L5 routine elements before reseeding
delete from athlete_element_progress where element_id in (select re.id from routine_elements re join program_levels pl on pl.id=re.level_id join programs p on p.id=pl.program_id where p.name='USAG' and pl.name in ('USAG Level 1','USAG Level 2','USAG Level 3','USAG Level 4','USAG Level 5')); 
delete from routine_elements where level_id in (select pl.id from program_levels pl join programs p on p.id=pl.program_id where p.name='USAG' and pl.name in ('USAG Level 1','USAG Level 2','USAG Level 3','USAG Level 4','USAG Level 5'));

-- USAG Level 1
with lvl as (select pl.id from program_levels pl join programs p on p.id=pl.program_id where p.name='USAG' and pl.name='USAG Level 1' limit 1),
elements(apparatus, element_name, order_number, element_type, is_required) as (values
  ('Vault', 'Stretch jump onto raised mat surface', 1, 'routine', true),
  ('Vault', 'Handstand fall to straight-lying position on back', 2, 'routine', true),
  ('Bars', 'Back hip pullover mount', 1, 'routine', true),
  ('Bars', 'Cast', 2, 'routine', true),
  ('Bars', 'Back hip circle', 3, 'routine', true),
  ('Bars', 'Cast straddle-on sole circle dismount', 4, 'routine', true),
  ('Bars', 'Underswing dismount', 5, 'routine', true),
  ('Beam', 'Jump to front support mount', 1, 'routine', true),
  ('Beam', 'Single leg V-sit / tuck stand / pike stand', 2, 'routine', true),
  ('Beam', 'Relevé lock stand', 3, 'routine', true),
  ('Beam', 'Forward passé balance', 4, 'routine', true),
  ('Beam', 'Stretch jump', 5, 'routine', true),
  ('Beam', 'Arabesque', 6, 'routine', true),
  ('Beam', 'Forward leg swing', 7, 'routine', true),
  ('Beam', 'Lunge pose', 8, 'routine', true),
  ('Beam', 'Cartwheel to 3/4 handstand dismount', 9, 'routine', true),
  ('Floor', 'Opening pose', 1, 'routine', true),
  ('Floor', 'Cartwheel', 2, 'routine', true),
  ('Floor', 'Backward roll tucked', 3, 'routine', true),
  ('Floor', 'Candlestick roll', 4, 'routine', true),
  ('Floor', 'Forward passé balance', 5, 'routine', true),
  ('Floor', 'Forward chassé', 6, 'routine', true),
  ('Floor', 'Stretch jump', 7, 'routine', true),
  ('Floor', 'Forward roll tucked', 8, 'routine', true),
  ('Floor', 'Handstand', 9, 'routine', true),
  ('Floor', 'Final pose', 10, 'routine', true),
  ('Physical Preparation', 'Static chin hold', 1, 'physical', true),
  ('Physical Preparation', 'Pull-ups', 2, 'physical', true),
  ('Physical Preparation', 'Push-ups', 3, 'physical', true),
  ('Physical Preparation', 'Rope climb', 4, 'physical', true),
  ('Physical Preparation', 'Flexed knee lifts', 5, 'physical', true),
  ('Physical Preparation', 'Leg lifts', 6, 'physical', true),
  ('Physical Preparation', 'Hollow body hold', 7, 'physical', true),
  ('Physical Preparation', '60-foot run', 8, 'physical', true),
  ('Physical Preparation', 'Candlestick to stretch jump', 9, 'physical', true),
  ('Physical Preparation', 'Hamstring flexibility', 10, 'physical', true)
)
insert into routine_elements (level_id, apparatus, element_name, order_number, element_type, is_required)
select lvl.id, e.apparatus, e.element_name, e.order_number, e.element_type, e.is_required from lvl, elements e;

-- USAG Level 2
with lvl as (select pl.id from program_levels pl join programs p on p.id=pl.program_id where p.name='USAG' and pl.name='USAG Level 2' limit 1),
elements(apparatus, element_name, order_number, element_type, is_required) as (values
  ('Vault', 'Jump to handstand onto raised mat surface', 1, 'routine', true),
  ('Vault', 'Fall to straight-lying position on back', 2, 'routine', true),
  ('Bars', 'Glide swing and return', 1, 'routine', true),
  ('Bars', 'Back hip pullover mount', 2, 'routine', true),
  ('Bars', 'Cast', 3, 'routine', true),
  ('Bars', 'Second cast', 4, 'routine', true),
  ('Bars', 'Back hip circle', 5, 'routine', true),
  ('Bars', 'Underswing dismount', 6, 'routine', true),
  ('Beam', 'Jump to front support mount', 1, 'routine', true),
  ('Beam', 'Single leg V-sit / tuck stand / pike stand', 2, 'routine', true),
  ('Beam', 'Forward passé balance', 3, 'routine', true),
  ('Beam', 'Relevé lock stand with plié / relevé / stretch jump', 4, 'routine', true),
  ('Beam', 'Arabesque 30 degrees', 5, 'routine', true),
  ('Beam', 'Forward leg swing', 6, 'routine', true),
  ('Beam', 'Relevé lock stand with 180 pivot turn', 7, 'routine', true),
  ('Beam', 'Lunge pose sequence', 8, 'routine', true),
  ('Beam', 'Cartwheel to side handstand dismount', 9, 'routine', true),
  ('Floor', 'Opening pose', 1, 'routine', true),
  ('Floor', 'Cartwheel', 2, 'routine', true),
  ('Floor', 'Backward roll to push-up position', 3, 'routine', true),
  ('Floor', 'Kneeling pose / straight stand', 4, 'routine', true),
  ('Floor', 'Forward passé pose', 5, 'routine', true),
  ('Floor', '180 heel-snap turn in forward passé', 6, 'routine', true),
  ('Floor', 'Forward chassé', 7, 'routine', true),
  ('Floor', 'Straight leg leap 60 degrees', 8, 'routine', true),
  ('Floor', 'Split jump 60 degrees', 9, 'routine', true),
  ('Floor', 'Handstand', 10, 'routine', true),
  ('Floor', 'Candlestick', 11, 'routine', true),
  ('Floor', 'Bridge back kick-over', 12, 'routine', true),
  ('Floor', 'Relevé stand / final pose', 13, 'routine', true),
  ('Physical Preparation', 'Static chin hold', 1, 'physical', true),
  ('Physical Preparation', 'Pull-ups', 2, 'physical', true),
  ('Physical Preparation', 'Push-ups', 3, 'physical', true),
  ('Physical Preparation', 'Rope climb', 4, 'physical', true),
  ('Physical Preparation', 'Flexed knee lifts', 5, 'physical', true),
  ('Physical Preparation', 'Leg lifts', 6, 'physical', true),
  ('Physical Preparation', 'Hollow body hold', 7, 'physical', true),
  ('Physical Preparation', '60-foot run', 8, 'physical', true),
  ('Physical Preparation', 'Candlestick to stretch jump', 9, 'physical', true),
  ('Physical Preparation', 'Bridge and shoulder flexibility', 10, 'physical', true)
)
insert into routine_elements (level_id, apparatus, element_name, order_number, element_type, is_required)
select lvl.id, e.apparatus, e.element_name, e.order_number, e.element_type, e.is_required from lvl, elements e;

-- USAG Level 3
with lvl as (select pl.id from program_levels pl join programs p on p.id=pl.program_id where p.name='USAG' and pl.name='USAG Level 3' limit 1),
elements(apparatus, element_name, order_number, element_type, is_required) as (values
  ('Vault', 'Handstand flat-back vault over raised mat surface', 1, 'routine', true),
  ('Bars', 'Glide swing and return mount', 1, 'routine', true),
  ('Bars', 'Glide kip mount option', 2, 'routine', true),
  ('Bars', 'Cast', 3, 'routine', true),
  ('Bars', 'Front hip circle', 4, 'routine', true),
  ('Bars', 'Single leg shoot-through', 5, 'routine', true),
  ('Bars', 'Stride circle / mill circle', 6, 'routine', true),
  ('Bars', 'Single leg cut backward', 7, 'routine', true),
  ('Bars', 'Cast', 8, 'routine', true),
  ('Bars', 'Underswing dismount', 9, 'routine', true),
  ('Beam', 'Jump to front support mount', 1, 'routine', true),
  ('Beam', 'Handstand', 2, 'routine', true),
  ('Beam', 'Arabesque', 3, 'routine', true),
  ('Beam', 'Straight jump', 4, 'routine', true),
  ('Beam', 'Split jump', 5, 'routine', true),
  ('Beam', 'Pivot turn', 6, 'routine', true),
  ('Beam', 'Side handstand dismount', 7, 'routine', true),
  ('Beam', 'Cartwheel dismount preparation', 8, 'routine', true),
  ('Beam', 'Dance pose connections', 9, 'routine', true),
  ('Floor', 'Opening pose', 1, 'routine', true),
  ('Floor', 'Handstand forward roll', 2, 'routine', true),
  ('Floor', 'Split leap 90 degrees', 3, 'routine', true),
  ('Floor', 'Stretch jump with turn preparation', 4, 'routine', true),
  ('Floor', 'Backward roll to push-up position', 5, 'routine', true),
  ('Floor', 'Bridge kick-over', 6, 'routine', true),
  ('Floor', 'Round-off rebound', 7, 'routine', true),
  ('Floor', 'Cartwheel / dance connection', 8, 'routine', true),
  ('Floor', '180 heel-snap turn', 9, 'routine', true),
  ('Floor', 'Final pose', 10, 'routine', true),
  ('Physical Preparation', 'Chin hold / pull-up strength', 1, 'physical', true),
  ('Physical Preparation', 'Rope climb', 2, 'physical', true),
  ('Physical Preparation', 'Leg lifts', 3, 'physical', true),
  ('Physical Preparation', 'Hollow body rock', 4, 'physical', true),
  ('Physical Preparation', 'Arch body hold', 5, 'physical', true),
  ('Physical Preparation', 'Handstand hold', 6, 'physical', true),
  ('Physical Preparation', 'Split flexibility', 7, 'physical', true),
  ('Physical Preparation', 'Bridge shoulder flexibility', 8, 'physical', true),
  ('Physical Preparation', 'Sprint / hurdle mechanics', 9, 'physical', true),
  ('Physical Preparation', 'Rebound shaping', 10, 'physical', true)
)
insert into routine_elements (level_id, apparatus, element_name, order_number, element_type, is_required)
select lvl.id, e.apparatus, e.element_name, e.order_number, e.element_type, e.is_required from lvl, elements e;

-- USAG Level 4
with lvl as (select pl.id from program_levels pl join programs p on p.id=pl.program_id where p.name='USAG' and pl.name='USAG Level 4' limit 1),
elements(apparatus, element_name, order_number, element_type, is_required) as (values
  ('Vault', 'Front handspring vault over vault table', 1, 'routine', true),
  ('Bars', 'Glide kip', 1, 'routine', true),
  ('Bars', 'Cast above horizontal', 2, 'routine', true),
  ('Bars', 'Back hip circle', 3, 'routine', true),
  ('Bars', 'Squat-on', 4, 'routine', true),
  ('Bars', 'Jump to high bar', 5, 'routine', true),
  ('Bars', 'Long hang kip', 6, 'routine', true),
  ('Bars', 'Cast', 7, 'routine', true),
  ('Bars', 'Back hip circle', 8, 'routine', true),
  ('Bars', 'Underswing / tap swing dismount', 9, 'routine', true),
  ('Beam', 'Mount', 1, 'routine', true),
  ('Beam', 'Handstand', 2, 'routine', true),
  ('Beam', 'Split leap 120 degrees', 3, 'routine', true),
  ('Beam', 'Cartwheel', 4, 'routine', true),
  ('Beam', 'Straight jump / split jump connection', 5, 'routine', true),
  ('Beam', '180 pivot turn', 6, 'routine', true),
  ('Beam', 'Scale / arabesque', 7, 'routine', true),
  ('Beam', 'Stretch jump with body alignment', 8, 'routine', true),
  ('Beam', 'Cartwheel to side handstand dismount', 9, 'routine', true),
  ('Beam', 'Dance pose connections', 10, 'routine', true),
  ('Floor', 'Round-off back handspring series', 1, 'routine', true),
  ('Floor', 'Front handspring step-out', 2, 'routine', true),
  ('Floor', 'Backward extension roll', 3, 'routine', true),
  ('Floor', 'Handstand forward roll', 4, 'routine', true),
  ('Floor', 'Split leap 120 degrees', 5, 'routine', true),
  ('Floor', 'Split jump', 6, 'routine', true),
  ('Floor', '180 turn in passé', 7, 'routine', true),
  ('Floor', 'Bridge kick-over / back walkover preparation', 8, 'routine', true),
  ('Floor', 'Chassé dance connection', 9, 'routine', true),
  ('Floor', 'Final pose', 10, 'routine', true),
  ('Physical Preparation', 'Rope climb', 1, 'physical', true),
  ('Physical Preparation', 'Pull-ups', 2, 'physical', true),
  ('Physical Preparation', 'Push-ups', 3, 'physical', true),
  ('Physical Preparation', 'Leg lifts', 4, 'physical', true),
  ('Physical Preparation', 'Hollow body hold', 5, 'physical', true),
  ('Physical Preparation', 'Arch hold', 6, 'physical', true),
  ('Physical Preparation', 'Handstand shaping', 7, 'physical', true),
  ('Physical Preparation', 'Split flexibility', 8, 'physical', true),
  ('Physical Preparation', 'Bridge shoulder flexibility', 9, 'physical', true),
  ('Physical Preparation', 'Vault run / board rebound', 10, 'physical', true)
)
insert into routine_elements (level_id, apparatus, element_name, order_number, element_type, is_required)
select lvl.id, e.apparatus, e.element_name, e.order_number, e.element_type, e.is_required from lvl, elements e;

-- USAG Level 5
with lvl as (select pl.id from program_levels pl join programs p on p.id=pl.program_id where p.name='USAG' and pl.name='USAG Level 5' limit 1),
elements(apparatus, element_name, order_number, element_type, is_required) as (values
  ('Vault', 'Front handspring vault over vault table', 1, 'routine', true),
  ('Bars', 'Glide kip', 1, 'routine', true),
  ('Bars', 'Cast to horizontal or above', 2, 'routine', true),
  ('Bars', 'Clear hip circle preparation / back hip circle', 3, 'routine', true),
  ('Bars', 'Squat-on', 4, 'routine', true),
  ('Bars', 'Jump to high bar', 5, 'routine', true),
  ('Bars', 'Long hang kip', 6, 'routine', true),
  ('Bars', 'Cast', 7, 'routine', true),
  ('Bars', 'Long hang pullover / tap swing action', 8, 'routine', true),
  ('Bars', 'Flyaway preparation / underswing dismount', 9, 'routine', true),
  ('Bars', 'Controlled landing', 10, 'routine', true),
  ('Beam', 'Mount', 1, 'routine', true),
  ('Beam', 'Handstand hold', 2, 'routine', true),
  ('Beam', 'Back walkover', 3, 'routine', true),
  ('Beam', 'Cartwheel', 4, 'routine', true),
  ('Beam', 'Split leap 150 degrees', 5, 'routine', true),
  ('Beam', 'Sissonne / split jump connection', 6, 'routine', true),
  ('Beam', 'Full turn preparation / 180 turn', 7, 'routine', true),
  ('Beam', 'Scale / arabesque', 8, 'routine', true),
  ('Beam', 'Side handstand dismount', 9, 'routine', true),
  ('Beam', 'Dance pose connections', 10, 'routine', true),
  ('Floor', 'Front handspring step-out', 1, 'routine', true),
  ('Floor', 'Round-off back handspring back handspring', 2, 'routine', true),
  ('Floor', 'Backward extension roll', 3, 'routine', true),
  ('Floor', 'Handstand forward roll', 4, 'routine', true),
  ('Floor', 'Split leap 150 degrees', 5, 'routine', true),
  ('Floor', 'Full turn preparation / 180 turn', 6, 'routine', true),
  ('Floor', 'Split jump', 7, 'routine', true),
  ('Floor', 'Back walkover / bridge element', 8, 'routine', true),
  ('Floor', 'Chassé leap connection', 9, 'routine', true),
  ('Floor', 'Final pose', 10, 'routine', true),
  ('Physical Preparation', 'Pull-ups', 1, 'physical', true),
  ('Physical Preparation', 'Rope climb', 2, 'physical', true),
  ('Physical Preparation', 'Leg lifts', 3, 'physical', true),
  ('Physical Preparation', 'Hollow body hold', 4, 'physical', true),
  ('Physical Preparation', 'Arch body hold', 5, 'physical', true),
  ('Physical Preparation', 'Handstand hold', 6, 'physical', true),
  ('Physical Preparation', 'Split flexibility', 7, 'physical', true),
  ('Physical Preparation', 'Bridge shoulder flexibility', 8, 'physical', true),
  ('Physical Preparation', 'Vault run and board speed', 9, 'physical', true),
  ('Physical Preparation', 'Rebound and landing control', 10, 'physical', true)
)
insert into routine_elements (level_id, apparatus, element_name, order_number, element_type, is_required)
select lvl.id, e.apparatus, e.element_name, e.order_number, e.element_type, e.is_required from lvl, elements e;
