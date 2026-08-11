---
name: I_FINVALUATIONOBJECTTYPETEXT
description: "Financial Valuation Object Type - Text"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPETEXT')/$value
semantic_en: "Financial Valuation Object Type - Text"
semantic_vi: "Financial Valuation Object Type - Text — CDS view giao diện dựa trên finsc_val_type_t."
keywords:
  - "financial"
  - "valuation"
  - "object"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - FI
  - bo:companycode
  - component:FI-GL-GL-G-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - interface-view
  - lob:finance
---
# I_FINVALUATIONOBJECTTYPETEXT

**Financial Valuation Object Type - Text**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialValuationObjectType` | ✓ | |  | `valobj_type` | `CHAR(4)` | Type of the Financial Valuation Object |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `FinValuationObjectTypeName` |  | |  | `txt50` | `CHAR(50)` | Financial Valuation Object Type Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Financial Valuation Object Type - Text'

@AbapCatalog: {
    sqlViewName: 'IFINVALOBJTYPET',
    preserveKey: true,
    buffering:  {
        status: #ACTIVE,
        type: #FULL,
        numberOfKeyFields: 1
        }
    }

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true }

@ObjectModel:   {
    representativeKey: 'FinancialValuationObjectType',
    dataCategory: #TEXT,
    usageType:  {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
        },
        supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE , #LANGUAGE_DEPENDENT_TEXT ]
    }

@Search.searchable: true

define view I_FinValuationObjectTypeText
  as select from finsc_val_type_t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Search.defaultSearchElement: true
  key valobj_type as FinancialValuationObjectType,

      @Semantics.language
  key langu       as Language,
      @Semantics.text
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
      @Search.fuzzinessThreshold: 0.8
      txt50       as FinValuationObjectTypeName,

      _Language
}
```
