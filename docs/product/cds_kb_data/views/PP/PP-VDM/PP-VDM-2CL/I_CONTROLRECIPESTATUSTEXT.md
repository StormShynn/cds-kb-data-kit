---
name: I_CONTROLRECIPESTATUSTEXT
description: "Control Recipe Status - Text"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUSTEXT')/$value
semantic_en: "Control Recipe Status - Text"
semantic_vi: "Control Recipe Status - Text — CDS view giao diện dựa trên tcb04t."
keywords:
  - "control"
  - "recipe"
  - "status"
  - "text"
  - "language"
  - "name"
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
---
# I_CONTROLRECIPESTATUSTEXT

**Control Recipe Status - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControlRecipeStatus` | ✓ | |  | `cast(txt.crstat as vdm_crstat preserving type)` | `CHAR(5)` | Control Recipe Status |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ControlRecipeStatusName` |  | |  | `crstktx` | `CHAR(30)` | Description of the Control Recipe Status |
| `_Status` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Status` | `I_ControlRecipeStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPESTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPCTRLRECSTSTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 002}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ControlRecipeStatus'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Control Recipe Status - Text'

define view I_ControlRecipeStatusText
  as select from tcb04t as txt
  association [1..1] to I_ControlRecipeStatus as _Status   on $projection.ControlRecipeStatus = _Status.ControlRecipeStatus
  association [0..1] to I_Language            as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Status'
      @ObjectModel.text.element: ['ControlRecipeStatusName']
  key cast(txt.crstat as vdm_crstat preserving type) as ControlRecipeStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras   as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      txt.crstktx as ControlRecipeStatusName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Status,
      _Language
};
```
