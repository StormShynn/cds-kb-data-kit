---
name: I_SLCPARTYROLE
description: "Slcpartyrole"
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
# I_SLCPARTYROLE

**Slcpartyrole**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SLCPartyRole` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as /srmsmc/party_role_code preserving type )` |  |  |
| `_SLCPartyRoleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCPartyRoleText` | `I_SLCPartyRoleText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Party Role'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SLCPartyRole'
@AbapCatalog.sqlViewName: 'ISLCPARTYROLE'
define view I_SLCPartyRole as select from dd07l
   association [0..*] to I_SLCPartyRoleText as _SLCPartyRoleText  on $projection.SLCPartyRole = _SLCPartyRoleText.SLCPartyRole
{
  @ObjectModel.text.association: '_SLCPartyRoleText'
  key cast ( substring( domvalue_l, 1, 3 ) as /srmsmc/party_role_code preserving type ) as SLCPartyRole,
  _SLCPartyRoleText
}
where domname  = '/SRMSMC/PARTY_ROLE_CODE' 
  and as4local = 'A'
```
