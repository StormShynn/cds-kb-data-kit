---
name: I_WRNTYCLAIMCOVERAGETYPE
description: Wrntyclaimcoveragetype
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMCOVERAGETYPE

**Wrntyclaimcoveragetype**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `WrntyClaimCoverageType` | `cast( domvalue_l as wty_coverage_type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimCoverageTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@VDM.viewType: #BASIC *******Modernization Task********
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'WrntyClaimCoverageType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET,#SQL_DATA_SOURCE, 
#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.usageType: {
  dataClass: #ORGANIZATIONAL,
  serviceQuality: #A,
  sizeCategory: #M
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWRNTYCOTYPE'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@EndUserText.label: 'Coverage Type'
@Metadata.ignorePropagatedAnnotations: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_WrntyClaimCoverageType
  as select from dd07l
  association [1..*] to I_WrntyClaimCoverageTypeText as _Text on $projection.WrntyClaimCoverageType = _Text.WrntyClaimCoverageType
{
  key  cast( domvalue_l  as wty_coverage_type ) as WrntyClaimCoverageType,
//  _Text[1:Language=$session.system_language].WrntyClaimCoverageText,
     _Text   
}
where
//      dd07l.domname  = 'WTY_COVERAGE_TYPE'
      dd07l.domname  = 'WTY_COVERAGE_TYPE_SUP'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
