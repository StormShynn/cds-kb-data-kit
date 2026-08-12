---
name: I_EWM_WHSEPROCESSCATEGORYTEXT
description: "This CDS view provides information about warehouse process categories in your warehouse."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEPROCESSCATEGORYTEXT')/$value
semantic_en: "This CDS view provides information about warehouse process categories in your warehouse."
semantic_vi: "Warehouse Process Category - Text — CDS view giao diện dựa trên Warehouse Process Category - Text."
keywords:
  - "warehouse"
  - "process"
  - "category"
  - "text"
  - "language"
  - "name"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WHSEPROCESSCATEGORYTEXT

**This CDS view provides information about warehouse process categories in your warehouse.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEPROCESSCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `WarehouseProcessCategory` | ✓ | |  | `trart` | `CHAR(1)` | Warehouse Process Category |
| `WarehouseProcessCategoryName` |  | |  | `tratx` | `CHAR(40)` | Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEPROCESSCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEPROCESSCATEGORYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWMWPCTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Process Category - Text'

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: ['WarehouseProcessCategory']
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
define view I_EWM_WhseProcessCategoryText
  as select from /scwm/t333b as WrhsProcessCategoryText
{
  @Semantics.language: true
  key spras as Language,
  key trart as WarehouseProcessCategory,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      tratx as WarehouseProcessCategoryName
}
```
