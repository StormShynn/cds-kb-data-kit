---
name: I_PRATAXNDEXMPWELLTYPE
description: "PRA Tax North Dakota Exempt Well Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDEXMPWELLTYPE')/$value
semantic_en: "PRA Tax North Dakota Exempt Well Type"
semantic_vi: "PRA Tax North Dakota Exempt Well Type — CDS view giao diện dựa trên PRA Tax North Dakota Exempt Well Type."
keywords:
  - "pra"
  - "tax"
  - "north"
  - "dakota"
  - "exempt"
  - "well"
  - "type"
  - "exmp"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXNDEXMPWELLTYPE

**PRA Tax North Dakota Exempt Well Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDEXMPWELLTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `NorthDakotaTaxExmpWellType` | ✓ | |  | `well_code` | `CHAR(2)` | Tax 2.0: ND Well Code |
| `NorthDakotaTaxExmpWellTypeName` |  | |  | `description` | `CHAR(100)` | Tax 2.0 ND Well Code Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDEXMPWELLTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNDEXMPWELLTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Tax North Dakota Exempt Well Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAEXMWELLTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'NorthDakotaTaxExmpWellType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRANorthDakotaTaxExmpWellType'

define view I_PRATaxNDExmpWellType
  as select from /pra/nd_well_cod
{
      @ObjectModel.text.element:  [ 'NorthDakotaTaxExmpWellTypeName' ]
  key well_code                                          as NorthDakotaTaxExmpWellType,
      @Semantics.text: true
      description                                        as NorthDakotaTaxExmpWellTypeName
}
```
