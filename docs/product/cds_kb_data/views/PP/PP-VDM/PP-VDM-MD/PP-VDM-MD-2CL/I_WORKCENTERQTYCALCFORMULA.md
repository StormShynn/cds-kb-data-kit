---
name: I_WORKCENTERQTYCALCFORMULA
description: "Work Center Quantity Calculation Formula"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULA')/$value
semantic_en: "Work Center Quantity Calculation Formula"
semantic_vi: "Work Center Quantity Calculation Formula — CDS view giao diện dựa trên tc25."
keywords:
  - "work"
  - "center"
  - "quantity"
  - "calculation"
  - "formula"
  - "allowed"
  - "costing"
  - "allwd"
  - "rqmt"
  - "plng"
  - "prodn"
  - "rsce"
  - "tool"
  - "scheduling"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_WORKCENTERQTYCALCFORMULA

**Work Center Quantity Calculation Formula**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterFormula` | ✓ | |  | `ident` | `CHAR(6)` | Formula Key |
| `FormulaIsAllowedForCosting` |  | |  | `vkalk` | `CHAR(1)` | Indicates it is allowed for costing |
| `FormulaIsAllwdForCapRqmtPlng` |  | |  | `vkapa` | `CHAR(1)` | Indicator: work center is allowed for capacity requirements |
| `FormulaIsAllwdForProdnRsceTool` |  | |  | `vkapf` | `CHAR(1)` | Indicator: PRT allowed for requirements |
| `FormulaIsAllowedForScheduling` |  | |  | `vterm` | `CHAR(1)` | Indicator: Allowed for scheduling |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WorkCenterQtyCalcFormulaText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERQTYCALCFORMULA')/$value)*

```abap
//@AbapCatalog.sqlViewName: 'IWKCQTYFMLA'
//@AbapCatalog.buffering: { status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001 }
//@AbapCatalog.compiler.compareFilter: true 
//@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
//@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkCenterFormula'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Quantity Calculation Formula'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'WorkCenterFormula'

//define view I_WorkCenterQtyCalcFormula
define view entity I_WorkCenterQtyCalcFormula
  as select from tc25
    association [0..*] to I_WorkCenterQtyCalcFormulaText as _Text on $projection.WorkCenterFormula = _Text.WorkCenterFormula
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key ident as WorkCenterFormula,

      -- Usage indicators
      vkalk as FormulaIsAllowedForCosting,
      vkapa as FormulaIsAllwdForCapRqmtPlng,
      vkapf as FormulaIsAllwdForProdnRsceTool,
      vterm as FormulaIsAllowedForScheduling,

      -- Associations
      _Text
};
```
