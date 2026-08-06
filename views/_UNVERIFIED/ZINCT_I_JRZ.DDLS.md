---
name: ZINCT_I_JRZ.DDLS
description: Incidentes Interface Entity
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Jrochaz01/ABAP_CLOUDII_ZAPATA_V2/blob/e9522ac8b5cf2d4982ab34e0040a5e2fbb3f9d77/src/zinct_i_jrz.ddls.asddls
semantic_en: Incidentes Interface Entity — CDS view.
semantic_vi: Incidentes Interface Entity — CDS view dựa trên Incidentes Interface Entity.
keywords:
  - incidentes
  - interface
  - entity
  - uuid
  - incident
  - title
  - description
  - status
tags:
  - AC
  - component:AC
---
# ZINCT_I_JRZ.DDLS

**Incidentes Interface Entity**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Jrochaz01/ABAP_CLOUDII_ZAPATA_V2/blob/e9522ac8b5cf2d4982ab34e0040a5e2fbb3f9d77/src/zinct_i_jrz.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `IncUuid` | `IncUuid` |
| `IncidentId` | `IncidentId` |
| `Title` | `Title` |
| `Description` | `Description` |
| `Status` | `Status` |
| `Priority` | `Priority` |
| `Creationdate` | `Creationdate` |
| `Changedate` | `Changedate` |
| `LocalCreatedBy` | `LocalCreatedBy` |
| `LocalCreatedAt` | `LocalCreatedAt` |
| `LocalLastChangedBy` | `LocalLastChangedBy` |
| `LocalLastChangedAt` | `LocalLastChangedAt` |
| `LastChangedAt` | `LastChangedAt` |
| `_Status` | *Association* |
| `_Priority` | *Association* |

## Source Code

*Source: [https://github.com/Jrochaz01/ABAP_CLOUDII_ZAPATA_V2/blob/e9522ac8b5cf2d4982ab34e0040a5e2fbb3f9d77/src/zinct_i_jrz.ddls.asddls](https://github.com/Jrochaz01/ABAP_CLOUDII_ZAPATA_V2/blob/e9522ac8b5cf2d4982ab34e0040a5e2fbb3f9d77/src/zinct_i_jrz.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Incidentes Interface Entity'
@Metadata.ignorePropagatedAnnotations: true
define root view entity ZINCT_I_JRZ
  provider contract transactional_interface
  as projection on ZINCT_R_JRZ
{
  key IncUuid,
      IncidentId,
      Title, 
      Description,
      Status,
      Priority,
      Creationdate,
      Changedate,
      LocalCreatedBy,
      LocalCreatedAt,
      LocalLastChangedBy,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangedAt,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangedAt,
      /* Associations */
      _Status,
      _Priority      
}
```