---
name: I_WORKCENTERQTYCALCFORMULATEXT
description: "Work Center Quantity Calculation Formula - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULATEXT')/$value
semantic_en: "Work Center Quantity Calculation Formula - Text"
semantic_vi: "Work Center Quantity Calc Formula - Text — CDS view giao diện dựa trên tc25t."
keywords:
  - "work"
  - "center"
  - "quantity"
  - "calc"
  - "formula"
  - "text"
  - "language"
  - "name"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_WORKCENTERQTYCALCFORMULATEXT

**Work Center Quantity Calculation Formula - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULATEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterFormula` | ✓ | |  | `ident` | `CHAR(6)` | Formula Key |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `WorkCenterFormulaName` |  | |  | `txt` | `CHAR(20)` | Short Text for the Formula |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULATEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULATEXT')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IWKCQTYFMLATXT'
//@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
//@AbapCatalog.compiler.compareFilter: true 
//@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkCenterFormula'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Quantity Calc Formula - Text'
@Analytics.technicalName: 'IWKCQTYFMLATXT'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'WorkCenterFormulaText'

//define view I_WorkCenterQtyCalcFormulaText
define view entity I_WorkCenterQtyCalcFormulaText
  as select from tc25t as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
//      @ObjectModel.text.element: 'WorkCenterFormulaName'
  key txt.ident as WorkCenterFormula,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.txt   as WorkCenterFormulaName,

      // Associations
      _Language
};
```
