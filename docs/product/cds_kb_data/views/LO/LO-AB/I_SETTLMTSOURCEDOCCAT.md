---
name: I_SETTLMTSOURCEDOCCAT
description: "This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCAT')/$value
semantic_en: "This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document"
semantic_vi: "Settlmt Source Doc Category — CDS view cơ bản dựa trên dd07l."
keywords:
  - "settlmt"
  - "source"
  - "doc"
  - "category"
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
  - bo:salesorder
---
# I_SETTLMTSOURCEDOCCAT

**This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtSourceDocCat` | ✓ | |  | `cast( dd07l.domvalue_l as wftypv )` | `CHAR(2)` | Document Category of Source Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCAT')/$value)*

```abap
@EndUserText.label: 'Settlmt Source Doc Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlmtSourceDocumentCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtSourceDocCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET, 
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
  technicalName: 'IWLFSMTSRCDCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtSourceDocCat
  as select from dd07l
  
  composition [0..*] of I_SettlmtSourceDocCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wftypv )                        as SettlmtSourceDocCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                           as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WFTYPV'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
  and dd07l.domvalue_l != '18'  
  and dd07l.domvalue_l != '31'  
  and dd07l.domvalue_l != '40'  
  and dd07l.domvalue_l != '41'  
  and dd07l.domvalue_l != '42'  
  and dd07l.domvalue_l != '43'  
  and dd07l.domvalue_l != '44'  
  and dd07l.domvalue_l != '45'  
  and dd07l.domvalue_l != '46'  
  and dd07l.domvalue_l != '47'  
  and dd07l.domvalue_l != '48'  
  and dd07l.domvalue_l != '49'  
  and dd07l.domvalue_l != '50'  
  and dd07l.domvalue_l != '51'  
  and dd07l.domvalue_l != '60'  
  and dd07l.domvalue_l != '71'  
  and dd07l.domvalue_l != '72'
```
