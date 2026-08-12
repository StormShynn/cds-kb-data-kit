---
name: I_BOOAPPLICATIONTEXT
description: "Booapplicationtext"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_BOOAPPLICATIONTEXT

**Booapplicationtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsApplication` | ✓ | |  | `cast(t.plnaw as billofoperationsapplication preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.spras as spras preserving type)` |  |  |
| `BOOApplicationName` |  | |  | `cast(t.text40 as plnat preserving type)` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IBOOAPPLTEXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsApplication'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Bill of Operations Application - Text'
@ObjectModel.sapObjectNodeType.name: 'BillOfOpsApplicationText'
@Analytics.dataExtraction.enabled: true

define view I_BOOApplicationText
  as select from tca9t as t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'BOOApplicationName'
  key cast(t.plnaw as billofoperationsapplication preserving type) as BillOfOperationsApplication,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(t.spras  as spras preserving type)                      as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.text40 as plnat preserving type)                      as BOOApplicationName,

      // Associations
      _Language
};
```
