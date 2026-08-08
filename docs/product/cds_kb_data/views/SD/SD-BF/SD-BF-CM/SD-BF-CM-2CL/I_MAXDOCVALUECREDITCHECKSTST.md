---
name: I_MAXDOCVALUECREDITCHECKSTST
description: "Maxdocvaluecreditcheckstst"
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
# I_MAXDOCVALUECREDITCHECKSTST

**Maxdocvaluecreditcheckstst**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaxDocValueCreditCheckStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MaxDocValueCreditCheckStsDesc` |  | |  | `bezei` |  |  |
| `_MaxDocValueCreditCheckStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaxDocValueCreditCheckStatus` | `I_MaxDocValueCreditCheckSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MaxDocValueCreditCheckStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Maximum Document Value Credit Check Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true 
@AbapCatalog.sqlViewName: 'ISDMDVACRDCKSTST'
@Metadata.ignorePropagatedAnnotations:true

define view I_MaxDocValueCreditCheckStsT  
as select from tvbst 

association[0..1] to I_MaxDocValueCreditCheckSts as _MaxDocValueCreditCheckStatus on $projection.MaxDocValueCreditCheckStatus = _MaxDocValueCreditCheckStatus.MaxDocValueCreditCheckStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'MaxDocValueCreditCheckStatus'
    @ObjectModel.foreignKey.association: '_MaxDocValueCreditCheckStatus'
    key statu as MaxDocValueCreditCheckStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as MaxDocValueCreditCheckStsDesc,
    
    //Associations
    _MaxDocValueCreditCheckStatus,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'CMPSC');
```
