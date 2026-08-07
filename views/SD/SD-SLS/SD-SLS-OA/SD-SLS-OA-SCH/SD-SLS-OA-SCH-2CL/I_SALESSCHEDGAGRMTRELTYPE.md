---
name: I_SALESSCHEDGAGRMTRELTYPE
description: Salesschedgagrmtreltype
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTRELTYPE

**Salesschedgagrmtreltype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreementReleaseType` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesSchedgAgrmtRelTypeText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Scheduling Agreement Release Type'
@VDM.viewType: #BASIC
@AbapCatalog:{
  sqlViewName: 'ISDSARELTYPE',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel:{
representativeKey: 'SchedulingAgreementReleaseType',
  usageType:{
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
    },
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Search.searchable: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL
             }
@ObjectModel.sapObjectNodeType.name: 'SlsSchedgAgrmtReleaseType'
define view I_SalesSchedgAgrmtRelType
  as select from dd07l
  association [0..*] to I_SalesSchedgAgrmtRelTypeText as _Text on $projection.SchedulingAgreementReleaseType = _Text.SchedulingAgreementReleaseType
{
      @ObjectModel.text.association: '_Text'
  key substring(dd07l.domvalue_l, 1, 1) as SchedulingAgreementReleaseType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                  as DomainValue,

      _Text
}
where
      dd07l.domname  = 'ABART'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
