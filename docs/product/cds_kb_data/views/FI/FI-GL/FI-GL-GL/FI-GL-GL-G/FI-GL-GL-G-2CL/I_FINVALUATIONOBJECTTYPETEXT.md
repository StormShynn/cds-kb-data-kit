---
name: I_FINVALUATIONOBJECTTYPETEXT
description: "Financial Valuation Object Type - Text"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
