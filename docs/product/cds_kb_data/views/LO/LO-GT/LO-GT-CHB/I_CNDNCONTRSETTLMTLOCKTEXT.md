---
name: I_CNDNCONTRSETTLMTLOCKTEXT
description: "This CDS view exposes fixed values of the field Settlement Lock Status. The following fixed values have been maintained: ' ' Not Locked X Locked"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKTEXT')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Lock Status. The following fixed values have been maintained: ' ' Not Locked X Locked"
semantic_vi: "Cndn Contr Settlmt Lock Status - Text — CDS view cơ bản dựa trên dd07t."
keywords:
  - "cndn"
  - "contr"
  - "settlmt"
  - "lock"
  - "status"
  - "text"
  - "locked"
  - "language"
  - "name"
  - "domain"
  - "value"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRSETTLMTLOCKTEXT

**This CDS view exposes fixed values of the field Settlement Lock Status. The following fixed values have been maintained: ' ' Not Locked X Locked**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSettlmtIsLocked` | ✓ | |  | `cast(dd07t.domvalue_l as wcb_cc_status_settl_locked )` | `CHAR(1)` | Settlement Lock Status |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CndnContrSettlmtIsLockedName` |  | |  | `cast( dd07t.ddtext as wcb_cc_status_settl_locked_fio preserving type )` | `CHAR(60)` | Settlement Lock Status Text |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Language` | | ✓ | | | | |
| `_CndnContrSettlmtLocked` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKTEXT')/$value)*

```abap
@EndUserText.label: 'Cndn Contr Settlmt Lock Status - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'CndnContrSettlmtIsLocked',
  modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
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
  technicalName: 'IWCBSETTLLOCKEDT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrSettlmtLockText
  as select from dd07t

  association        to parent I_CndnContrSettlmtLocked as _CndnContrSettlmtLocked on $projection.CndnContrSettlmtIsLocked = _CndnContrSettlmtLocked.CndnContrSettlmtIsLocked
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrSettlmtLocked'
      @ObjectModel.text.element: ['CndnContrSettlmtIsLockedName']
  key cast(dd07t.domvalue_l as wcb_cc_status_settl_locked )                                  as CndnContrSettlmtIsLocked,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                                                                       as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wcb_cc_status_settl_locked_fio preserving type )                 as CndnContrSettlmtIsLockedName,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                       as DomainValue,

      /* Associations */
      _CndnContrSettlmtLocked,
      _Language
}

where
      dd07t.domname  = 'WCB_CC_STATUS_SETTL_LOCKED'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
