---
name: I_SLCPARTYTYPE
description: Slcpartytype
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
  - component:SLC-SUP
  - lob:Other
---
# I_SLCPARTYTYPE

**Slcpartytype**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SLCPartyType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/party_type preserving type)` |
| `_SLCPartyTypeText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCPartyTypeText` | `I_SLCPartyTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Party Type'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCPartyType'
@AbapCatalog.sqlViewName: 'ISLCPARTYTYPE'
define view I_SLCPartyType  as select from dd07l
   association [0..*] to I_SLCPartyTypeText as _SLCPartyTypeText on $projection.SLCPartyType = _SLCPartyTypeText.SLCPartyType 
{
  @ObjectModel.text.association: '_SLCPartyTypeText'
  key cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/party_type preserving type) as SLCPartyType, 
  _SLCPartyTypeText
}
where domname  = '/SRMSMC/PARTY_TYPE' 
  and as4local = 'A'
```
