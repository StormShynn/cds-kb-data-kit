---
name: I_SAPGUIICON
description: Sapguiicon
app_component: BC-ABA-SC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-ABA
  - BC-ABA-SC
  - interface-view
  - component:BC-ABA-SC
  - lob:Basis Components
---
# I_SAPGUIICON

**Sapguiicon**

| Property | Value |
|---|---|
| App Component | `BC-ABA-SC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SAPGUIIconASCIICode` | ✓ | |  | `id` |
| `SAPGUIIcon` |  | |  | `name` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'SAP GUI Icon'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'SAPGUIIconASCIICode'
@ObjectModel.sapObjectNodeType.name: 'SAPGraphicalUserInterfaceIcon'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType:{dataClass: #META, serviceQuality: #A, sizeCategory: #M }
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define root view entity I_SAPGUIIcon
  as select from icon
  composition [0..*] of I_SAPGUIIconText as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key id   as SAPGUIIconASCIICode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      name as SAPGUIIcon,
      _Text
}
```
