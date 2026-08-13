---
name: I_BASICMATERIALVH
description: "Basicmaterialvh"
semantic_vi: "View Basicmaterialvh CDS cung cấp truy cập dữ liệu vật liệu, có ích khi tìm kiếm vật liệu trong ứng dụng logistics."
keywords:
  - "material"
  - "vật liệu"
  - "logistics"
  - "lo"
  - "lo-md"
  - "lo-md-mm"
  - "basicmaterial"
  - "basicmaterialvh"
  - "sap"
  - "cds"
  - "view"
  - "search"
semantic_en: "The Basicmaterialvh CDS view provides access to material data, which is useful when searching for materials in logistics applications."
app_component: LO-MD-MM-2CL
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
  - LO-MD-MM
  - interface-view
  - value-help
  - material
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BASICMATERIALVH

**Basicmaterialvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
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
| `BasicMaterial` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBASICMATVH'
@ObjectModel.dataCategory: #VALUE_HELP
@VDM.viewType: #BASIC 
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK
@ObjectModel.representativeKey: 'BasicMaterial'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true 
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY ]


@Metadata.ignorePropagatedAnnotations: true

define view I_BasicMaterialVH 
 as select from I_BasicMaterial 
{
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #HIGH
  key  BasicMaterial
  };
```
