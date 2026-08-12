---
name: I_BILLOFOPERATIONSTYPETEXT
description: "Billofoperationstypetext"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_BILLOFOPERATIONSTYPETEXT

**Billofoperationstypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BillOfOperationsType` | ✓ | |  | `cast(plnty as billofoperationstype preserving type)` |  |  |
| `BillOfOperationsTypeName` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOTYPETEXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsType'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Bill of Operations Type - Text'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsTypeText'
@Analytics.dataExtraction.enabled: true
define view I_BillOfOperationsTypeText
  as select from tca02

  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
  association [0..1] to I_BillOfOperationsType as _BillOfOperationsType on $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras                                               as Language,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
      @ObjectModel.text.element: 'BillOfOperationsTypeName'
  key cast(plnty as billofoperationstype preserving type) as BillOfOperationsType,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt                                                 as BillOfOperationsTypeName,

      // Associations
      _Language,
      _BillOfOperationsType
};
```
