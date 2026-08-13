---
name: C_BOMMATERIALVH
description: "Bommaterialvh"
semantic_vi: "View C_BOMMATERIALVH cung cấp danh sách vật liệu và các thành phần của bảng tính toán vật liệu (BOM), hữu ích cho quản lý vật liệu và lập kế hoạch sản xuất."
keywords:
  - "material"
  - "bom"
  - "component"
  - "material management"
  - "production planning"
  - "c_bommaterialvh"
  - "sap"
  - "lo-md-bom-2cl"
  - "logistics general"
semantic_en: "The CDS view C_BOMMATERIALVH provides a list of materials and their bill of materials (BOM) components, useful for material management and production planning."
app_component: LO-MD-BOM-2CL
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
  - LO
  - LO-MD
  - LO-MD-BOM
  - consumption-view
  - value-help
  - material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# C_BOMMATERIALVH

**Bommaterialvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
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
| `Material` | ✓ | |  | `cast (Product as matnr preserving type )` |  |  |
| `MaterialDescription` |  | |  | `cast( _Text[1: Language=$session.system_language].ProductName as maktx)` |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductExternalID` |  | |  |  |  |  |
| `ProductType` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `_ProductType` | | ✓ | | | | |
| `_ProductGroup_2` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CBOMMATVH'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.representativeKey: 'Material'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory : #XXL
@ObjectModel.usageType.dataClass: #MASTER
@AccessControl.authorizationCheck: #CHECK
//@EndUserText.label: 'Value help view for BOM application'
@EndUserText.label: 'Material'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
define view C_BOMMaterialVH as select from I_ProductStdVH 
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.element: ['MaterialDescription']
  key cast (Product        as matnr preserving type ) as Material,
     @Search.defaultSearchElement: true
     @Search.fuzzinessThreshold: 0.8
     @Search.ranking: #LOW
     cast( _Text[1: Language=$session.system_language].ProductName as maktx) as MaterialDescription,
     @Consumption.hidden: true
     AuthorizationGroup,
     @Consumption.hidden: true
     @UI.hidden: true
     Product,
     @Consumption.hidden: true
     @Search.defaultSearchElement: true
     @Search.fuzzinessThreshold: 0.8
     @Search.ranking: #LOW
     ProductExternalID,
     @Consumption.hidden: true
     @UI.hidden: true
     ProductType,
     @Consumption.hidden: true
     @UI.hidden: true
     ProductGroup,
     _ProductType,
     _ProductGroup_2    
     }
```
