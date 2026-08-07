---
name: I_ITEMBILLINGINCOMPLETIONSTST
description: Itembillingincompletionstst
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
# I_ITEMBILLINGINCOMPLETIONSTST

**Itembillingincompletionstst**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ItemBillingIncompletionStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ItemBillingIncompletionStsDesc` |  | |  | `bezei` |  |  |
| `_ItemBillingIncompletionStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemBillingIncompletionStatus` | `I_ItemBillingIncompletionSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck:#NOT_REQUIRED

@Analytics.dataExtraction.enabled: true 

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'ItemBillingIncompletionStatus',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}

@AbapCatalog: {
  sqlViewName: 'ISDITMBLINCPSTST',
  compiler.compareFilter: true,
  preserveKey: true
}

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Item Billing Incompletion Status - Text'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ItemBillingIncompletionStsT 
as select from tvbst 

association[0..1] to I_ItemBillingIncompletionSts as _ItemBillingIncompletionStatus on $projection.ItemBillingIncompletionStatus = _ItemBillingIncompletionStatus.ItemBillingIncompletionStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    key statu as ItemBillingIncompletionStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.9
    @Search.ranking: #MEDIUM
    bezei as ItemBillingIncompletionStsDesc,
    
    //Associations
    _ItemBillingIncompletionStatus,
    @Search.defaultSearchElement: false
    _Language        
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'UVFAK')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'C'));
```
