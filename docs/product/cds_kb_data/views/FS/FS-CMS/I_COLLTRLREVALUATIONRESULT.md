---
name: I_COLLTRLREVALUATIONRESULT
description: "Valuation Results for Collateral RE"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULT')/$value
semantic_en: "Valuation Results for Collateral RE"
semantic_vi: "Valuation Results for Collateral RE — CDS view giao diện dựa trên tcms_val_res."
keywords:
  - "valuation"
  - "results"
  - "for"
  - "collateral"
  - "colltrl"
  - "result"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREVALUATIONRESULT

**Valuation Results for Collateral RE**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREValuationResult` | ✓ | |  | `result_id` | `CHAR(10)` | Value Calculation Method |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlREValuationResultText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREVALNRESULT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,                         
    representativeKey: 'ColltrlREValuationResult'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Valuation Results for Collateral RE'
define view I_ColltrlREValuationResult
  as select from tcms_val_res
  association [0..*] to I_ColltrlREValuationResultText as _Text on $projection.ColltrlREValuationResult = _Text.ColltrlREValuationResult
{
      @ObjectModel.text.association: '_Text'
  key result_id as ColltrlREValuationResult,

      _Text
}
```
