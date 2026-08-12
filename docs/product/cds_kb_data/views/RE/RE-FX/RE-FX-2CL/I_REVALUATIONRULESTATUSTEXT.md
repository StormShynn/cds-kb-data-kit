---
name: I_REVALUATIONRULESTATUSTEXT
description: "Revaluationrulestatustext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - status
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONRULESTATUSTEXT

**Revaluationrulestatustext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `REValuationRuleStatus` | ✓ | |  | `cast(domvalue_l as recestatusrule )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `REValuationRuleStatusDesc` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_REValuationRuleStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALRULSTATUST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Status of a RE Contract Valuation - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REValuationRuleStatus',
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'REValuationRuleStatusText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_REValuationRuleStatusText as select from dd07t
association to parent I_REValuationRuleStatus as _REValuationRuleStatus
    on $projection.REValuationRuleStatus = _REValuationRuleStatus.REValuationRuleStatus  
association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
    
    @ObjectModel.foreignKey.association: '_REValuationRuleStatus'
    @ObjectModel.text.element: ['REValuationRuleStatus']                                      
    key cast(domvalue_l as recestatusrule ) as REValuationRuleStatus,
      
    @Consumption.hidden: true
    domvalue_l as DomainValue,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
      ddtext                                    as REValuationRuleStatusDesc,
    
      _Language,
      _REValuationRuleStatus
}
where
      domname  = 'RECESTATUSRULE'
  and as4local = 'A'
```
