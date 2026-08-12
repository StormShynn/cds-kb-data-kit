---
name: I_TRANSPORDSTAGETYPE
description: "Transportation Order Stage Type"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPE')/$value
semantic_en: "Transportation Order Stage Type"
semantic_vi: "I_TRANSPORDSTAGETYPE — CDS view cơ bản dựa trên I_TRANSPORDSTAGETYPE."
keywords:
  - "transpordstagetype"
  - "transp"
  - "stage"
  - "type"
  - "category"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDSTAGETYPE

**Transportation Order Stage Type**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStageType` | ✓ | |  | `stage_type` | `CHAR(3)` | Stage Type |
| `TranspOrdStageCategory` |  | |  | `stage_cat` | `CHAR(1)` | Stage Category |
| `_Text` | | ✓ | | | | |
| `_TranspOrdStageCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdStageTypeText` | [0..*] |
| `_TranspOrdStageCategory` | `I_TranspOrdStageCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText:   {label:              'Transportation Order Stage Type'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ITORSTAGETYPE'
@ObjectModel:   {representativeKey:      'TranspOrdStageType',
                 usageType:              {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:       {allowExtensions:   true,
                 ignorePropagatedAnnotations: true}

define view entity I_TranspOrdStageType
  as select from /scmtms/c_stgty
  association [0..*] to I_TranspOrdStageTypeText as _Text                   on $projection.TranspOrdStageType = _Text.TranspOrdStageType
  association [0..1] to I_TranspOrdStageCategory as _TranspOrdStageCategory on $projection.TranspOrdStageCategory = _TranspOrdStageCategory.TranspOrdStageCategory
{
      @ObjectModel.text.association: '_Text'
  key stage_type as TranspOrdStageType,
      @ObjectModel.foreignKey.association: '_TranspOrdStageCategory'
      stage_cat  as TranspOrdStageCategory,

      /* Associations */
      _Text,
      _TranspOrdStageCategory
}
```
