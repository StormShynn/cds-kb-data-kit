---
name: I_CNCONSETTLEMENTLOCKSTATUST
description: "This CDS view provides the data to answer the following business question: Which are the relevant lock statuses in condition contract settlement? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETTLEMENTLOCKSTATUST')/$value
semantic_en: "This CDS view provides the data to answer the following business question: Which are the relevant lock statuses in condition contract settlement? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cndn Contr Settlmt Lock Status - Txt — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "contr"
  - "settlmt"
  - "lock"
  - "status"
  - "txt"
  - "settlement"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNCONSETTLEMENTLOCKSTATUST

**This CDS view provides the data to answer the following business question: Which are the relevant lock statuses in condition contract settlement? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETTLEMENTLOCKSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnConSettlementLockStatus` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_cc_status_settl_locked)` | `CHAR(1)` | Settlement Lock Status |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CnConSettlementLockStatusName` |  | |  | `cast( dd07t.ddtext as wcb_cc_status_settl_locked_fio preserving type )` | `CHAR(60)` | Settlement Lock Status Text |
| `_Language` | | ✓ | | | | |
| `_CnConSettlementLockStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETTLEMENTLOCKSTATUST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETTLEMENTLOCKSTATUST')/$value)*

```abap
@EndUserText.label: 'Cndn Contr Settlmt Lock Status - Txt'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CnConSettlementLockStatus',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  }
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnConSettlementLockStatusT
  as select from dd07t

  association        to parent I_CnConSettlementLockStatus as _CnConSettlementLockStatus on $projection.CnConSettlementLockStatus = _CnConSettlementLockStatus.CnConSettlementLockStatus

  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CnConSettlementLockStatus'
      @ObjectModel.text.element: ['CnConSettlementLockStatusName']
  key cast(dd07t.domvalue_l as wcb_cc_status_settl_locked) as CnConSettlementLockStatus,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                                      as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_cc_status_settl_locked_fio preserving type )                 as CnConSettlementLockStatusName,

      /* Associations */
      _CnConSettlementLockStatus,
      _Language
}
where
      dd07t.domname  = 'WCB_CC_STATUS_SETTL_LOCKED'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
