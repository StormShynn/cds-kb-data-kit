---
name: I_FUNCAREA3SUBDIVISION
description: "Third Subdivision for Functional Area"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISION')/$value
semantic_en: "Third Subdivision for Functional Area"
semantic_vi: "Third Subdivision for Functional Area — CDS view cơ bản (master data) dựa trên fmmdfnsub3."
keywords:
  - "third"
  - "subdivision"
  - "for"
  - "functional"
  - "area"
  - "area3"
tags:
  - PSM
  - component:PSM
  - interface-view
---
# I_FUNCAREA3SUBDIVISION

**Third Subdivision for Functional Area**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaSubdivisionID` | ✓ | |  | `str_id` | `CHAR(10)` | Master Data Subdivision ID |
| `FunctionalArea3Subdivision` | ✓ | |  | `fnsub3` | `CHAR(10)` | Substring 3 of Functional Area |
| `_FunctionalAreaSubdivisionID` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FunctionalAreaSubdivisionID` | `I_FuncAreaSubdivisionBasic` | [0..1] |
| `_Text` | `I_FuncArea3SubdivisionT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCAREA3SUBDIVISION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFAREASUB3'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling: {
  algorithm: #SESSION_VARIABLE,
  type: #CLIENT_DEPENDENT
 }
@AccessControl.authorizationCheck: #CHECK
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics: { 
  internalName: #LOCAL,
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel: {
  usageType: {
      dataClass: #MASTER,
      serviceQuality: #A,
      sizeCategory: #M
  },
  representativeKey: 'FunctionalArea3Subdivision',
  sapObjectNodeType: {
    name: 'FunctionalArea3Subdivision'
  },
  supportedCapabilities: [ 
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.allowExtensions:true
@Search.searchable: true
@EndUserText.label: 'Third Subdivision for Functional Area'
define view I_FuncArea3Subdivision
  as select from fmmdfnsub3
  association [0..1] to I_FuncAreaSubdivisionBasic as _FunctionalAreaSubdivisionID on  $projection.FunctionalAreaSubdivisionID = _FunctionalAreaSubdivisionID.FunctionalAreaSubdivisionID
  association [0..*] to I_FuncArea3SubdivisionT    as _Text                        on  $projection.FunctionalAreaSubdivisionID = _Text.FunctionalAreaSubdivisionID
                                                                                   and $projection.FunctionalArea3Subdivision  = _Text.FunctionalArea3Subdivision
{
      @ObjectModel.foreignKey.association: '_FunctionalAreaSubdivisionID'
  key str_id as FunctionalAreaSubdivisionID,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH  
      @ObjectModel.text.association: '_Text'
  key fnsub3 as FunctionalArea3Subdivision,

      _Text,
      _FunctionalAreaSubdivisionID
}
```
