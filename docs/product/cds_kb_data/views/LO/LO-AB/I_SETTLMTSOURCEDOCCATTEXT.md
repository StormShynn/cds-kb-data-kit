---
name: I_SETTLMTSOURCEDOCCATTEXT
description: "This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document"
semantic_vi: "Settlmt Source Doc Category - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "settlmt"
  - "source"
  - "doc"
  - "category"
  - "text"
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
  - bo:salesorder
---
# I_SETTLMTSOURCEDOCCATTEXT

**This CDS view exposes fixed values of the field Document Category of Source Document. The following fixed values have been maintained: 01 External Document 02 External Delivery Note 03 External Sales Order 04 External Purchase Order 05 External Invoice 10 Trading Contract 11 Settlement Management Document 12 Sales Order/Contract 13 Delivery 14 Billing Document 15 Inbound Delivery 16 Goods Receipt 17 Purchase Order 18 Shipment Document 20 Pro Forma Customer Sales Document 30 Incoming Invoice 31 Service Entry Sheet 40 Enterprise SOA Purchase Order 41 Enterprise SOA Sales Order 42 Enterprise SOA Inbound Delivery 43 Enterprise SOA Outbound Delivery 44 Enterprise SOA Original Invoice 45 Enterprise SOA Customer Invoice 46 Enterprise SOA Incoming Invoice 47 eSOA Basis Customer Invoice (Doc. in a Collective Invoice) 48 Enterprise SOA Original Credit Memo 49 Enterprise SOA Customer Credit Memo 50 Enterprise SOA Credit Memo 51 eSOA Basis Cust. Credit Memo (Doc. in a Collective Invoice) 60 Nomination 71 Claim Request Document 72 Claim Resolution Document 99 External Document**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtSourceDocCat` | ✓ | |  | `cast( dd07t.domvalue_l as wftypv )` | `CHAR(2)` | Document Category of Source Document |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtSourceDocCatName` |  | |  | `cast( dd07t.ddtext as wlf_wftypv_txt preserving type )` | `CHAR(60)` | Description of Source Document Category |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtSourceDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTSOURCEDOCCATTEXT')/$value)*

```abap
@EndUserText.label: 'Settlmt Source Doc Category - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtSourceDocCat',
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
  technicalName: 'IWLFSMTSRCDCATT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtSourceDocCatText
  as select from dd07t

  association        to parent I_SettlmtSourceDocCat as _SettlmtSourceDocCat on $projection.SettlmtSourceDocCat = _SettlmtSourceDocCat.SettlmtSourceDocCat
  association [0..1] to I_Language                   as _Language            on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_SettlmtSourceDocCat'
      @ObjectModel.text.element: ['SettlmtSourceDocCatName']
  key cast( dd07t.domvalue_l as wftypv )                                  as SettlmtSourceDocCat,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_wftypv_txt preserving type )              as SettlmtSourceDocCatName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                    as DomainValue,

      /* Associations */
      _SettlmtSourceDocCat,
      _Language
}

where
      dd07t.domname  = 'WFTYPV'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
  and dd07t.domvalue_l != '18'  
  and dd07t.domvalue_l != '31'  
  and dd07t.domvalue_l != '40'  
  and dd07t.domvalue_l != '41'  
  and dd07t.domvalue_l != '42'  
  and dd07t.domvalue_l != '43'  
  and dd07t.domvalue_l != '44'  
  and dd07t.domvalue_l != '45'  
  and dd07t.domvalue_l != '46'  
  and dd07t.domvalue_l != '47'  
  and dd07t.domvalue_l != '48'  
  and dd07t.domvalue_l != '49'  
  and dd07t.domvalue_l != '50'  
  and dd07t.domvalue_l != '51'  
  and dd07t.domvalue_l != '60'  
  and dd07t.domvalue_l != '71'  
  and dd07t.domvalue_l != '72'
```
