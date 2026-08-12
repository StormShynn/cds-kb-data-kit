---
name: I_FINDOCCREDITCHECKSTATUST
description: "Findoccreditcheckstatust"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - status
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_FINDOCCREDITCHECKSTATUST

**Findoccreditcheckstatust**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinDocCreditCheckStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `FinDocCreditCheckStatusDesc` |  | |  | `bezei` |  |  |
| `_FinDocCreditCheckStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinDocCreditCheckStatus` | `I_FinDocCreditCheckStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'FinDocCreditCheckStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Status of Credit Check Against Financial Document - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDFDOCCRDCKSTST'
@Metadata.ignorePropagatedAnnotations:true

define view I_FinDocCreditCheckStatusT  
as select from tvbst 

association[0..1] to I_FinDocCreditCheckStatus as _FinDocCreditCheckStatus on $projection.FinDocCreditCheckStatus = _FinDocCreditCheckStatus.FinDocCreditCheckStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'FinDocCreditCheckStatus'
    @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
    key statu as FinDocCreditCheckStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as FinDocCreditCheckStatusDesc,
    
    //Associations
    _FinDocCreditCheckStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'CMPSI');
```
