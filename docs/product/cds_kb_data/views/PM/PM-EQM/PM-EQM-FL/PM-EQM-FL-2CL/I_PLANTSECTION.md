---
name: I_PLANTSECTION
description: "Plant Section"
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANTSECTION')/$value
semantic_en: "Plant Section"
semantic_vi: "Plant Section — CDS view giao diện dựa trên t357."
keywords:
  - "plant"
  - "section"
  - "person"
  - "resp"
  - "name"
  - "phone"
tags:
  - PM
  - component:PM-EQM-FL-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - plan
  - PM-EQM
  - PM-EQM-FL
  - PM-EQM-FL-2CL
---
# I_PLANTSECTION

**Plant Section**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANTSECTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PlantSection` | ✓ | |  | `beber` | `CHAR(3)` | Plant Section |
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `PlantSectionPersonRespName` |  | |  | `fing` | `CHAR(14)` | Group of Employees Responsible for Company Area |
| `PlantSectionPersonRespPhone` |  | |  | `tele` | `CHAR(12)` | Phone Number of Employee Group Responsible for Company Area |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANTSECTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PLANTSECTION')/$value)*

```abap
@EndUserText.label: 'Plant Section'
@Analytics: { dataCategory: #DIMENSION, 
  dataExtraction : { enabled: true , 
  delta.changeDataCapture.automatic: true } 
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPLANTSECTION'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PlantSection'
@Search.searchable: true
@Consumption.ranked: true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions: true

@ObjectModel.sapObjectNodeType.name: 'PlantSection'

@Metadata.ignorePropagatedAnnotations
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

define view I_PlantSection as select from t357 
association[0..1] to I_Plant as _Plant on $projection.Plant = _Plant.Plant
{
  @Search: {defaultSearchElement: true, ranking: #HIGH }
  key t357.beber as PlantSection,
  
  @ObjectModel.foreignKey.association: '_Plant'
  @Search: {defaultSearchElement: true, ranking: #HIGH }
  key t357.werks as Plant, 
   
  t357.fing as PlantSectionPersonRespName, 
  t357.tele as PlantSectionPersonRespPhone,
  
  
  _Plant
}
```
