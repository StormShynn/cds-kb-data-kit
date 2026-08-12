---
name: I_CONTROLRECIPESTATUS
description: "Control Recipe Status"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUS')/$value
semantic_en: "Control Recipe Status"
semantic_vi: "Control Recipe Status — CDS view giao diện dựa trên tcb04."
keywords:
  - "control"
  - "recipe"
  - "status"
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
---
# I_CONTROLRECIPESTATUS

**Control Recipe Status**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControlRecipeStatus` | ✓ | |  | `cast(tcb04.crstat as vdm_crstat preserving type)` | `CHAR(5)` | Control Recipe Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ControlRecipeStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPCTRLRECSTATUS'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'ControlRecipeStatus'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Control Recipe Status'

define view I_ControlRecipeStatus
  as select from tcb04 as tcb04
  association [0..*] to I_ControlRecipeStatusText as _Text on $projection.ControlRecipeStatus = _Text.ControlRecipeStatus
{
      @ObjectModel.text.association: '_Text'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key cast(tcb04.crstat as vdm_crstat preserving type) as ControlRecipeStatus,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
};
```
