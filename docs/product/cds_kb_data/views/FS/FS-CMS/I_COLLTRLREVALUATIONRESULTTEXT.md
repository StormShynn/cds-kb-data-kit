---
name: I_COLLTRLREVALUATIONRESULTTEXT
description: "Valuation Results for Colltrl RE - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULTTEXT')/$value
semantic_en: "Valuation Results for Colltrl RE - Text"
semantic_vi: "Valuation Results for Colltrl RE - Text — CDS view giao diện dựa trên tcms_val_res_t."
keywords:
  - "valuation"
  - "results"
  - "for"
  - "colltrl"
  - "text"
  - "result"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREVALUATIONRESULTTEXT

**Valuation Results for Colltrl RE - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREValuationResult` | ✓ | |  | `result_id` | `CHAR(10)` | Value Calculation Method |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which description is needed |
| `ColltrlREValuationResultText` |  | |  | `description` | `CHAR(30)` | Description of valuation result |
| `_Language` | | ✓ | | | | |
| `_ColltrlREValuationResult` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ColltrlREValuationResult` | `I_ColltrlREValuationResult` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREVALUATIONRESULTTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICREVALNRESLTTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,                          
    representativeKey: 'ColltrlREValuationResult'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Valuation Results for Colltrl RE - Text'
define view I_ColltrlREValuationResultText
  as select from tcms_val_res_t
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
  association [0..1] to I_ColltrlREValuationResult as _ColltrlREValuationResult on $projection.ColltrlREValuationResult = _ColltrlREValuationResult.ColltrlREValuationResult
{
      @ObjectModel.foreignKey.association: '_ColltrlREValuationResult'
  key result_id   as ColltrlREValuationResult,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language    as Language,
      @Semantics.text: true
      description as ColltrlREValuationResultText,

      _Language,
      _ColltrlREValuationResult
}
```
