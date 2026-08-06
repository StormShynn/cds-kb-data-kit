---
name: I_QUALITYTASKLONGTEXTTP_2
description: Qualitytasklongtexttp 2
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - transactional-processing
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QUALITYTASKLONGTEXTTP_2

**Qualitytasklongtexttp 2**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `QualityTaskInternalId` | `_QualityTaskLongText.QualityTaskInternalId` |
| key `LongTextInternalNumber` | `_QualityTaskLongText.LongTextInternalNumber` |
| key `Language` | `_QualityTaskLongText.Language` |
| `LongTextID` | `_QualityTaskLongText.LongTextID` |
| `QualityTaskLongText` | `_QualityTaskLongText.QualityTaskLongText` |
| `LongTextCreatedByUser` | `_QualityTaskLongText.LongTextCreatedByUser` |
| `LongTextCreatedAt` | `_QualityTaskLongText.LongTextCreatedAt` |
| `LongTextLastChangedByUser` | `_QualityTaskLongText.LongTextLastChangedByUser` |
| `LongTextLastChangedAt` | `_QualityTaskLongText.LongTextLastChangedAt` |
| `_QualityTask` | *Association* |
| `_Language` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Quality Task Long Text - TP'
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]
@ObjectModel: {
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
      dataClass: #TRANSACTIONAL,
      sizeCategory: #L,
      serviceQuality: #C
  },
  representativeKey: 'LongTextInternalNumber',
  dataCategory: #TEXT
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_QualityTaskLongTextTP_2 
  as projection on R_QualityTaskLongTextTP as _QualityTaskLongText
  
{
      @ObjectModel.foreignKey.association: '_QualityTask'
  key _QualityTaskLongText.QualityTaskInternalId,
  key _QualityTaskLongText.LongTextInternalNumber,
      @Semantics.language: true
  key _QualityTaskLongText.Language,
  
      _QualityTaskLongText.LongTextID,
      @Semantics.text: true
      _QualityTaskLongText.QualityTaskLongText,
      _QualityTaskLongText.LongTextCreatedByUser,
      _QualityTaskLongText.LongTextCreatedAt,
      _QualityTaskLongText.LongTextLastChangedByUser,
      _QualityTaskLongText.LongTextLastChangedAt,
      
      /* Associations */
      _QualityTask : redirected to parent I_QualityTaskTP_2,
      
      @Consumption.hidden: true
      _Language
      
}
```
