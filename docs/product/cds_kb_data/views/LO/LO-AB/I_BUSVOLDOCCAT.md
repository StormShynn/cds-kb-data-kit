---
name: I_BUSVOLDOCCAT
description: "This CDS view provides the domain fixed values for the business volume document type. The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCAT')/$value
semantic_en: "This CDS view provides the domain fixed values for the business volume document type. The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement"
semantic_vi: "Business Volume Document Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "business"
  - "volume"
  - "document"
  - "category"
  - "domain"
  - "value"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - customer
  - document
  - goods-receipt
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - order
  - purchase-order
  - sales-order
  - supplier
---
# I_BUSVOLDOCCAT

**This CDS view provides the domain fixed values for the business volume document type. The following values are maintained: 01 Settlement Management Document 02 SD Billing Document 03 Goods Receipt 04 Invoice Verification 05 Purchase Order 06 Sales Order 07 Universal Journal Entry 08 Convergent Invoicing 10 Settlement Document 11 Supplier Billing Document 12 Expense Settlement 13 Customer Settlement 14 Supplier Settlement**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusVolDocCat` | ✓ | |  | `cast( dd07l.domvalue_l as wb2_doc_type_busvol )` | `CHAR(2)` | Document Type of Business Volume Source Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSVOLDOCCAT')/$value)*

```abap
@EndUserText.label: 'Business Volume Document Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'BusVolDocCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION, 
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #SEARCHABLE_ENTITY, 
                           #VALUE_HELP_PROVIDER],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  },
  resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFDOCCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_BusVolDocCat
  as select from dd07l
  
  composition [0..*] of I_BusVolDocCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wb2_doc_type_busvol )                                  as BusVolDocCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                 as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WB2_DOC_TYPE_BUSVOL'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
