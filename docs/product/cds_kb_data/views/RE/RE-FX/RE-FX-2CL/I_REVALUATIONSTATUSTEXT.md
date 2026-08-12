---
name: I_REVALUATIONSTATUSTEXT
description: "Revaluationstatustext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_REVALUATIONSTATUSTEXT

**Revaluationstatustext**

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
| `REValuationStatus` | ✓ | |  | `cast(domvalue_l as recestatusevaluation )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `REValuationStatusDesc` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_REValuationStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREVALSTATUST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Valuation Status - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REValuationStatus',
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
  sapObjectNodeType.name: 'RealEstateValuationStatusText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_REValuationStatusText as select from dd07t
association to parent I_REValuationStatus as _REValuationStatus
    on $projection.REValuationStatus = _REValuationStatus.REValuationStatus   
association [1..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,
   
    @ObjectModel.foreignKey.association: '_REValuationStatus'
    @ObjectModel.text.element: ['REValuationStatus']     
    key cast(domvalue_l as recestatusevaluation ) as REValuationStatus,                                  
//    key      case when domvalue_l = ''  then 'I'
//    else case when domvalue_l = 'C' then 'C'  end end   as REValuationStatus,
      
    @Consumption.hidden: true
    domvalue_l as DomainValue,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    ddtext                                    as REValuationStatusDesc,
    
    _Language,
    _REValuationStatus
}
where
      domname  = 'RECESTATUSEVALUATION'
  and as4local = 'A'
```
