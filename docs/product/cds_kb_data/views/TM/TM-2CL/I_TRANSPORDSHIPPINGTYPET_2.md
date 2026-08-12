---
name: I_TRANSPORDSHIPPINGTYPET_2
description: "Transpordshippingtypet 2"
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
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSHIPPINGTYPET_2

**Transpordshippingtypet 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspOrdShippingType` | ✓ | |  | `shipping_type` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TranspOrdShippingTypeDesc` |  | |  | `cast(text as /scmtms/vdm_tor_ship_type_desc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspOrdShippingType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transp Order Shipping Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'TranspOrdShippingType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_TranspOrdShippingTypeT_2
  as select from /scmtms/c_shtypt
  association to parent I_TranspOrdShippingType_2 as _TranspOrdShippingType on $projection.TranspOrdShippingType = _TranspOrdShippingType.TranspOrdShippingType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdShippingType'
  key shipping_type                                                 as TranspOrdShippingType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                         as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(text as /scmtms/vdm_tor_ship_type_desc preserving type ) as TranspOrdShippingTypeDesc,

      /* Associations */
      _TranspOrdShippingType,
      _Language
}
where
  shipping_type <> '11' and //ULD
  shipping_type <> '12' and //ULD and Loose
  shipping_type <> '17' and //LTL (Less Than Truck Load)
  shipping_type <> '20' and //Parcel
  shipping_type <> '30' and //Intermodal Rail
  shipping_type <> '32' and //Unit Train
  shipping_type <> '4' //Bulk
```
