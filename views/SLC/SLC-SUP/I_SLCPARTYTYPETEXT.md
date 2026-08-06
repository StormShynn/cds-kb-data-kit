---
name: I_SLCPARTYTYPETEXT
description: Slcpartytypetext
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - text
  - component:SLC-SUP
  - lob:Other
---
# I_SLCPARTYTYPETEXT

**Slcpartytypetext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SLCPartyType` | `cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/party_type )` |
| key `Language` | `ddlanguage` |
| `SLCPartyTypeName` | `ddtext` |
| `_Language` | *Association* |
| `_SLCPartyType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCPartyType` | `I_SLCPartyType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Party Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCPartyType'
@AbapCatalog.sqlViewName: 'ISLCPARTYTYPET'
define view I_SLCPartyTypeText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SLCPartyType as _SLCPartyType on $projection.SLCPartyType = _SLCPartyType.SLCPartyType
{
  key cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/party_type ) as SLCPartyType,

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  ddtext as SLCPartyTypeName,

  _SLCPartyType, 
  _Language
}
where domname = '/SRMSMC/PARTY_TYPE' and as4local = 'A'
```
