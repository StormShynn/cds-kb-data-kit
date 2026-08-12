---
name: I_OPERATIONSTANDARDTEXTTEXT
description: "Operationstandardtexttext"
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
# I_OPERATIONSTANDARDTEXTTEXT

**Operationstandardtexttext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationStandardTextCode` | ✓ | |  | `cast(txt.vlsch as pph_ktsch preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OperationStandardTextCodeName` |  | |  | `txt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPSTDTXTTEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationStandardTextCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Standard Text for Operation - Text'
  @ObjectModel.sapObjectNodeType.name: 'BOOOperationsStandardTextText'
  @Analytics.dataExtraction.enabled: true


define view I_OperationStandardTextText
  as select from t435t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'OperationStandardTextCodeName'
  key cast(txt.vlsch as pph_ktsch preserving type) as OperationStandardTextCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras      as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.txt        as OperationStandardTextCodeName,

      // Associations
      _Language
};
```
