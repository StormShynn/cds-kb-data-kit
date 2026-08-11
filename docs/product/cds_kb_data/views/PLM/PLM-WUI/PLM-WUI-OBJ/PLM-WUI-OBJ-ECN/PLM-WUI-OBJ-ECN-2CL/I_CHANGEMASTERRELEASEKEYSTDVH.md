---
name: I_CHANGEMASTERRELEASEKEYSTDVH
description: "This view provides value help for change number release key. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number Release Key instead."
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYSTDVH')/$value
semantic_en: "This view provides value help for change number release key. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number Release Key instead."
semantic_vi: "Change Number Release Key — CDS view giao diện dựa trên I_ChangeMasterReleaseKey."
keywords:
  - "change"
  - "number"
  - "release"
  - "key"
tags:
  - PLM
  - bo:purchaseorder
  - component:PLM-WUI-OBJ-ECN-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-ECN
  - PLM-WUI-OBJ-ECN-2CL
---
# I_CHANGEMASTERRELEASEKEYSTDVH

**This view provides value help for change number release key. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number Release Key instead.**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberReleaseKey` | ✓ | |  |  | `NUMC(2)` | ECM: Release Key |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERRELEASEKEYSTDVH')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IECNRELKEY_SVH'
@ObjectModel.representativeKey: 'ChangeNumberReleaseKey'

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.resultSet.sizeCategory: #XS

@Search.searchable: true

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Release Key'
define view entity I_ChangeMasterReleaseKeyStdVH
  as select from I_ChangeMasterReleaseKey
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key ChangeNumberReleaseKey,

      _Text
}
```
