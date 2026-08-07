---
name: I_CENTRALCREDITCHECKSTATUSTEXT
description: Centralcreditcheckstatustext
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - text-view
  - text
  - status
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_CENTRALCREDITCHECKSTATUSTEXT

**Centralcreditcheckstatustext**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CentralCreditCheckStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CentralCreditCheckStatusDesc` |  | |  | `bezei` |  |  |
| `_CentralCreditCheckStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralCreditCheckStatus` | `I_CentralCreditCheckStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CentralCreditCheckStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Status of Central Credit Check - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCENCRTCHKSTST'
@Metadata.ignorePropagatedAnnotations:true

define view I_CentralCreditCheckStatusText  
as select from tvbst 

association[0..1] to I_CentralCreditCheckStatus as _CentralCreditCheckStatus on $projection.CentralCreditCheckStatus = _CentralCreditCheckStatus.CentralCreditCheckStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'CentralCreditCheckStatus'
    @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
    key statu as CentralCreditCheckStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as CentralCreditCheckStatusDesc,
    
    //Associations
    _CentralCreditCheckStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'CMPS_CM');
```
