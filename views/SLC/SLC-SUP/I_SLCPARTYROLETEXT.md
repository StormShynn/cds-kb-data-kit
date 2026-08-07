---
name: I_SLCPARTYROLETEXT
description: Slcpartyroletext
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
# I_SLCPARTYROLETEXT

**Slcpartyroletext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SLCPartyRole` | ✓ | |  | `cast ( substring( domvalue_l, 1, 3 ) as /srmsmc/party_role_code preserving type)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `SLCPartyRoleName` |  | |  | `cast(ddtext as /srmsmc/role_description preserving type)` |
| `_Language` | | ✓ | | |
| `_SLCPartyRole` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCPartyRole` | `I_SLCPartyRole` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Party Role - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCPartyRole'
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.sqlViewName: 'ISLCPARTYROLET'
define view I_SLCPartyRoleText 
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SLCPartyRole as _SLCPartyRole on $projection.SLCPartyRole = _SLCPartyRole.SLCPartyRole
{
  key cast ( substring( domvalue_l, 1, 3 ) as /srmsmc/party_role_code preserving type) as SLCPartyRole,

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  cast(ddtext as /srmsmc/role_description preserving type) as SLCPartyRoleName, 

  _SLCPartyRole,
  _Language 
}
where domname = '/SRMSMC/PARTY_ROLE_CODE' and as4local = 'A'
```
