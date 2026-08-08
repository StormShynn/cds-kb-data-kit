---
name: ZINN_I_PETS.DDLS
description: "###GENERATED Core Data Service Entity"
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/fredymb/innova_eclipse/blob/1009c054679dd9be8ecd551239c349291f9a45af/src/zinn_i_pets.ddls.asddls
semantic_en: "###GENERATED Core Data Service Entity — CDS view based on ZINN_PETS."
semantic_vi: "###GENERATED Core Data Service Entity — CDS view dựa trên ZINN_PETS."
keywords:
  - "###generated"
  - "core"
  - "data"
  - "service"
  - "entity"
  - "petname"
  - "pettype"
  - "petage"
  - "petowner"
  - "created"
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZINN_I_PETS.DDLS

**###GENERATED Core Data Service Entity**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/fredymb/innova_eclipse/blob/1009c054679dd9be8ecd551239c349291f9a45af/src/zinn_i_pets.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Petname` | ✓ | |  | `petname` |  |  |
| `Pettype` |  | |  | `pettype` |  |  |
| `Petage` |  | |  | `petage` |  |  |
| `Petowner` |  | |  | `petowner` |  |  |
| `CreatedBy` |  | |  | `created_by` |  |  |
| `ChangedBy` |  | |  | `changed_by` |  |  |
| `LocinstLastchangeDate` |  | |  | `locinst_lastchange_date` |  |  |
| `LocinstLastchangeTime` |  | |  | `locinst_lastchange_time` |  |  |
| `LocinstLastchangeTstmpl` |  | |  | `locinst_lastchange_tstmpl` |  |  |
| `LocinstLastchangeUtcl` |  | |  | `locinst_lastchange_utcl` |  |  |
| `LastchangeDate` |  | |  | `lastchange_date` |  |  |
| `LastchangeTime` |  | |  | `lastchange_time` |  |  |
| `LastchangeTstmpl` |  | |  | `lastchange_tstmpl` |  |  |
| `LastchangeUtcl` |  | |  | `lastchange_utcl` |  |  |

## Source Code

*Source: [https://github.com/fredymb/innova_eclipse/blob/1009c054679dd9be8ecd551239c349291f9a45af/src/zinn_i_pets.ddls.asddls](https://github.com/fredymb/innova_eclipse/blob/1009c054679dd9be8ecd551239c349291f9a45af/src/zinn_i_pets.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@EndUserText.label: '###GENERATED Core Data Service Entity'
define root view entity ZINN_I_PETS
  as select from ZINN_PETS as Pets
{
  key petname as Petname,
  pettype as Pettype,
  petage as Petage,
  petowner as Petowner,
  @Semantics.user.createdBy: true
  created_by as CreatedBy,
  @Semantics.user.lastChangedBy: true
  changed_by as ChangedBy,
  @Semantics.systemDateTime.localInstanceLastChangedAt: true
  locinst_lastchange_date as LocinstLastchangeDate,
  locinst_lastchange_time as LocinstLastchangeTime,
  @Semantics.systemDateTime.localInstanceLastChangedAt: true
  locinst_lastchange_tstmpl as LocinstLastchangeTstmpl,
  locinst_lastchange_utcl as LocinstLastchangeUtcl,
  @Semantics.systemDateTime.lastChangedAt: true
  lastchange_date as LastchangeDate,
  lastchange_time as LastchangeTime,
  @Semantics.systemDateTime.lastChangedAt: true
  lastchange_tstmpl as LastchangeTstmpl,
  lastchange_utcl as LastchangeUtcl
  
}
```
