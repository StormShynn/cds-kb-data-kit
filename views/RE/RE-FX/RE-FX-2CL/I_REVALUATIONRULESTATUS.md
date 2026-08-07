---
name: I_REVALUATIONRULESTATUS
description: Revaluationrulestatus
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - status
  - component:RE-FX-2CL
  - lob:Other
---
# I_REVALUATIONRULESTATUS

**Revaluationrulestatus**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REValuationRuleStatus` | ✓ | |  | `cast(domvalue_l as recestatusrule )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALRULEST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Valuation Rule Status'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'REValuationRuleStatus',
  resultSet.sizeCategory: #XS,
  usageType: {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #VALUE_HELP_PROVIDER,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'RealEstateValuationRuleStatus'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
//@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC 

define root view entity I_REValuationRuleStatus as select from dd07l 
composition [0..*] of I_REValuationRuleStatusText as _Text
{

    @ObjectModel.text.association: '_Text'
    key cast(domvalue_l as recestatusrule ) as REValuationRuleStatus,
        
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text
    
}
where
      domname  = 'RECESTATUSRULE'
  and as4local = 'A'
  and as4vers  = '0000'
```
