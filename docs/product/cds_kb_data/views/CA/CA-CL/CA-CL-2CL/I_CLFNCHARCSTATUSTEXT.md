---
name: I_CLFNCHARCSTATUSTEXT
description: "Clfncharcstatustext"
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
  - text-view
  - text
  - status
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCSTATUSTEXT

**Clfncharcstatustext**

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
| `CharcStatus` | ✓ | |  | `atmst` |  |  |
| `CharcStatusName` |  | |  | `atstt` |  |  |
| `_Language` | | ✓ | | | | |
| `_CharcStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHRC1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Status of Clfn Characteristic - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcStatus'
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
define view I_ClfnCharcStatusText
  as select from tcmst as CharacteristicStatusText
      
      association to parent I_ClfnCharcStatus as _CharcStatus
        on $projection.CharcStatus = _CharcStatus.CharcStatus
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharacteristicStatusText.spras as Language,
      @ObjectModel.foreignKey.association: '_CharcStatus'
      @ObjectModel.text.element: ['CharcStatusName']
  key CharacteristicStatusText.atmst as CharcStatus,
      @Semantics.text: true
      CharacteristicStatusText.atstt as CharcStatusName,
      
      _CharcStatus,
      _Language
}
```
