---
name: I_CENTRALCREDITCHKTECHERRSTST
description: Centralcreditchktecherrstst
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
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_CENTRALCREDITCHKTECHERRSTST

**Centralcreditchktecherrstst**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CentralCreditChkTechErrSts` | `statu` |
| key `Language` | `spras` |
| `CentralCreditChkTechErrStsDesc` | `bezei` |
| `_CentralCreditChkTechErrSts` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralCreditChkTechErrSts` | `I_CentralCreditChkTechErrSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CentralCreditChkTechErrSts'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Technical Error Status of Central Credit Check - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCENCCKTERSTST'
@Metadata.ignorePropagatedAnnotations:true

define view I_CentralCreditChkTechErrStsT  
as select from tvbst 

association[0..1] to I_CentralCreditChkTechErrSts as _CentralCreditChkTechErrSts on $projection.CentralCreditChkTechErrSts = _CentralCreditChkTechErrSts.CentralCreditChkTechErrSts
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'CentralCreditChkTechErrSts'
    @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
    key statu as CentralCreditChkTechErrSts,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as CentralCreditChkTechErrStsDesc,
    
    //Associations
    _CentralCreditChkTechErrSts,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'CMPS_TE');
```
