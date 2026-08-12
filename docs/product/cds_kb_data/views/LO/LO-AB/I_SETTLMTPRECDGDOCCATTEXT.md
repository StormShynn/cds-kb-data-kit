---
name: I_SETTLMTPRECDGDOCCATTEXT
description: "This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document"
semantic_vi: "Settlement Preceding Document Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlement"
  - "preceding"
  - "document"
  - "cat"
  - "text"
  - "settlmt"
  - "precdg"
  - "language"
  - "name"
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
# I_SETTLMTPRECDGDOCCATTEXT

**This CDS view exposes fixed values of the field Document Category of Preceding Document. The following fixed values have been maintained: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contact 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtPrecdgDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wftyp_v )` | `CHAR(2)` | Document Category of Preceding Document |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtPrecdgDocCatName` |  | |  | `cast( dd07t.ddtext as wftyp_v_txt preserving type )` | `CHAR(60)` | Description for Document Category of Preceding Document |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtPrecdgDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTPRECDGDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlement Preceding Document Cat - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtPrecdgDocCat',
  modelingPattern : #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities : [#LANGUAGE_DEPENDENT_TEXT,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY],
  usageType: {
    dataClass:      #META,
    serviceQuality: #A,
    sizeCategory:   #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API 
}
@Search.searchable: true
@Analytics: {
  internalName: #LOCAL,
  technicalName: 'IWLFSMTSPRDDCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtPrecdgDocCatText
  as select from dd07t

  association        to parent I_SettlmtPrecdgDocCat as _SettlmtPrecdgDocCat on $projection.SettlmtPrecdgDocCat = _SettlmtPrecdgDocCat.SettlmtPrecdgDocCat
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtPrecdgDocCat'
  key cast( dd07t.domvalue_l as wftyp_v )                                  as SettlmtPrecdgDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                     as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wftyp_v_txt preserving type )                  as SettlmtPrecdgDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                     as DomainValue,

      /* Associations */
      _SettlmtPrecdgDocCat,
      _Language
}

where
      dd07t.domname  = 'WFTYP_V'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
  and dd07t.domvalue_l != '18'    
  and dd07t.domvalue_l != '19'    
  and dd07t.domvalue_l != '21'    
  and dd07t.domvalue_l != '31'    
  and dd07t.domvalue_l != '60'    
  and dd07t.domvalue_l != '61'    
  and dd07t.domvalue_l != '71'    
  and dd07t.domvalue_l != '72' 
  and dd07t.domvalue_l != '82'
```
