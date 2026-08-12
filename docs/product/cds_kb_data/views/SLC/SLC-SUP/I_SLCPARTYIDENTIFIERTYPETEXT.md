---
name: I_SLCPARTYIDENTIFIERTYPETEXT
description: "Slcpartyidentifiertypetext"
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SLCPARTYIDENTIFIERTYPETEXT

**Slcpartyidentifiertypetext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCPartyIdentifierType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/party_id_type preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SLCPartyIdentifierTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_SLCPartyIdentifierType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCPartyIdentifierType` | `I_SLCPartyIdentifierType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLCPTYIDFRTYPET'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCPartyIdentifierType'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Party Identifier Type - Text'
define view I_SLCPartyIdentifierTypeText as select from dd07t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
association [1..1] to I_SLCPartyIdentifierType as _SLCPartyIdentifierType on $projection.SLCPartyIdentifierType = _SLCPartyIdentifierType.SLCPartyIdentifierType
{
  key cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/party_id_type preserving type ) as SLCPartyIdentifierType,
  @Semantics.language: true
  key ddlanguage             as Language,

  @Semantics.text: true
  ddtext as SLCPartyIdentifierTypeName, 

  _SLCPartyIdentifierType,
  _Language
    
}
where domname = '/SRMSMC/PARTY_ID_TYPE'
  and as4local = 'A'
```
