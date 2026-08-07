---
name: I_EXPRTINSURCREDITCHECKSTATUST
description: "Exprtinsurcreditcheckstatust"
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
  - status
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_EXPRTINSURCREDITCHECKSTATUST

**Exprtinsurcreditcheckstatust**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExprtInsurCreditCheckStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ExprtInsurCreditCheckStsDesc` |  | |  | `bezei` |  |  |
| `_ExprtInsurCreditCheckStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExprtInsurCreditCheckStatus` | `I_ExprtInsurCreditCheckStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ExprtInsurCreditCheckStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Status of Credit Chk Against Export Credit Insurance - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDEINSCRDCKSTST'
@Analytics.dataExtraction.enabled: true 
@Metadata.ignorePropagatedAnnotations:true

define view I_ExprtInsurCreditCheckStatusT  
as select from tvbst 

association[0..1] to I_ExprtInsurCreditCheckStatus as _ExprtInsurCreditCheckStatus on $projection.ExprtInsurCreditCheckStatus = _ExprtInsurCreditCheckStatus.ExprtInsurCreditCheckStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'ExprtInsurCreditCheckStatus'
    @ObjectModel.foreignKey.association: '_ExprtInsurCreditCheckStatus'
    key statu as ExprtInsurCreditCheckStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as ExprtInsurCreditCheckStsDesc,
    
    //Associations
    _ExprtInsurCreditCheckStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'CMPSJ');
```
