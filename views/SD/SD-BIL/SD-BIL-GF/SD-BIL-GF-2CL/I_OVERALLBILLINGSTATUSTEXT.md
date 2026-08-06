---
name: I_OVERALLBILLINGSTATUSTEXT
description: Overallbillingstatustext
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - text-view
  - billing
  - text
  - status
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLBILLINGSTATUSTEXT

**Overallbillingstatustext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OverallBillingStatus` | `cast(substring(domvalue_l, 1, 1) as vf_status preserving type)` |
| key `Language` | `ddlanguage` |
| `OverallBillingStatusDesc` | `ddtext` |
| `_OverallBillingStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallBillingStatus` | `I_OverallBillingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallBillingStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]
@EndUserText.label: 'Overall Billing Status - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDOVLBLLGSTST',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_OverallBillingStatusText
as select from dd07t

association[0..1] to I_OverallBillingStatus as _OverallBillingStatus on $projection.OverallBillingStatus = _OverallBillingStatus.OverallBillingStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OverallBillingStatus'
    key cast(substring(domvalue_l, 1, 1) as vf_status preserving type) as OverallBillingStatus,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    ddtext as OverallBillingStatusDesc,
    
    //Associations
    _OverallBillingStatus,
    _Language
}
where (dd07t.domname = 'VF_STATUS') and (dd07t.as4local = 'A');
```
