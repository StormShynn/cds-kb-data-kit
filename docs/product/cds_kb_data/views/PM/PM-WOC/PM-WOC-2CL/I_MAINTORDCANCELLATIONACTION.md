---
name: I_MAINTORDCANCELLATIONACTION
description: "Maintordcancellationaction"
app_component: PM-WOC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - interface-view
  - component:PM-WOC-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDCANCELLATIONACTION

**Maintordcancellationaction**

| Property | Value |
|---|---|
| App Component | `PM-WOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrdCancellationAction` | ✓ | |  | `cast(dd07l.domvalue_l as maintordcancellationaction)` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Status selection for Do not Execute'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IORDCNCLACT'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'MaintOrdCancellationAction'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
//@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
//                                     #CDS_MODELING_ASSOCIATION_TARGET,
//                                     #CDS_MODELING_DATA_SOURCE,
//                                     #EXTRACTION_DATA_SOURCE,
//                                     #SEARCHABLE_ENTITY,
//                                     #SQL_DATA_SOURCE,
//                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #S
//@Search.searchable: true
@Analytics.dataCategory: #DIMENSION --> omits value help annotation
//@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view entity I_MaintOrdCancellationAction as select from dd07l
  composition [0..*] of I_MaintOrdCancellationActionT as _Text
{
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_ONLY
      @Consumption.filter.defaultValue: ' '
  key cast(dd07l.domvalue_l as maintordcancellationaction) as MaintOrdCancellationAction,

// Associations
      _Text
}
where
      dd07l.domname  = 'MAINTORDCANCELLATIONACTION'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
