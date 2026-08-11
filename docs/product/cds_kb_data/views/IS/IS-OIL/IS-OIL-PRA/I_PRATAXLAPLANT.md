---
name: I_PRATAXLAPLANT
description: "PRA Tax Louisiana Plant"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAPLANT')/$value
semantic_en: "PRA Tax Louisiana Plant"
semantic_vi: "PRA Tax Louisiana Plant — CDS view giao diện dựa trên PRA Tax Louisiana Plant."
keywords:
  - "pra"
  - "tax"
  - "louisiana"
  - "plant"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - plan
---
# I_PRATAXLAPLANT

**PRA Tax Louisiana Plant**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAPLANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `plant_id` | `CHAR(5)` | Tax 2.0 LA - Plant ID |
| `PlantName` |  | |  | `cast (plant_desc as oiu_vdm_onrr_plant_name )` | `CHAR(50)` | Plant Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAPLANT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAPLANT')/$value)*

```abap
@EndUserText.label: 'PRA Tax Louisiana Plant'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXLAPLANT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'Plant'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRALouisianaTaxPlant'

define view I_PRATAXLAPlant
  as select from /pra/c_t9_plt
{
      @ObjectModel.text.element:  [ 'PlantName' ]
  key plant_id                                                                          as Plant,
      @Semantics.text: true
      cast (plant_desc  as  oiu_vdm_onrr_plant_name )                                   as PlantName
};
```
