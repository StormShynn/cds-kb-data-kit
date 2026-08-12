---
name: I_TRANSPORDSTAGETYPETEXT
description: "Transportation Order Stage Type - Text"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPETEXT')/$value
semantic_en: "Transportation Order Stage Type - Text"
semantic_vi: "I_TRANSPORDSTAGETYPETEXT — CDS view cơ bản dựa trên I_TRANSPORDSTAGETYPETEXT."
keywords:
  - "transpordstagetypetext"
  - "transp"
  - "stage"
  - "type"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-2CL
  - interface-view
  - order
  - TM-2CL
---
# I_TRANSPORDSTAGETYPETEXT

**Transportation Order Stage Type - Text**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdStageType` | ✓ | |  | `stage_type` | `CHAR(3)` | Stage Type |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `TranspOrdStageTypeDesc` |  | |  | `cast ( description_s as /scmtms/vdm_stage_type_desc preserving type )` | `CHAR(40)` | Transportation Order Stage Type Description |
| `_TranspOrdStageType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdStageType` | `I_TranspOrdStageType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPORDSTAGETYPETEXT')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText:   {label:              'Transportation Order Stage Type - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:      'TranspOrdStageType',
                 dataCategory:           #TEXT,
                 usageType:              {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'ITORSTAGETYPET'
@VDM:           {viewType:           #BASIC}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspOrdStageTypeText
  as select from /scmtms/c_stgtyt
  association [0..1] to I_TranspOrdStageType as _TranspOrdStageType on $projection.TranspOrdStageType = _TranspOrdStageType.TranspOrdStageType
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdStageType'
  key stage_type                                                            as TranspOrdStageType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu                                                                 as Language,
      @Semantics.text
      cast ( description_s as /scmtms/vdm_stage_type_desc preserving type ) as TranspOrdStageTypeDesc,

      /* Associations */
      _TranspOrdStageType,
      _Language
}
```
