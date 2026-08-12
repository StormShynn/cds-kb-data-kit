---
name: I_WRNTYCLAIMPROCESSINGSTATUS
description: "Wrntyclaimprocessingstatus"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - status
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMPROCESSINGSTATUS

**Wrntyclaimprocessingstatus**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyClaimProcessingStatus` | ✓ | |  | `astate` |  |  |
| `WarrantyClaimVersionCategory` |  | |  | `kateg` |  |  |
| `WarrantyClaimMigratedStatus` |  | |  | `migratedstatus` |  |  |
| `WrntyClmStatusIsFocusStatus` |  | |  | `focusstatus` |  |  |
| `WrntyClmProcStsClassfctn` |  | |  | `procstatusclsfcn` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimProcessingStsText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty processing status'
@ObjectModel:{
    representativeKey: 'WrntyClaimProcessingStatus',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
             dataCategory: #DIMENSION,
             dataExtraction.enabled: true
           }
@Analytics.technicalName: 'IWRNTYSTATUS'
@Analytics.internalName:#LOCAL
define view entity I_WrntyClaimProcessingStatus
  as select from cwtya05
  association [1..*] to I_WrntyClaimProcessingStsText as _Text on $projection.WrntyClaimProcessingStatus = _Text.WrntyClaimProcessingStatus

{
      @ObjectModel.text.association: '_Text'
  key cwtya05.astate           as WrntyClaimProcessingStatus,
      cwtya05.kateg            as WarrantyClaimVersionCategory,
      cwtya05.migratedstatus   as WarrantyClaimMigratedStatus,
      cwtya05.focusstatus      as WrntyClmStatusIsFocusStatus,
      cwtya05.procstatusclsfcn as WrntyClmProcStsClassfctn,
      _Text


}
```
