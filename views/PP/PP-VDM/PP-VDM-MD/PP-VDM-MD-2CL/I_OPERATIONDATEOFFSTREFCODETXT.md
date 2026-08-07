---
name: I_OPERATIONDATEOFFSTREFCODETXT
description: "Operationdateoffstrefcodetxt"
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
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_OPERATIONDATEOFFSTREFCODETXT

**Operationdateoffstrefcodetxt**

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
| `OperationDateOffsetRefCode` | ✓ | |  | `bzoff` |  |  |
| `OperationDateOffsetRefCodeName` |  | |  | `bztxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPDATREFCDTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationDateOffsetRefCode'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation Date Offset Reference Code - Text'
@ObjectModel.sapObjectNodeType.name: 'BOOOpDateOffsetRefCodeText'
@Analytics.dataExtraction.enabled: true

define view I_OperationDateOffstRefCodeTxt
  as select from tca55 as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras        as Language,
      @ObjectModel.text.element: 'OperationDateOffsetRefCodeName'
  key txt.bzoff        as OperationDateOffsetRefCode,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.bztxt        as OperationDateOffsetRefCodeName,

      // Associations
      _Language
};
```
