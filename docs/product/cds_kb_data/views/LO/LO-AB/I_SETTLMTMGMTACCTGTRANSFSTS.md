---
name: I_SETTLMTMGMTACCTGTRANSFSTS
description: "This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTS')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)"
semantic_vi: "Acctg Transfer Sts in Settlmt Mgmt — CDS view cơ bản dựa trên dd07l."
keywords:
  - "acctg"
  - "transfer"
  - "sts"
  - "settlmt"
  - "mgmt"
  - "transf"
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
# I_SETTLMTMGMTACCTGTRANSFSTS

**This CDS view exposes fixed values of the field Settlement Management Accounting Transfer Status. The following fixed values have been maintained: A Document blocked for forwarding to Accounting B Accounting document not created (account determination error) C Accounting document has been created D Document is not relevant for accounting E Document has been reversed and is therefore completed F Accounting document not created (pricing error) G Posted using supplier settlement list (parking) H Credit-side using supplier settlement list, debit-side completed I Accounting document not generated (document contains balance) J Accounting document not required K Posted via supplier settlement list L Document completed (accounting documents created) M Inconsistent terms of payment N Document in customer settlement list (accounting document not created) O Document in supplier settlement list (accounting document not created) P Document is incomplete Q Supplier settlement list completed (follow-on documents not required) R Document completed (not relevant for follow-on documents)**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtMgmtAcctgTransfSts` | ✓ | |  | `cast ( dd07l.domvalue_l as wfbsk )` | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SETTLMTMGMTACCTGTRANSFSTS')/$value)*

```abap
@EndUserText.label: 'Acctg Transfer Sts in Settlmt Mgmt'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtMgmtAcctgTransfSts',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
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
  technicalName: 'IWLFSMTMGACCTS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtMgmtAcctgTransfSts
  as select from dd07l

  composition [0..*] of I_SettlmtMgmtAcctgTransfStsT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as wfbsk )                    as SettlmtMgmtAcctgTransfSts,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                      as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WFBSK'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
