---
name: I_CLFNCHARCGROUPTEXT
description: Clfncharcgrouptext
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - text-view
  - text
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCGROUPTEXT

**Clfncharcgrouptext**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CharcGroup` | ✓ | |  | `cast ( CharacteristicGroupText.atkla as charcgroup preserving type )` |  |  |
| `CharcGroupName` |  | |  | `atklt` |  |  |
| `_Language` | | ✓ | | | | |
| `_CharcGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHRC8'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Group of Clfn Characteristic - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnCharcGroupText
  as select from tcmgt as CharacteristicGroupText   
  
      association to parent I_ClfnCharcGroup as _CharcGroup
        on $projection.CharcGroup = _CharcGroup.CharcGroup
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharacteristicGroupText.spras as Language,
      @ObjectModel.foreignKey.association: '_CharcGroup'
      @ObjectModel.text.element: ['CharcGroupName']
  key cast ( CharacteristicGroupText.atkla as charcgroup preserving type ) as CharcGroup,
      @Semantics.text: true
      CharacteristicGroupText.atklt as CharcGroupName,   
         
      _CharcGroup,
      _Language
}
```
