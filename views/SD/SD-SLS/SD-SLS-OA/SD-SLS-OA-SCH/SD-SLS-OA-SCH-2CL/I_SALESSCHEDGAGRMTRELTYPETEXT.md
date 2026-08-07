---
name: I_SALESSCHEDGAGRMTRELTYPETEXT
description: Salesschedgagrmtreltypetext
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
  - text-view
  - text
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTRELTYPETEXT

**Salesschedgagrmtreltypetext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreementReleaseType` | ✓ | |  | `substring( domvalue_l,1,1 )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `SchedgAgrmtReleaseTypeName` |  | |  | `ddtext` |  |  |
| `_SalesSchedgAgrmtRelType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesSchedgAgrmtRelType` | `I_SalesSchedgAgrmtRelType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Scheduling Agreement Release Type - Text'
@AbapCatalog:{ 
    sqlViewName: 'ISDSARELTYPET',
    compiler.compareFilter: true,
    preserveKey: true
    }
@VDM.viewType: #BASIC
@ObjectModel:{
  dataCategory: #TEXT,
  representativeKey: 'SchedulingAgreementReleaseType',
  usageType:{
  dataClass: #META,
  serviceQuality: #A,
  sizeCategory: #S
  },
  supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true


define view I_SalesSchedgAgrmtRelTypeText
  as select from dd07t
  association [0..1] to I_SalesSchedgAgrmtRelType as _SalesSchedgAgrmtRelType on $projection.SchedulingAgreementReleaseType = _SalesSchedgAgrmtRelType.SchedulingAgreementReleaseType
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtRelType'
      @ObjectModel.text.element: ['SchedgAgrmtReleaseTypeName']
  key substring( domvalue_l,1,1 ) as SchedulingAgreementReleaseType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                  as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l            as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      ddtext                      as SchedgAgrmtReleaseTypeName,

      //Association
      _SalesSchedgAgrmtRelType,
      _Language
}
where dd07t.domname  = 'ABART'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
