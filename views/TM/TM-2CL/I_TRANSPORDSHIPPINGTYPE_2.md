---
name: I_TRANSPORDSHIPPINGTYPE_2
description: Transpordshippingtype 2
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
---
# I_TRANSPORDSHIPPINGTYPE_2

**Transpordshippingtype 2**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspOrdShippingType` | `shipping_type` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transportation Order Shipping Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'TranspOrdShippingType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TranspOrderShippingType'
define root view entity I_TranspOrdShippingType_2
  as select from /scmtms/c_shtyp
  composition [0..*] of I_TranspOrdShippingTypeT_2 as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key shipping_type as TranspOrdShippingType,

      /* Associations */
      _Text
}
where
      shipping_type <> '11' //ULD
  and shipping_type <> '12' //ULD and Loose
  and shipping_type <> '17' //LTL (Less Than Truck Load)
  and shipping_type <> '20' //Parcel
  and shipping_type <> '30' //Intermodal Rail
  and shipping_type <> '32' //Unit Train
  and shipping_type <> '4'  //Bulk
```
