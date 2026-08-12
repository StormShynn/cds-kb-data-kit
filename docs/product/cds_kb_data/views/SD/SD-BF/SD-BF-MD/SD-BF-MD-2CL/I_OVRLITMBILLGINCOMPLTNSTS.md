---
name: I_OVRLITMBILLGINCOMPLTNSTS
description: "Ovrlitmbillgincompltnsts"
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_OVRLITMBILLGINCOMPLTNSTS

**Ovrlitmbillgincompltnsts**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OvrlItmBillingIncompletionSts` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OvrlItmBillgIncompltnStsText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'OvrlItmBillingIncompletionSts'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'Overall Item Billing Incompletion Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDOIBILINCMSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION  ]
@ObjectModel.sapObjectNodeType.name: 'OvrlItmBillingIncompletionSts'                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_OvrlItmBillgIncompltnSts 
as select from dd07l

association [0..*] to I_OvrlItmBillgIncompltnStsText as _Text on $projection.OvrlItmBillingIncompletionSts = _Text.OvrlItmBillingIncompletionSts
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as OvrlItmBillingIncompletionSts,
    
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')  
  and ((dd07l.domvalue_l = 'A') or (dd07l.domvalue_l = 'B') or (dd07l.domvalue_l = 'C'));
```
