---
name: I_FAMILYNAMEPREFIX
description: Familynameprefix
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
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_FAMILYNAMEPREFIX

**Familynameprefix**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FamilyNamePrefix` | ✓ | |  | `prefix_key` |
| `FamilyNamePrefixName` |  | |  | `prefix_txt` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Family Name Prefix'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'FamilyNamePrefix'
@Analytics.technicalName: 'IFAMNAMEPREFIX'
@ObjectModel.sapObjectNodeType.name: 'FamilyNamePrefix'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_FamilyNamePrefix
  as select from tsad4
{
      @ObjectModel.text.element: [ 'FamilyNamePrefixName']
  key prefix_key as FamilyNamePrefix,
      @Semantics.text: true
      prefix_txt as FamilyNamePrefixName
}
```
