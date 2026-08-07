---
name: I_PROOFOFDELIVERYSTATUSTEXT
description: Proofofdeliverystatustext
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - delivery
  - text
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PROOFOFDELIVERYSTATUSTEXT

**Proofofdeliverystatustext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProofOfDeliveryStatus` | ✓ | |  | `statu` |
| `Language` | ✓ | |  | `spras` |
| `ProofOfDeliveryStatusDesc` |  | |  | `bezei` |
| `_ProofOfDeliveryStatus` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProofOfDeliveryStatus` | `I_ProofOfDeliveryStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProofOfDeliveryStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'Proof of Delivery Sts on Item Lvl - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPROFDELIVSTST'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_ProofOfDeliveryStatusText  
as select from tvbst 

association[0..1] to I_ProofOfDeliveryStatus as _ProofOfDeliveryStatus on $projection.ProofOfDeliveryStatus = _ProofOfDeliveryStatus.ProofOfDeliveryStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_ProofOfDeliveryStatus'
    key statu as ProofOfDeliveryStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as ProofOfDeliveryStatusDesc,
    
    //Associations
    _ProofOfDeliveryStatus,
    _Language        
}
where (tvbst.tbnam = 'LIPS') and (tvbst.fdnam = 'PDSTA');
```
