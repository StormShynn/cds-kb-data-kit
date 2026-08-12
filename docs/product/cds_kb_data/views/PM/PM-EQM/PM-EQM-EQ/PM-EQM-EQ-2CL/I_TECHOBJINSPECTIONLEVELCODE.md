---
name: I_TECHOBJINSPECTIONLEVELCODE
description: "Techobjinspectionlevelcode"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - inspection
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHOBJINSPECTIONLEVELCODE

**Techobjinspectionlevelcode**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'TechObjInspectionLevelCode'` |  | |  | `representativeKey: 'TechObjInspectionLevelCode'` |  |  |

## Source Code

```abap
@AbapCatalog: {
 sqlViewName: 'ITECHOBJINSPLVL',
 compiler.compareFilter: true,
 preserveKey: true
 }

@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Technical Object Inspection Level'

@VDM.viewType: #BASIC

@Analytics: { 
  dataCategory: #DIMENSION, 
  internalName:#LOCAL,
  dataExtraction.enabled: true
}

@ObjectModel :
{
  representativeKey: 'TechObjInspectionLevelCode',
  usageType.dataClass: #META,
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  resultSet.sizeCategory: #XS,
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION]
}

@Metadata.ignorePropagatedAnnotations: true

 
define view I_TechObjInspectionLevelCode as select from dd07l
  association [0..*] to I_TechObjInspectionLevelText as _InspectionLevelText on $projection.TechObjInspectionLevelCode = _InspectionLevelText.TechObjInspectionLevelCode 
{
      @ObjectModel.text.association: '_InspectionLevelText' 
      key cast(dd07l.domvalue_l as eame_idms_type) as TechObjInspectionLevelCode,
      _InspectionLevelText
}
where
      dd07l.domname  = 'EAM_IDMS_TYPE_D' 
  and dd07l.as4local = 'A'
  and dd07l.as4vers = '0000'
```
