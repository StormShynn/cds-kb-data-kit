---
name: DDCDS_CUSTOMER_DOMAIN_VALUE
description: "Ddcds Customer Domain Value"
app_component: BC-DWB-DIC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-DIC
  - customer
  - component:BC-DWB-DIC
  - lob:Basis Components
  - bo:Customer
---
# DDCDS_CUSTOMER_DOMAIN_VALUE

**Ddcds Customer Domain Value**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `domain_name` | ✓ | |  | `cast( dd07l.domname as abap.char(30))` |  |  |
| `value_position` | ✓ | |  | `cast( dd07l.valpos as abap.numc(4))` |  |  |
| `value_low` |  | |  | `domvalue_l` |  |  |
| `value_high` |  | |  | `domvalue_h` |  |  |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'DDCDS_CUSTDV'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define view entity DDCDS_CUSTOMER_DOMAIN_VALUE
  with parameters
    p_domain_name : sxco_ad_object_name --abap.char(30)
  as select from dd07l
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DOMA'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = dd07l.domname
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = $parameters.p_domain_name

{
  key cast( dd07l.domname as abap.char(30)) as domain_name,
  key cast( dd07l.valpos as abap.numc(4))   as value_position,
      dd07l.domvalue_l                      as value_low,
      dd07l.domvalue_h                      as value_high
}
where
  dd07l.as4local = 'A'
```
