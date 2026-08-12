---
name: I_TRANSPCHARGETYPETEXT
description: "Transportation Charges Charge Element Type - Text"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPETEXT')/$value
semantic_en: "Transportation Charges Charge Element Type - Text"
semantic_vi: "I_TRANSPCHARGETYPETEXT — CDS view cơ bản dựa trên I_TRANSPCHARGETYPETEXT."
keywords:
  - "transpchargetypetext"
  - "transp"
  - "charge"
  - "type"
  - "language"
  - "desc"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-MD-CM-2CL
  - interface-view
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
---
# I_TRANSPCHARGETYPETEXT

**Transportation Charges Charge Element Type - Text**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeType` | ✓ | |  | `tcet084` | `CHAR(15)` | Charge Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `TranspChargeTypeDesc` |  | |  | `cast( text as /scmtms/vdm_trcharg_type_desc preserving type )` | `CHAR(80)` | Transportation Charge Type Description |
| `_TranspChargeType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspChargeType` | `I_TranspChargeType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPETEXT')/$value)*

```abap
@EndUserText:   {label:              'Transportation Charges Charge Element Type - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspChargeType',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
// ,
//                lifecycle.contract.type: #NONE }
@AbapCatalog:   {compiler:           {compareFilter: true},
                 preserveKey:        true,
                 sqlViewName:        'ICHARGEELEMTYPET',
                 buffering:          {status: #ACTIVE,
                                      type:   #SINGLE}}
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@ClientHandling.algorithm:           #SESSION_VARIABLE
@Metadata:       {ignorePropagatedAnnotations: true}

define view I_TranspChargeTypeText
  as select from /scmtms/c_tcett
  association [0..1] to I_TranspChargeType as _TranspChargeType on $projection.TranspChargeType = _TranspChargeType.TranspChargeType
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspChargeType'
  key tcet084                                                       as TranspChargeType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                         as Language,
      @Semantics.text: true
      cast( text as /scmtms/vdm_trcharg_type_desc preserving type ) as TranspChargeTypeDesc,

      /* Associations */
      _TranspChargeType,
      _Language
}
```
