---
name: I_CHANGEMASTERFUNCTIONSTDVH
description: "This view provides value help for change number function. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number Function instead."
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONSTDVH')/$value
semantic_en: "This view provides value help for change number function. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number Function instead."
semantic_vi: "Change Number Function — CDS view giao diện dựa trên I_ChangeMasterFunction."
keywords:
  - "change"
  - "number"
  - "function"
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
# I_CHANGEMASTERFUNCTIONSTDVH

**This view provides value help for change number function. This view shall be used for value help purpose only. If you intend to select the entire business data, use the view Change Number Function instead.**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChangeNumberFunction` | ✓ | |  |  | `CHAR(1)` | Change number function |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CHANGEMASTERFUNCTIONSTDVH')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IECNFUNCTION_SVH'
@ObjectModel.representativeKey: 'ChangeNumberFunction'

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.resultSet.sizeCategory: #XS

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

@EndUserText.label: 'Change Number Function'
define view entity I_ChangeMasterFunctionStdVH
  as select from I_ChangeMasterFunction
{

      @ObjectModel.text.association: '_Text'
  key ChangeNumberFunction,

      _Text
}
```
