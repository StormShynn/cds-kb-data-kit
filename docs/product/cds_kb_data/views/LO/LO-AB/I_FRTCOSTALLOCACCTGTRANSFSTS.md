---
name: I_FRTCOSTALLOCACCTGTRANSFSTS
description: "Frtcostallocacctgtransfsts"
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
# I_FRTCOSTALLOCACCTGTRANSFSTS

**Frtcostallocacctgtransfsts**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FrtCostAllocAcctgTransfSts` | ✓ | |  | `cast (dd07l.domvalue_l as wfbsk )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Frt Cost Alloc Acctg Transfer Status'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  sapObjectNodeType.name: 'FrtCostAllocAcctgTransfSts',
  dataCategory: #VALUE_HELP,
  representativeKey: 'FrtCostAllocAcctgTransfSts',
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

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_FrtCostAllocAcctgTransfSts
  as select from dd07l

  composition [0..*] of I_FrtCostAllocAcctgTransfStsT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast (dd07l.domvalue_l as wfbsk )                                  as FrtCostAllocAcctgTransfSts,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                   as DomainValue,

      /* Associations */
      _Text
}

where
  (
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
  and(
       dd07l.domname    = 'WFBSK'
  and  dd07l.as4local   = 'A'
  and  dd07l.as4vers    = '0000'
  );
```
