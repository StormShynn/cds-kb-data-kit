---
name: I_SETLDBUSVOLDOCCATEGORY
description: "This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORY')/$value
semantic_en: "This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settled Business Volume Doc Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settled"
  - "business"
  - "volume"
  - "doc"
  - "category"
  - "setld"
  - "domain"
  - "value"
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
# I_SETLDBUSVOLDOCCATEGORY

**This CDS view provides the data to answer the following business question: What are the relevant business volume document categories in Settlement Management? The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SetldBusVolDocCategory` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_setld_busvol_doc_cat )` | `CHAR(2)` | Settled Business Volume Document Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETLDBUSVOLDOCCATEGORY')/$value)*

```abap
@EndUserText.label: 'Settled Business Volume Doc Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name:   'SettledBusinessVolumeDocCat',
  dataCategory:             #VALUE_HELP,
  representativeKey:        'SetldBusVolDocCategory',
  modelingPattern :         #ANALYTICAL_DIMENSION,
  supportedCapabilities:    [#ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE,
                             #SEARCHABLE_ENTITY,
                             #SQL_DATA_SOURCE,
                             #VALUE_HELP_PROVIDER ],
  resultSet.sizeCategory:    #XS,
  usageType.serviceQuality:  #A,
  usageType.dataClass:       #META,
  usageType.sizeCategory:    #S
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SetldBusVolDocCategory
  as select from dd07l
  
  composition [0..*] of I_SetldBusVolDocCategoryText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_setld_busvol_doc_cat  ) as SetldBusVolDocCategory,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                      as DomainValue,

      /* Associations */      
      _Text
}
where
      dd07l.domname  = 'WB2_DOC_TYPE_BUSVOL'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
