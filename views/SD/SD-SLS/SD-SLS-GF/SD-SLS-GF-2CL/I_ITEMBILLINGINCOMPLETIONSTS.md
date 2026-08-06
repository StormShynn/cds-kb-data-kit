---
name: I_ITEMBILLINGINCOMPLETIONSTS
description: Itembillingincompletionsts
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
  - billing
  - item-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_ITEMBILLINGINCOMPLETIONSTS

**Itembillingincompletionsts**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ItemBillingIncompletionStatus` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ItemBillingIncompletionStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck:#NOT_REQUIRED

@AbapCatalog: {
  sqlViewName: 'ISDITMBLINCPSTS',
  compiler.compareFilter: true,
  preserveKey: true
}

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true

@ObjectModel: {
  modelingPattern:   #ANALYTICAL_DIMENSION,
  resultSet.sizeCategory: #XS,
  representativeKey: 'ItemBillingIncompletionStatus',
  sapObjectNodeType.name:'SDDocItemBillingIncompltnSts',   
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #ANALYTICAL_DIMENSION,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY ],                          
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
 
}
@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true            

@EndUserText.label: 'Item Billing Incompletion Status'                           
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ItemBillingIncompletionSts 
as select from dd07l 

association [0..*] to I_ItemBillingIncompletionStsT as _Text on $projection.ItemBillingIncompletionStatus = _Text.ItemBillingIncompletionStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as ItemBillingIncompletionStatus,
    
    @Search.defaultSearchElement: true
    _Text  
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = 'A') or (dd07l.domvalue_l = 'C'));
```
