---
name: I_CNDNCONTRSETTLMTLOCKED
description: "This CDS view exposes fixed values of the field Settlement Lock Status. The following fixed values have been maintained: ' ' Not Locked X Locked"
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKED')/$value
semantic_en: "This CDS view exposes fixed values of the field Settlement Lock Status. The following fixed values have been maintained: ' ' Not Locked X Locked"
semantic_vi: "Condition Contr Settlement Lock Status — CDS view cơ bản dựa trên dd07l."
keywords:
  - "condition"
  - "contr"
  - "settlement"
  - "lock"
  - "status"
  - "cndn"
  - "settlmt"
  - "locked"
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
# I_CNDNCONTRSETTLMTLOCKED

**This CDS view exposes fixed values of the field Settlement Lock Status. The following fixed values have been maintained: ' ' Not Locked X Locked**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrSettlmtIsLocked` | ✓ | |  | `cast(dd07l.domvalue_l as wcb_cc_status_settl_locked )` | `CHAR(1)` | Settlement Lock Status |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRSETTLMTLOCKED')/$value)*

```abap
@EndUserText.label: 'Condition Contr Settlement Lock Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: '',
  dataCategory: #VALUE_HELP,
  representativeKey: 'CndnContrSettlmtIsLocked',
  modelingPattern:        #ANALYTICAL_DIMENSION,
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
  technicalName: 'IWCBSETTLLOCKED'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_CndnContrSettlmtLocked
  as select from dd07l

  composition [0..*] of I_CndnContrSettlmtLockText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as wcb_cc_status_settl_locked )                                  as CndnContrSettlmtIsLocked,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                       as DomainValue,

      /* Associations */
      _Text
}
where
      dd07l.domname  = 'WCB_CC_STATUS_SETTL_LOCKED'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
