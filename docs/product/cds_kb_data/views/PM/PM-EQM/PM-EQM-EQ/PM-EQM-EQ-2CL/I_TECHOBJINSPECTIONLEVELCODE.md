---
name: I_TECHOBJINSPECTIONLEVELCODE
description: "Techobjinspectionlevelcode"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
