---
name: I_MAINTEVENTCONSEQUENCETEXT
description: "Consequence of Maintenance Event - Text"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCONSEQUENCETEXT')/$value
semantic_en: "Consequence of Maintenance Event - Text"
semantic_vi: "Consequence of Maintenance Event - Text — CDS view giao diện dựa trên eam_svrty_t."
keywords:
  - "consequence"
  - "maintenance"
  - "event"
  - "text"
  - "language"
  - "maint"
  - "cnsqnc"
  - "category"
  - "code"
  - "description"
tags:
  - PM
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_MAINTEVENTCONSEQUENCETEXT

**Consequence of Maintenance Event - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCONSEQUENCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `MaintEventCnsqncCategoryCode` | ✓ | |  | `mainteventcnsqnccode` | `NUMC(2)` | Consequence Category ID |
| `MaintEventConsequenceCode` | ✓ | |  | `mainteventsvrtycode` | `NUMC(2)` | Consequence ID |
| `MaintEvtConsequenceDescription` |  | |  | `mainteventsvrtydescription` | `CHAR(70)` | Consequence Description |
| `_Language` | | ✓ | | | | |
| `_MaintEventCnsqncCategoryMap` | | ✓ | | | | |
| `_MaintEvtConsequenceCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_MaintEventCnsqncCategoryMap` | `I_MaintEventCnsqncCategoryMap` | [0..1] |
| `_MaintEvtConsequenceCategory` | `I_MaintEvtConsequenceCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCONSEQUENCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTEVENTCONSEQUENCETEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Consequence of Maintenance Event - Text'
@ObjectModel.representativeKey: 'MaintEventConsequenceCode'

@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A   --Modernization IAMEIME-22799
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMAINTEVTCNSQNCT'

// for data extraction
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintEventConsequenceText
  as select from eam_svrty_t
  association [0..1] to I_Language                    as _Language                    on  $projection.Language = _Language.Language
  association [0..1] to I_MaintEventCnsqncCategoryMap as _MaintEventCnsqncCategoryMap on  $projection.MaintEventCnsqncCategoryCode = _MaintEventCnsqncCategoryMap.MaintEventCnsqncCategoryCode
                                                                                      and $projection.MaintEventConsequenceCode    = _MaintEventCnsqncCategoryMap.MaintEventConsequenceCode
  association [0..1] to I_MaintEvtConsequenceCategory as _MaintEvtConsequenceCategory on  $projection.MaintEventCnsqncCategoryCode = _MaintEvtConsequenceCategory.MaintEventCnsqncCategoryCode
{
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key language                   as Language,
      @ObjectModel.foreignKey.association: '_MaintEvtConsequenceCategory'
  key mainteventcnsqnccode       as MaintEventCnsqncCategoryCode,
      @ObjectModel.foreignKey.association: '_MaintEventCnsqncCategoryMap'
  key mainteventsvrtycode        as MaintEventConsequenceCode,
      @Semantics.text:true
      mainteventsvrtydescription as MaintEvtConsequenceDescription,

      //Associations
      _Language,
      _MaintEventCnsqncCategoryMap,
      _MaintEvtConsequenceCategory

}
```
