---
name: I_CASCRTYDEPDOCBPITEMSTATUST
description: Cascrtydepdocbpitemstatust
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - status
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASCRTYDEPDOCBPITEMSTATUST

**Cascrtydepdocbpitemstatust**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAScrtyDepDocBPItemStatus` | ✓ | |  | `cast( left( domvalue_l,1) as secdep_doci_status_kk )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `CAScrtyDepDocBPItemStatusText` |  | |  | `cast( ddtext as secdep_doci_status_text_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Scrty Deposit Doc BP Item Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAScrtyDepDocBPItemStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAScrtyDepDocBPItemStatusT
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( domvalue_l,1) as secdep_doci_status_kk )         as CAScrtyDepDocBPItemStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                  as Language,

      @Semantics.text: true
      cast( ddtext as secdep_doci_status_text_kk preserving type ) as CAScrtyDepDocBPItemStatusText,

      _Language
}
where
      dd07t.domname  = 'SECDEP_DOCI_STATUS_KK'
  and dd07t.as4local = 'A'
```
