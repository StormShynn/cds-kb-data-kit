---
name: I_SETTLMTREFDOCCAT
description: "This CDS view is used to select the reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value
semantic_en: "This CDS view is used to select the reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document"
semantic_vi: "Reference Document Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "reference"
  - "document"
  - "category"
  - "settlmt"
  - "domain"
  - "value"
tags:
  - LO
  - billing
  - bo:billingdocument
  - claim
  - component:LO-AB
  - contract
  - customer
  - delivery
  - document
  - goods-receipt
  - interface-view
  - invoice
  - LO-AB
  - lob:logistics general
  - order
  - purchase-order
  - sales-order
---
# I_SETTLMTREFDOCCAT

**This CDS view is used to select the reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtRefDocCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_ref_type_1 )` | `CHAR(2)` | Reference Document Category in Settlement Management |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTREFDOCCAT')/$value)*

```abap
@EndUserText.label: 'Reference Document Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtRefDocumentCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtRefDocCat',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#VALUE_HELP_PROVIDER,
                          #SEARCHABLE_ENTITY,
                          #ANALYTICAL_DIMENSION,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE ],
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
  technicalName: 'IWLFREFDOCCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_SettlmtRefDocCat
  as select from dd07l

  composition [0..*] of I_SettlmtRefDocCatText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_ref_type_1 ) as SettlmtRefDocCat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                           as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname    =  'WLF_REF_TYPE'
  and dd07l.as4local   =  'A'
  and dd07l.as4vers    =  '0000'
  and dd07l.domvalue_l != '18'
  and dd07l.domvalue_l != '19'
  and dd07l.domvalue_l != '21'
  and dd07l.domvalue_l != '23'
  and dd07l.domvalue_l != '25'
  and dd07l.domvalue_l != '31'
  and dd07l.domvalue_l != '60'
  and dd07l.domvalue_l != '61'
  and dd07l.domvalue_l != '71'
  and dd07l.domvalue_l != '72'
  and dd07l.domvalue_l != '82'
```
