---
name: I_EG_EDOCITEMCODEMATERIALGROUP
description: "EG EDOCITEMCODEMaterial Group"
app_component: CA-GTF-CSC-EDO-EG
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - material
  - item-level
  - component:CA-GTF-CSC-EDO-EG
  - lob:Cross-Application Components
  - bo:Material
---
# I_EG_EDOCITEMCODEMATERIALGROUP

**EG EDOCITEMCODEMaterial Group**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-EG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `EG_EDocMaterialGroup` | ✓ | |  |  |  |  |
| `EG_EDocItmType` |  | |  |  |  |  |
| `EG_EDocItmCode` |  | |  |  |  |  |
| `EG_EDocInternationalArtclNmbr` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Egypt ItmCode for MatGroup'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
},
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ]
                           }
define view entity I_EG_EDocItemCodeMaterialGroup as select from R_EG_EDocItemCodeMaterialGroup
{
  key CompanyCode,
  key EG_EDocMaterialGroup,
  EG_EDocItmType,
  EG_EDocItmCode,
  EG_EDocInternationalArtclNmbr
}
```
