---
name: I_BILLINGBLOCKSTATUSTEXT
description: "Billingblockstatustext"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - text-view
  - billing
  - text
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_BILLINGBLOCKSTATUSTEXT

**Billingblockstatustext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingBlockStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `BillingBlockStatusDesc` |  | |  | `bezei` |  |  |
| `_BillingBlockStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingBlockStatus` | `I_BillingBlockStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'BillingBlockStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Billing Block Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBILLGBLKSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE  ]
@Search.searchable: true                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_BillingBlockStatusText
as select from tvbst

association[0..1] to I_BillingBlockStatus as _BillingBlockStatus on $projection.BillingBlockStatus = _BillingBlockStatus.BillingBlockStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{ 
    @ObjectModel.foreignKey.association: '_BillingBlockStatus'
    key statu as BillingBlockStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW    
    bezei as BillingBlockStatusDesc,
    
    //Associations
    _BillingBlockStatus,
    _Language
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'FSSTA')
  and ((tvbst.statu = '') or (tvbst.statu = 'C'));
```
