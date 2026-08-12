---
name: I_FINDIMENSIONSQTYFIELDS
description: "Dimensions for Quantity Fields"
app_component: CO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINDIMENSIONSQTYFIELDS')/$value
semantic_en: "Dimensions for Quantity Fields"
semantic_vi: "Dimensions for Quantity Fields — CDS view giao diện dựa trên fcoc_fdim."
keywords:
  - "dimensions"
  - "for"
  - "quantity"
  - "fields"
  - "database"
  - "table"
  - "field"
  - "controlling"
  - "area"
  - "unit"
  - "measure"
  - "dimension"
tags:
  - CO
  - bo:companycode
  - CO-PA
  - CO-PA-2CL
  - component:CO-PA-2CL
  - interface-view
  - lob:controlling
---
# I_FINDIMENSIONSQTYFIELDS

**Dimensions for Quantity Fields**

| Property | Value |
|---|---|
| App Component | `CO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINDIMENSIONSQTYFIELDS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DatabaseTable` | ✓ | |  | `tabname` | `CHAR(30)` | Table Name |
| `DatabaseTableField` | ✓ | |  | `fieldname` | `CHAR(30)` | Name of an Additional Quantity Field |
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `UnitOfMeasureDimension` |  | |  | `dimid` | `CHAR(6)` | Dimension |
| `UnitOfMeasure` |  | |  | `stduom` | `UNIT(3)` | Standard Unit of Measure |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINDIMENSIONSQTYFIELDS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINDIMENSIONSQTYFIELDS')/$value)*

```abap
@EndUserText.label: 'Dimensions for Quantity Fields'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFCOCFDIM'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FinDimensionsQtyFields as select from fcoc_fdim {
  key fcoc_fdim.tabname                           as DatabaseTable,
  key fcoc_fdim.fieldname                         as DatabaseTableField,
  key fcoc_fdim.kokrs                             as ControllingArea,
  fcoc_fdim.dimid                                 as UnitOfMeasureDimension,
  fcoc_fdim.stduom                                as UnitOfMeasure
}
```
