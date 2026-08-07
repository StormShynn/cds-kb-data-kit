---
name: I_ORGANIZATIONALCHANGEVH
description: "Organizationalchangevh"
app_component: FI-GL-OC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-OC
  - interface-view
  - value-help
  - component:FI-GL-OC-2CL
  - lob:Finance
---
# I_ORGANIZATIONALCHANGEVH

**Organizationalchangevh**

| Property | Value |
|---|---|
| App Component | `FI-GL-OC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrganizationalChange` | ✓ | |  | `orgl_change` |  |  |
| `OrganizationalChangeName` |  | |  | `_Text[1:Language=$session.system_language].OrganizationalChangeName` |  |  |
| `OrglChangeEffectiveDate` |  | |  | `effective_date` |  |  |
| `OrglChangeCreatedByUser` |  | |  | `created_by_user` |  |  |
| `OrglChangeLastChangedByUser` |  | |  | `last_changed_by_user` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OrganizationalChangeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFINOCORGLCHNG'
@EndUserText.label: 'Organizational Change'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'OrganizationalChange'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #B,
  sizeCategory: #S
}
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Consumption.ranked: true

define view I_OrganizationalChangeVH
  as select from finoc_orglchg
  association [0..*] to I_OrganizationalChangeText as _Text on  $projection.OrganizationalChange = _Text.OrganizationalChange
{
      @ObjectModel.text.element: ['OrganizationalChangeName']
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key orgl_change as OrganizationalChange,
      @Semantics.text:true
      @Search.ranking: #LOW
      _Text[1:Language=$session.system_language].OrganizationalChangeName as OrganizationalChangeName,
      @Search.ranking: #LOW
      effective_date as OrglChangeEffectiveDate,
      @Search.ranking: #LOW
      created_by_user as OrglChangeCreatedByUser,
      @Search.ranking: #LOW
      last_changed_by_user as OrglChangeLastChangedByUser,
      _Text
}
```
