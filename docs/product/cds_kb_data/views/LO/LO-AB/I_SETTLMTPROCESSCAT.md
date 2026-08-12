---
name: I_SETTLMTPROCESSCAT
description: "Settlmtprocesscat"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SETTLMTPROCESSCAT

**Settlmtprocesscat**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SettlmtProcessCat` | ✓ | |  | `cast( dd07l.domvalue_l as wlf_settlmt_process_cat )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Settlement Process Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'SettlementProcessCategory',
  dataCategory: #VALUE_HELP,
  representativeKey: 'SettlmtProcessCat',
  modelingPattern : #ANALYTICAL_DIMENSION,
  supportedCapabilities : [#ANALYTICAL_DIMENSION,
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE,
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
  technicalName: 'IWLFSMTPROCCAT'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_SettlmtProcessCat
  as select from dd07l
  
  composition [0..*] of I_SettlmtProcessCatText as _Text
  
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as wlf_settlmt_process_cat )                                  as SettlmtProcessCat,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                     as DomainValue,

      /* Associations */
      _Text
}

where
      dd07l.domname  = 'WBTYP'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
