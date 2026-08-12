---
name: I_PROCESSMESSAGECATEGORY
description: "Process Message Category"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORY')/$value
semantic_en: "Process Message Category"
semantic_vi: "Process Message Category — CDS view giao diện dựa trên tc50."
keywords:
  - "process"
  - "message"
  - "category"
  - "plant"
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
---
# I_PROCESSMESSAGECATEGORY

**Process Message Category**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `ProcessMessageCategory` | ✓ | |  | `cast(tc50.costr as vdm_costr_pm preserving type)` | `CHAR(8)` | Process Message Category |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGECATEGORY')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPROCMESSCAT'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProcessMessageCategory'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Process Message Category'

define root view entity I_ProcessMessageCategory
  as select from tc50 as tc50

  association [1..1] to I_Plant                      as _Plant on $projection.Plant = _Plant.Plant
  composition [0..*] of I_ProcessMessageCategoryText as _Text
  {
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
  key tc50.werks                                       as Plant,
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(tc50.costr as vdm_costr_pm preserving type) as ProcessMessageCategory,
      
      // Associations
      _Plant,
      _Text
  }
  where tc50.cstyp = 'MS'; //process message categories only
```
