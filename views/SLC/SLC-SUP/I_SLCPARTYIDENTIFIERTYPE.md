---
name: I_SLCPARTYIDENTIFIERTYPE
description: Slcpartyidentifiertype
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
# I_SLCPARTYIDENTIFIERTYPE

**Slcpartyidentifiertype**

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
| `_SLCPartyIdentifierTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCPartyIdentifierTypeText` | `I_SLCPartyIdentifierTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Party Identifier Type' 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SLCPartyIdentifierType'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISLCPTYIDFRTYPE'
define view I_SLCPartyIdentifierType  as select from dd07l
   association [0..*] to I_SLCPartyIdentifierTypeText as _SLCPartyIdentifierTypeText on $projection.SLCPartyIdentifierType = _SLCPartyIdentifierTypeText.SLCPartyIdentifierType 
{
  @ObjectModel.text.association: '_SLCPartyIdentifierTypeText'
  key cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/party_id_type preserving type ) as SLCPartyIdentifierType,
  _SLCPartyIdentifierTypeText
}
where domname  = '/SRMSMC/PARTY_ID_TYPE' 
  and as4local = 'A'
```
