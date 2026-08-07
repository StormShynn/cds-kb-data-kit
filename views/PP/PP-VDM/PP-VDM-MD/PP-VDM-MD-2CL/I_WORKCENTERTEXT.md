---
name: I_WORKCENTERTEXT
description: Work CenterTEXT
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - work-center
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERTEXT

**Work CenterTEXT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WorkCenterTypeCode` | ✓ | |  | `ProductionResourceType` |
| `WorkCenterInternalID` | ✓ | |  | `ProductionResourceInternalID` |
| `Language` | ✓ | |  | `cast(text.Language as spras preserving type)` |
| `WorkCenterText` |  | |  | `cast(text.ProductionResourceText as workcentertext preserving type)` |
| `Plant` |  | | `_WorkCenter` | `Plant` |
| `WorkCenterCategoryCode` |  | | `_WorkCenter` | `WorkCenterCategoryCode` |
| `_WorkCenterType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkCenter` | `I_WorkCenter` | [1..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWORKCENTERTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkCenterInternalID'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #MASTER}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'WorkCenterText'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_WorkCenterText
  as select from I_ProductionResourceText as text

  association [1..1] to I_WorkCenter     as _WorkCenter     on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                            and $projection.WorkCenterTypeCode   = _WorkCenter.WorkCenterTypeCode
  association [1..1] to I_WorkCenterType as _WorkCenterType on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [1..1] to I_Language       as _Language       on  $projection.Language = _Language.Language
{
      // Key
      @ObjectModel.foreignKey.association: '_WorkCenterType'
  key text.ProductionResourceType                  as WorkCenterTypeCode,
      @ObjectModel.text.element: 'WorkCenterText'
  key text.ProductionResourceInternalID            as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(text.Language as spras preserving type) as Language,

      // Text
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(text.ProductionResourceText as workcentertext preserving type) as WorkCenterText,

      // for DCLS
      _WorkCenter.Plant,
      _WorkCenter.WorkCenterCategoryCode,

      // Associations
      _WorkCenterType, 
      _Language
}
  where ProductionResourceType = 'A'; // only Work Center Texts
```
