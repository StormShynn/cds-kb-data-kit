---
name: I_FINVALUATIONOBJECTTYPE
description: "Financial Valuation Object Type"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPE')/$value
semantic_en: "Financial Valuation Object Type"
semantic_vi: "Financial Valuation Object Type — CDS view giao diện dựa trên finsc_val_type."
keywords:
  - "financial"
  - "valuation"
  - "object"
  - "type"
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
# I_FINVALUATIONOBJECTTYPE

**Financial Valuation Object Type**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialValuationObjectType` | ✓ | |  | `valobj_type` | `CHAR(4)` | Type of the Financial Valuation Object |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinValuationObjectTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINVALUATIONOBJECTTYPE')/$value)*

```abap
@EndUserText.label: 'Financial Valuation Object Type'

@AbapCatalog: {
    sqlViewName: 'IFINVALOBJTYPE',
    preserveKey: true,
    buffering: {
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
    dataExtraction.enabled: true 
    }

@ObjectModel:   {
    representativeKey: 'FinancialValuationObjectType',
    usageType:  {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
        },
        supportedCapabilities: [ #EXTRACTION_DATA_SOURCE , #SQL_DATA_SOURCE ]       
    }

@Search.searchable: true

define view I_FinValuationObjectType
  as select from finsc_val_type
  association [0..*] to I_FinValuationObjectTypeText as _Text on $projection.FinancialValuationObjectType = _Text.FinancialValuationObjectType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
      @Search.fuzzinessThreshold: 0.8
  key valobj_type as FinancialValuationObjectType,
 
      _Text
}
```
