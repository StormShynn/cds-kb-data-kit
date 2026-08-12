---
name: I_TRANSPORDITEMCATEGORYT_2
description: "Transporditemcategoryt 2"
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - item-level
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDITEMCATEGORYT_2

**Transporditemcategoryt 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdItemCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspOrdItemCategoryDesc` |  | |  | `cast(ddtext as /scmtms/vdm_itm_category_descr preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdItemCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Item Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdItemCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_TranspOrdItemCategoryT_2
  as select from dd07t
  association        to parent I_TranspOrdItemCategory_2 as _TranspOrdItemCategory on $projection.TranspOrdItemCategory = _TranspOrdItemCategory.TranspOrdItemCategory
  association [0..1] to I_Language                       as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdItemCategory'
  key cast(substring(domvalue_l, 1, 3) as /scmtms/item_category preserving type) as TranspOrdItemCategory,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_itm_category_descr preserving type)             as TranspOrdItemCategoryDesc,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                           as DomainValue,

      /* Associations */
      _TranspOrdItemCategory,
      _Language
}
where
      domname                     =  '/SCMTMS/ITEM_CATEGORY'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 3) <> 'SRV' //Service
  and substring(domvalue_l, 1, 3) <> 'SHL' //Schedule Line
  and substring(domvalue_l, 1, 3) <> 'BCR' //Booking Capacity Reservation
  and substring(domvalue_l, 1, 3) <> 'CT' //Compartment
  and substring(domvalue_l, 1, 3) <> 'TXT' //Text
  and substring(domvalue_l, 1, 3) <> 'EQI' //Equipment
  and substring(domvalue_l, 1, 3) <> 'DRV' //Driver
  and substring(domvalue_l, 1, 3) <> 'APM' //Auxiliary Packaging Material
```
