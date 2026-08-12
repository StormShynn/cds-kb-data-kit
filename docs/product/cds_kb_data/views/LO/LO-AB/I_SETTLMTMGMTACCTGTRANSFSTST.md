---
name: I_SETTLMTMGMTACCTGTRANSFSTST
description: "This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTST')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)"
semantic_vi: "Acctg Transfer Sts Settlmt Mgmt - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "acctg"
  - "transfer"
  - "sts"
  - "settlmt"
  - "mgmt"
  - "text"
  - "transf"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - account
  - bo:businesspartner
  - component:LO-AB
  - customer
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - payment
  - pricing
  - supplier
---
# I_SETTLMTMGMTACCTGTRANSFSTST

**This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtAcctgTransfSts` | ✓ | |  | `cast( dd07t.domvalue_l as wfbsk )` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `SettlmtMgmtAcctgTransfStsName` |  | |  | `cast( dd07t.ddtext as wlf_rfbsk_name preserving type)` | `CHAR(60)` | Description of Posting Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_SettlmtMgmtAcctgTransfSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTST')/$value)*

```abap
@EndUserText.label: 'Acctg Transfer Sts Settlmt Mgmt - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SettlmtMgmtAcctgTransfSts',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWLFSMTMGACCTST'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_SettlmtMgmtAcctgTransfStsT
  as select from dd07t

  association        to parent I_SettlmtMgmtAcctgTransfSts as _SettlmtMgmtAcctgTransfSts on $projection.SettlmtMgmtAcctgTransfSts = _SettlmtMgmtAcctgTransfSts.SettlmtMgmtAcctgTransfSts
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SettlmtMgmtAcctgTransfSts'
      @ObjectModel.text.element: ['SettlmtMgmtAcctgTransfStsName']
  key cast( dd07t.domvalue_l as wfbsk )                                  as SettlmtMgmtAcctgTransfSts,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                   as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wlf_rfbsk_name preserving type)              as SettlmtMgmtAcctgTransfStsName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                   as DomainValue,

      /* Associations */
      _SettlmtMgmtAcctgTransfSts,
      _Language
}

where
      dd07t.domname  = 'WFBSK'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
