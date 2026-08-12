---
name: I_PERSSETTLMTACCTGTRANSFSTS
description: "Perssettlmtacctgtransfsts"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTACCTGTRANSFSTS

**Perssettlmtacctgtransfsts**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersSettlmtAcctgTransfSts` | ✓ | |  | `cast (dd07l.domvalue_l as wfbsk )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Pers Settlmt Accounting Transfer Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
//  sapObjectNodeType.name: ''
  dataCategory: #VALUE_HELP,
  representativeKey: 'PersSettlmtAcctgTransfSts',
  compositionRoot: true,
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
@Consumption.ranked: true
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: false,
  internalName: #LOCAL,
  technicalName: 'IWLFPSDACCTS'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_PersSettlmtAcctgTransfSts
  as select from dd07l

  composition [0..*] of I_PersSettlmtAcctgTransfStsT as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast (dd07l.domvalue_l as wfbsk ) as PersSettlmtAcctgTransfSts,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07l.domvalue_l                  as DomainValue,

      /* Associations */
      _Text
}
where
       dd07l.domname    = 'WFBSK'
  and  dd07l.as4local   = 'A'
  and  dd07l.as4vers    = '0000'
  and(
       dd07l.domvalue_l = 'A'
    or dd07l.domvalue_l = 'B'
    or dd07l.domvalue_l = 'C'
    or dd07l.domvalue_l = 'D'
    or dd07l.domvalue_l = 'E'
    or dd07l.domvalue_l = 'F'
    or dd07l.domvalue_l = 'J'
    or dd07l.domvalue_l = 'P'
    or dd07l.domvalue_l = 'R'
  )
```
