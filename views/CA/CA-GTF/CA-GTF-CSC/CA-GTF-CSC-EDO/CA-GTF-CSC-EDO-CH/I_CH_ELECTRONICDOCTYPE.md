---
name: I_CH_ELECTRONICDOCTYPE
description: "CH Electronicdoctype"
app_component: CA-GTF-CSC-EDO-CH
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
  - component:CA-GTF-CSC-EDO-CH
  - lob:Cross-Application Components
---
# I_CH_ELECTRONICDOCTYPE

**CH Electronicdoctype**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CH` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CH_ElectronicDocAcctgDocType` | ✓ | |  | `blart` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CH_ElectronicDocTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Switzerland Documment Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL}
  
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]  
                                     
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER                                    

@VDM.viewType: #BASIC


define view entity I_CH_ElectronicDocType as select from t003

association [0..*] to I_CH_ElectronicDocTypeText as _Text on $projection.CH_ElectronicDocAcctgDocType = _Text.CH_ElectronicDocAcctgDocType
{
  key blart as CH_ElectronicDocAcctgDocType,
  
  _Text 
}
```
