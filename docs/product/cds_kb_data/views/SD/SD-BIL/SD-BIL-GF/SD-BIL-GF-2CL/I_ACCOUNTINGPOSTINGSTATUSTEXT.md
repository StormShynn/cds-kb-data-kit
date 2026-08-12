---
name: I_ACCOUNTINGPOSTINGSTATUSTEXT
description: "Accountingpostingstatustext"
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - text-view
  - text
  - status
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_ACCOUNTINGPOSTINGSTATUSTEXT

**Accountingpostingstatustext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingPostingStatus` | ✓ | |  | `cast( statu as buchk preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AccountingPostingStatusDesc` |  | |  | `bezei` |  |  |
| `_AccountingPostingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingPostingStatus` | `I_AccountingPostingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AccountingPostingStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]
@EndUserText.label: 'Accounting Posting Status - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDACCTPOSTGSTST',
  preserveKey: true
}
@Metadata.ignorePropagatedAnnotations: true

define view I_AccountingPostingStatusText
as select from tvbst

association[0..1] to I_AccountingPostingStatus as _AccountingPostingStatus on $projection.AccountingPostingStatus = _AccountingPostingStatus.AccountingPostingStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_AccountingPostingStatus'
    key cast( statu as buchk preserving type ) as AccountingPostingStatus,    
        
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as AccountingPostingStatusDesc,
    
    //Associations
    _AccountingPostingStatus,
    _Language
}
where (tvbst.tbnam = 'VBRK') and (tvbst.fdnam = 'BUCHK');
```
