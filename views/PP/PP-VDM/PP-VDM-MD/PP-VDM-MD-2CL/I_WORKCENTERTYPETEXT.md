---
name: I_WORKCENTERTYPETEXT
description: Work CenterTYPETEXT
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
# I_WORKCENTERTYPETEXT

**Work CenterTYPETEXT**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterTypeCode` | ✓ | |  | `ProductionResourceType` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `WorkCenterTypeName` |  | |  | `ProductionResourceTypeName` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWRKCNTRTYPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkCenterTypeCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Type - Text'
@ObjectModel.sapObjectNodeType.name: 'WorkCenterTypeText'
@Analytics.dataExtraction.enabled: true

define view I_WorkCenterTypeText
  as select from I_ProductionResourceTypeText as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.text.element: 'WorkCenterTypeName'
    key txt.ProductionResourceType as WorkCenterTypeCode,
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key txt.Language as Language,
    @Semantics.text: true
    txt.ProductionResourceTypeName as WorkCenterTypeName,
    
    // Associations
    _Language
}
  where txt.ProductionResourceType = 'A';
```
