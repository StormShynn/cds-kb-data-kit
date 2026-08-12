---
name: I_SETLDBUSVOLDOCCATEGORYTEXT
description: "This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORYTEXT')/$value
semantic_en: "This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settled Business Volume Doc Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settled"
  - "business"
  - "volume"
  - "doc"
  - "cat"
  - "text"
  - "setld"
  - "category"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-GT-CHB
  - customer
  - document
  - goods-receipt
  - interface-view
  - invoice
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - order
  - purchase-order
  - sales-order
  - supplier
---
# I_SETLDBUSVOLDOCCATEGORYTEXT

**This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SetldBusVolDocCategory` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_setld_busvol_doc_cat )` | `CHAR(2)` | Settled Business Volume Document Type |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SetldBusVolDocCategoryName` |  | |  | `cast( dd07t.ddtext as wb2_setld_busvol_doc_cat_text preserving type )` | `CHAR(60)` | Settled Business Volume Document Type Text |
| `_Language` | | ✓ | | | | |
| `_SetldBusVolDocCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORYTEXT')/$value)*

```abap
@EndUserText.label: 'Settled Business Volume Doc Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey:        'SetldBusVolDocCategory',
  modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities:  [#CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #LANGUAGE_DEPENDENT_TEXT,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE ],
  usageType.serviceQuality: #A,
  usageType.dataClass:      #META,
  usageType.sizeCategory:   #S
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SetldBusVolDocCategoryText
  as select from dd07t
  association        to parent I_SetldBusVolDocCategory as _SetldBusVolDocCategory on $projection.SetldBusVolDocCategory = _SetldBusVolDocCategory.SetldBusVolDocCategory
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SetldBusVolDocCategory'
      @ObjectModel.text.element: ['SetldBusVolDocCategoryName']
  key cast( dd07t.domvalue_l as wb2_setld_busvol_doc_cat )                  as SetldBusVolDocCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_setld_busvol_doc_cat_text preserving type ) as SetldBusVolDocCategoryName,

      /* Associations */
      _SetldBusVolDocCategory,
      _Language
}
where
      dd07t.domname  = 'WB2_DOC_TYPE_BUSVOL'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
