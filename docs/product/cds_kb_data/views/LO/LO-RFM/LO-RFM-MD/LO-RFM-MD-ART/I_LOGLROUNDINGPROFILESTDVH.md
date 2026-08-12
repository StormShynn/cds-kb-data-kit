---
name: I_LOGLROUNDINGPROFILESTDVH
description: "Loglroundingprofilestdvh"
app_component: LO-RFM-MD-ART
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-RFM-MD-ART
  - lob:Logistics General
---
# I_LOGLROUNDINGPROFILESTDVH

**Loglroundingprofilestdvh**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  |  |  |
| `LogisticalRoundingProfile` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILGLRNDNGPRFSTVH'
@EndUserText.label: 'Logistical Rounding Profile'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    supportedCapabilities: [#VALUE_HELP_PROVIDER,#SEARCHABLE_ENTITY],
    dataCategory: #VALUE_HELP,
    representativeKey: 'LogisticalRoundingProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
define view I_LoglRoundingProfileStdVH
  as select from I_LogisticalRoundingProfile
{
  key Plant,
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key LogisticalRoundingProfile,
  
  _Text
  
}
```
