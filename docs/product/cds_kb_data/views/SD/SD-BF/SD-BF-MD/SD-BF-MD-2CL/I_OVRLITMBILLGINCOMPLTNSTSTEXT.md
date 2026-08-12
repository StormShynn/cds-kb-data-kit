---
name: I_OVRLITMBILLGINCOMPLTNSTSTEXT
description: "Ovrlitmbillgincompltnststext"
app_component: SD-BF-MD-2CL
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
  - SD-BF-MD
  - interface-view
  - text-view
  - text
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_OVRLITMBILLGINCOMPLTNSTSTEXT

**Ovrlitmbillgincompltnststext**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OvrlItmBillingIncompletionSts` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OvrlItmBillgIncompltnStsDesc` |  | |  | `cast(bezei as ovrlitmbillgincompltnstsdesc preserving type)` |  |  |
| `_OvrlItmBillingIncompletionSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OvrlItmBillingIncompletionSts` | `I_OvrlItmBillgIncompltnSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OvrlItmBillingIncompletionSts'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'Overall Billing Incompletion Status of Items - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOIBILINCMSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Analytics.dataExtraction.enabled: true 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT  ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_OvrlItmBillgIncompltnStsText  
as select from tvbst 

association[0..1] to I_OvrlItmBillgIncompltnSts as _OvrlItmBillingIncompletionSts on $projection.OvrlItmBillingIncompletionSts = _OvrlItmBillingIncompletionSts.OvrlItmBillingIncompletionSts
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
    key statu as OvrlItmBillingIncompletionSts,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    cast(bezei as ovrlitmbillgincompltnstsdesc preserving type)  as OvrlItmBillgIncompltnStsDesc,
    
    //Associations
    _OvrlItmBillingIncompletionSts,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'UVFAS')
  and ((tvbst.statu = 'A') or (tvbst.statu = 'B') or (tvbst.statu = 'C'));
```
