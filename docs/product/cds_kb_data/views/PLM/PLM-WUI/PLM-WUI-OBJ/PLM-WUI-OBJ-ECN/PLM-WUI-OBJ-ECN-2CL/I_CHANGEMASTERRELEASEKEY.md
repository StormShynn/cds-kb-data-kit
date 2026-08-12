---
name: I_CHANGEMASTERRELEASEKEY
description: "These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?"
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEY')/$value
semantic_en: "These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?"
semantic_vi: "Change Number Release Key — CDS view giao diện dựa trên tcc10."
keywords:
  - "change"
  - "number"
  - "release"
  - "key"
  - "globally"
  - "released"
  - "costing"
  - "planning"
  - "production"
tags:
  - PLM
  - bo:companycode
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - plan
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
  - product
---
# I_CHANGEMASTERRELEASEKEY

**These CDS views provide the prerequisites for answering the following business question: Is a change released globally within my company, or only for a specific operative area (for example costing, planning, or production)?**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberReleaseKey` | ✓ | |  | `rlkey` | `NUMC(2)` | ECM: Release Key |
| `IsGloballyReleased` |  | |  | `rlglb` | `CHAR(1)` | ECM: global release indicator |
| `IsReleasedForCosting` |  | |  | `aefrk` | `CHAR(1)` | Release for costing |
| `IsReleasedForPlanning` |  | |  | `aefrp` | `CHAR(1)` | Release for planning |
| `IsReleasedForProduction` |  | |  | `aefrf` | `CHAR(1)` | Release for production |
| `IsReleasedForSimulation` |  | |  | `aefrs` | `CHAR(1)` | Release for simulation |
| `IsDateShiftCreatedOCMPresel` |  | |  | `ocmdv` | `CHAR(1)` | Date shift creates preselection for OCM |
| `IsReleaseKeyCreatedOCMPresel` |  | |  | `ocmfs` | `CHAR(1)` | Release key creates preselection for OCM |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ChangeMasterReleaseKeyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IECNRELKEY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'ChangeNumberReleaseKey'
@ObjectModel.semanticKey: [ 'ChangeNumberReleaseKey' ]

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Release Key'
define view I_ChangeMasterReleaseKey
  as select from tcc10
  association [0..*] to I_ChangeMasterReleaseKeyText as _Text on $projection.ChangeNumberReleaseKey = _Text.ChangeNumberReleaseKey
{
      @ObjectModel.text.association: '_Text'
  key rlkey as ChangeNumberReleaseKey,
      rlglb as IsGloballyReleased,
      aefrk as IsReleasedForCosting,
      aefrp as IsReleasedForPlanning,
      aefrf as IsReleasedForProduction,
      aefrs as IsReleasedForSimulation,
      ocmdv as IsDateShiftCreatedOCMPresel,
      ocmfs as IsReleaseKeyCreatedOCMPresel,

      _Text
}
```
