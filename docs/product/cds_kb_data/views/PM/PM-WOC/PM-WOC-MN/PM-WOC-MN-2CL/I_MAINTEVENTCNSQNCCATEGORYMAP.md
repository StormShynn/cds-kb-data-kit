---
name: I_MAINTEVENTCNSQNCCATEGORYMAP
description: "Map Maint Evt Cnsqnc Category to Cnsqnc"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYMAP')/$value
semantic_en: "Map Maint Evt Cnsqnc Category to Cnsqnc"
semantic_vi: "Map Maint Evt Cnsqnc Category to Cnsqnc — CDS view giao diện dựa trên eam_cnsqncsvrty."
keywords:
  - "map"
  - "maint"
  - "evt"
  - "cnsqnc"
  - "category"
  - "event"
  - "code"
  - "consequence"
  - "position"
  - "value"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVENTCNSQNCCATEGORYMAP

**Map Maint Evt Cnsqnc Category to Cnsqnc**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYMAP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintEventCnsqncCategoryCode` | ✓ | |  | `mainteventcnsqnccode` | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceCode` | ✓ | |  | `mainteventsvrtycode` | `NUMC(2)` | Consequence ID |
| `MaintEventCnsqncPositionValue` |  | |  | `mainteventsvrtyposition` | `NUMC(2)` | Consequence Position |
| `_MaintEvtConsequenceCategory` | | ✓ | | | | |
| `_MaintEventConsequenceText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintEvtConsequenceCategory` | `I_MaintEvtConsequenceCategory` | [0..1] |
| `_MaintEventConsequenceText` | `I_MaintEventConsequenceText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYMAP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCNSQNCCATEGORYMAP')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Map Maint Evt Cnsqnc Category to Cnsqnc'
@ObjectModel.representativeKey: 'MaintEventConsequenceCode'
@Analytics.technicalName: 'IMAINTEVTCCMAP'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A   --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S

// for data extraction
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'MaintenanceEventConsequence'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_MaintEventCnsqncCategoryMap
  as select from eam_cnsqncsvrty


  association [0..1] to I_MaintEvtConsequenceCategory as _MaintEvtConsequenceCategory on  $projection.MaintEventCnsqncCategoryCode = _MaintEvtConsequenceCategory.MaintEventCnsqncCategoryCode
  association [0..*] to I_MaintEventConsequenceText   as _MaintEventConsequenceText   on  $projection.MaintEventCnsqncCategoryCode = _MaintEventConsequenceText.MaintEventCnsqncCategoryCode
                                                                                      and $projection.MaintEventConsequenceCode    = _MaintEventConsequenceText.MaintEventConsequenceCode
{
      @ObjectModel.foreignKey.association: '_MaintEvtConsequenceCategory'
  key mainteventcnsqnccode    as MaintEventCnsqncCategoryCode,
      @ObjectModel.text.association: '_MaintEventConsequenceText'
  key mainteventsvrtycode     as MaintEventConsequenceCode,
      mainteventsvrtyposition as MaintEventCnsqncPositionValue,

      //Associations
      _MaintEvtConsequenceCategory,
      _MaintEventConsequenceText

}
```
