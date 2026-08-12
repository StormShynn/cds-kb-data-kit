---
name: I_CLFNCHARCSTATUS
description: "Clfncharcstatus"
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
  - status
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCSTATUS

**Clfncharcstatus**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcStatus` | ✓ | |  | `atmst` | `CHAR(1)` | Characteristic status |
| `CharcIsReleased` |  | |  | `atfre` | `CHAR(1)` | Characteristic status: released |
| `CharcIsMarkedForDeletion` |  | |  | `atlvm` | `CHAR(1)` | Characteristic Status: Selected for Deletion |
| `_CharacteristicStatusText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHRC2'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Status of Classification Characteristic'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CharcStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'ClfnCharacteristicStatus' 
@ObjectModel.supportedCapabilities:
  [  #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #ANALYTICAL_DIMENSION,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_ClfnCharcStatus
  as select from tcms as CharacteristicStatus
  
      composition [0..*] of I_ClfnCharcStatusText as _CharacteristicStatusText 
{
      @ObjectModel.text.association: '_CharacteristicStatusText'
  key CharacteristicStatus.atmst    as CharcStatus,
      CharacteristicStatus.atfre    as CharcIsReleased,
      CharacteristicStatus.atlvm    as CharcIsMarkedForDeletion,
//      CharcStatus.dlock, Distribution lock

      _CharacteristicStatusText
}
```
