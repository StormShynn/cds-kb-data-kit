---
name: I_PRICINGINCOMPLETIONSTATUST
description: "Pricingincompletionstatust"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - pricing
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_PRICINGINCOMPLETIONSTATUST

**Pricingincompletionstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingIncompletionStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PricingIncompletionStatusDesc` |  | |  | `bezei` |  |  |
| `_PricingIncompletionStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PricingIncompletionStatus` | `I_PricingIncompletionStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'ISDPRICINCOMSTST',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck:#NOT_REQUIRED 

@Analytics.dataExtraction.enabled: true

@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'PricingIncompletionStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S 
  },
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY ]
}

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Pricing Incompletion Status - Text'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_PricingIncompletionStatusT  
as select from tvbst 

association[0..1] to I_PricingIncompletionStatus as _PricingIncompletionStatus on $projection.PricingIncompletionStatus = _PricingIncompletionStatus.PricingIncompletionStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    key statu as PricingIncompletionStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.ranking: #MEDIUM
    @Search.fuzzinessThreshold: 0.9
    bezei as PricingIncompletionStatusDesc,
    
    //Associations
    _PricingIncompletionStatus,
    @Search.defaultSearchElement: false
    _Language        
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'UVPRS')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'C'));
```
