---
name: I_ACADEMICTITLEVH
description: "Academictitlevh"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - value-help
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ACADEMICTITLEVH

**Academictitlevh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AcademicTitle` | ✓ | |  |  | `CHAR(4)` | Academic Title: Key |
| `AcademicTitleName` |  | |  |  | `CHAR(20)` | Academic Title: Written Form |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Academic Title'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_AcademicTitleVH
  as select from I_AcademicTitle
{
      @Search.defaultSearchElement: true
  key AcademicTitle,      
      @EndUserText.label: 'Academic Title Name'
      @Search.defaultSearchElement: true
      AcademicTitleName,
      _Text
}
```
