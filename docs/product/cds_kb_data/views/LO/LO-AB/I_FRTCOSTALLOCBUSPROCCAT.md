---
name: I_FRTCOSTALLOCBUSPROCCAT
description: "Frtcostallocbusproccat"
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
# I_FRTCOSTALLOCBUSPROCCAT

**Frtcostallocbusproccat**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FrtCostAllocBusProcCat` | ✓ | |  | `cast ( dd07l.domvalue_l as wlf_use_case_type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Cost Alloc Business Process Category'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'FrtCostAllocBusinessProcessCat',
  dataCategory: #VALUE_HELP,
  representativeKey: 'FrtCostAllocBusProcCat',
  resultSet.sizeCategory: #XS,
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities:   [#ANALYTICAL_DIMENSION ,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ],
  usageType.serviceQuality: #A,
  usageType.dataClass:      #META,
  usageType.sizeCategory:   #S
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_FrtCostAllocBusProcCat
  as select from dd07l

  composition [0..*] of I_FrtCostAllocBusProcCatText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( dd07l.domvalue_l as wlf_use_case_type )                                  as FrtCostAllocBusProcCat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                as DomainValue,

      /* Associations */
      _Text
}
where
  (
       dd07l.domvalue_l = '30'
    or dd07l.domvalue_l = '31'
  )
  and(
       dd07l.domname    = 'WLF_USE_CASE_TYPE'
  and  dd07l.as4local   = 'A'
  and  dd07l.as4vers    = '0000'
  );
```
