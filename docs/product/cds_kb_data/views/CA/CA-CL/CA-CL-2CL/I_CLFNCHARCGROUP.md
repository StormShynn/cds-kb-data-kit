---
name: I_CLFNCHARCGROUP
description: "Clfncharcgroup"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCGROUP

**Clfncharcgroup**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcGroup` | ✓ | |  | `cast ( CharacteristicGroup.atkla as charcgroup preserving type )` |  |  |
| `ConfigurationDeprecationCode` |  | |  | `configurationdeprecationcode` |  |  |
| `_CharacteristicGroupText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHRC7'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Group of Classification Characteristic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CharcGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'ClfnCharacteristicGroup' 
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,     
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ClfnCharcGroup
  as select from tcmg as CharacteristicGroup 

      composition [0..*] of I_ClfnCharcGroupText as _CharacteristicGroupText   
{ 
      @ObjectModel.text.association: '_CharacteristicGroupText'
  key cast ( CharacteristicGroup.atkla as charcgroup preserving type ) as CharcGroup,
      CharacteristicGroup.configurationdeprecationcode as ConfigurationDeprecationCode,

      _CharacteristicGroupText
}
```
