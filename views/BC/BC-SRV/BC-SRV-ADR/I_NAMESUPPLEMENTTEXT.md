---
name: I_NAMESUPPLEMENTTEXT
description: Namesupplementtext
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_NAMESUPPLEMENTTEXT

**Namesupplementtext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `PersonNameSupplementCode` | ✓ | |  | `title_key` |  |  |
| `NameSupplementDescription` |  | |  | `title_dscr` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Name Supplement - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'INAMESUPPLEMENTT'
@ObjectModel.representativeKey: 'PersonNameSupplementCode'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_NameSupplementText
  as select from tsad5t
{
      @Semantics.language: true
  key langu      as Language,
  key title_key  as PersonNameSupplementCode,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      title_dscr as NameSupplementDescription

}
```
