---
name: I_SETTLMTPRECDGDOCCAT
description: "This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document"
semantic_vi: "Settlement Preceding Document Cat — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlement"
  - "preceding"
  - "document"
  - "cat"
  - "settlmt"
  - "precdg"
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
# I_SETTLMTPRECDGDOCCAT

**This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtPrecdgDocCat` | ✓ | |  | `cast( dd07l.domvalue_l as wftyp_v )` | `CHAR(2)` | Document Category of Preceding Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCAT')/$value)*

```abap
@EndUserText.label: 'Settlement Preceding Document Cat'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtPrecdgDocumentCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtPrecdgDocCat',
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
  technicalName: 'IWLFSMTSPRDDCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtPrecdgDocCat
  as select from dd07l
  
  composition [0..*] of I_SettlmtPrecdgDocCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wftyp_v )                         as SettlmtPrecdgDocCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                            as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WFTYP_V'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
  and dd07l.domvalue_l != '18'    
  and dd07l.domvalue_l != '19'    
  and dd07l.domvalue_l != '21'    
  and dd07l.domvalue_l != '31'    
  and dd07l.domvalue_l != '60'    
  and dd07l.domvalue_l != '61'    
  and dd07l.domvalue_l != '71'    
  and dd07l.domvalue_l != '72' 
  and dd07l.domvalue_l != '82'
```
