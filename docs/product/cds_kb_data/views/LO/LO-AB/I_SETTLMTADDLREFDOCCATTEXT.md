---
name: I_SETTLMTADDLREFDOCCATTEXT
description: "This CDS view is used to select the additional reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE_2 with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTADDLREFDOCCATTEXT')/$value
semantic_en: "This CDS view is used to select the additional reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE_2 with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document"
semantic_vi: "Additional Reference Document Cat - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "additional"
  - "reference"
  - "document"
  - "cat"
  - "text"
  - "settlmt"
  - "addl"
  - "language"
  - "domain"
  - "value"
  - "name"
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
# I_SETTLMTADDLREFDOCCATTEXT

**This CDS view is used to select the additional reference document category. This CDS view provides the parameters for the domain WLF_REF_TYPE_2 with the following values: 01 Invoice 02 Invoice Reversal 03 Credit Memo 04 Credit Memo Reversal 05 Settlement Document List 06 Credit Memo List 07 Settlement Management Document with Journal Entry 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order/Contract 18 Shipment Document 19 Internal Order (CO) 20 Pro Forma Customer Sales Document 21 CRM Billing Document 22 Provider Contract 23 Convergent Invoicing 30 Incoming Invoice 31 Service Entry Sheet 60 Nomination 61 Nomination Item 70 Condition Contract 71 Claim Request Document 72 Claim Resolution Document 80 Freight Settlement 81 Freight Order 82 Internal Settlement Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTADDLREFDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtAddlRefDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wlf_ref_type_2n )` | `CHAR(2)` | Additional Reference Document Category |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `SettlmtAddlRefDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_ref_type_2_text preserving type )` | `CHAR(60)` | Text of Additional Reference Document Category |
| `_Language` | | ✓ | | | | |
| `_SettlmtAddlRefDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTADDLREFDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTADDLREFDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Additional Reference Document Cat - Text' 
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtAddlRefDocCat',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #SEARCHABLE_ENTITY,
                          #CDS_MODELING_DATA_SOURCE],
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
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFADREFDOCCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_SettlmtAddlRefDocCatText
  as select from dd07t

  association        to parent I_SettlmtAddlRefDocCat as _SettlmtAddlRefDocCat on $projection.SettlmtAddlRefDocCat = _SettlmtAddlRefDocCat.SettlmtAddlRefDocCat
  association [0..1] to I_Language                    as _Language             on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtAddlRefDocCat'
      @ObjectModel.text.element: ['SettlmtAddlRefDocCatName']
  key cast( dd07t.domvalue_l as wlf_ref_type_2n )                                  as SettlmtAddlRefDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                           as Language,

      @Consumption.hidden: true
      dd07t.domvalue_l                                                            as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_ref_type_2_text preserving type )                 as SettlmtAddlRefDocCatName,

      /* Associations */
      _SettlmtAddlRefDocCat,
      _Language
}

where
      dd07t.domname    =  'WLF_REF_TYPE_2'
  and dd07t.as4local   =  'A'
  and dd07t.as4vers    =  '0000'
  and dd07t.domvalue_l != '18'
  and dd07t.domvalue_l != '19'
  and dd07t.domvalue_l != '21'
  and dd07t.domvalue_l != '23'
  and dd07t.domvalue_l != '25'
  and dd07t.domvalue_l != '31'
  and dd07t.domvalue_l != '60'
  and dd07t.domvalue_l != '61'
  and dd07t.domvalue_l != '71'
  and dd07t.domvalue_l != '72'
  and dd07t.domvalue_l != '82'
```
