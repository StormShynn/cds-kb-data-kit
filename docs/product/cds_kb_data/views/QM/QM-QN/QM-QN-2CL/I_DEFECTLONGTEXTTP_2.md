---
name: I_DEFECTLONGTEXTTP_2
description: "Defectlongtexttp 2"
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
# I_DEFECTLONGTEXTTP_2

**Defectlongtexttp 2**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectInternalID` | ✓ | | `_DefectLongText` | `DefectInternalID` |  |  |
| `LongTextInternalNumber` | ✓ | | `_DefectLongText` | `LongTextInternalNumber` |  |  |
| `Language` | ✓ | | `_DefectLongText` | `Language` |  |  |
| `LongTextID` |  | | `_DefectLongText` | `LongTextID` |  |  |
| `DefectLongText` |  | | `_DefectLongText` | `DefectLongText` |  |  |
| `LongTextCreatedByUser` |  | | `_DefectLongText` | `LongTextCreatedByUser` |  |  |
| `LongTextCreatedAt` |  | | `_DefectLongText` | `LongTextCreatedAt` |  |  |
| `LongTextLastChangedByUser` |  | | `_DefectLongText` | `LongTextLastChangedByUser` |  |  |
| `LongTextLastChangedAt` |  | | `_DefectLongText` | `LongTextLastChangedAt` |  |  |
| `MimeType` |  | | `_DefectLongText` | `MimeType` |  |  |
| `_Defect` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Defect Long Text - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]
@ObjectModel: {
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
      dataClass: #TRANSACTIONAL,
      sizeCategory: #L,
      serviceQuality: #A
  },
  representativeKey: 'LongTextInternalNumber',
  dataCategory: #TEXT
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_DefectLongTextTP_2 
  as projection on R_DefectLongTextTP as _DefectLongText

{
      @ObjectModel.foreignKey.association: '_Defect'
  key _DefectLongText.DefectInternalID, 
  key _DefectLongText.LongTextInternalNumber,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _DefectLongText.Language,
  
      _DefectLongText.LongTextID,
      @Semantics.text: true
      _DefectLongText.DefectLongText,
      _DefectLongText.LongTextCreatedByUser,
      _DefectLongText.LongTextCreatedAt,
      _DefectLongText.LongTextLastChangedByUser,
      _DefectLongText.LongTextLastChangedAt,
      _DefectLongText.MimeType,
      
     /* Associations */
     _Defect : redirected to parent I_DefectTP_2,
     
     @Consumption.hidden: true
     _Language
     
}
```
