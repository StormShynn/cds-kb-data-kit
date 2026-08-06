---
name: I_IT_ELECTRONICDOCSTATPARTT
description: IT Electronicdocstatpartt
app_component: CA-GTF-CSC-EDO-IT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# I_IT_ELECTRONICDOCSTATPARTT

**IT Electronicdocstatpartt**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `spras` |
| key `IT_ElectronicDocPartStat` | `status_at_partner` |
| `IT_ElectronicDocPartStatText` | `description` |
| `_StatusPartner` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StatusPartner` | `I_IT_ElectronicDocStatPart` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy Status of eDocument from Partner - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
}

@ObjectModel.dataCategory: #TEXT 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET] 
                                     
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
                                     
@VDM.viewType: #BASIC


define view entity I_IT_ElectronicDocStatPartT as select from edoitstatuspartt
association [1..1] to I_IT_ElectronicDocStatPart as _StatusPartner on $projection.IT_ElectronicDocPartStat = _StatusPartner.IT_ElectronicDocPartStat
{ 
  @Semantics.language:true 
  key spras as Language,
  
  @ObjectModel.text.element: ['IT_ElectronicDocPartStatText']
  key status_at_partner as IT_ElectronicDocPartStat,
  @Semantics.text:true
  description as IT_ElectronicDocPartStatText,
    
  _StatusPartner
}
```
