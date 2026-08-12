---
name: I_ROUTEDETNSALESDOCUMENT
description: "Routedetnsalesdocument"
app_component: LE-SHP-GF-2CL
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
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - sales-document
  - document
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_ROUTEDETNSALESDOCUMENT

**Routedetnsalesdocument**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
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
| `DepartureCountry` | ✓ | |  | `aland` |  |  |
| `DepartureZone` | ✓ | |  | `azone` |  |  |
| `DestinationCountry` | ✓ | |  | `lland` |  |  |
| `ReceivingZone` | ✓ | |  | `lzone` |  |  |
| `ShippingCondition` | ✓ | |  | `vsbed` |  |  |
| `TransportationGroup` | ✓ | |  | `tragr` |  |  |
| `DeliveryWeightGroup` | ✓ | |  | `grulg` |  |  |
| `DeliveryRoute` |  | |  | `cast(route as le_route preserving type)` |  |  |
| `_DepartureCountry` | | ✓ | | | | |
| `_DepartureZone` | | ✓ | | | | |
| `_DestinationCountry` | | ✓ | | | | |
| `_ReceivingZone` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_TransportationGroup` | | ✓ | | | | |
| `_DeliveryRoute` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Route determination in sales document'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  },
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE],
  modelingPattern: #NONE
}

define view entity I_RouteDetnSalesDocument
  as select from trolz
  association of many to exact one I_Country             as _DepartureCountry    on  $projection.DepartureCountry = _DepartureCountry.Country
  association of many to exact one I_TransportationZone  as _DepartureZone       on  $projection.DepartureCountry = _DepartureZone.CountryCode
                                                                                 and $projection.DepartureZone    = _DepartureZone.TransportZone
  association of many to exact one I_Country             as _DestinationCountry  on  $projection.DestinationCountry = _DestinationCountry.Country
  association of many to exact one I_TransportationZone  as _ReceivingZone       on  $projection.DestinationCountry = _ReceivingZone.CountryCode
                                                                                 and $projection.ReceivingZone = _ReceivingZone.TransportZone
  association of many to exact one I_ShippingCondition   as _ShippingCondition   on  $projection.ShippingCondition = _ShippingCondition.ShippingCondition
  association of many to exact one I_TransportationGroup as _TransportationGroup on  $projection.TransportationGroup = _TransportationGroup.TransportationGroup
  association of many to exact one I_Route               as _DeliveryRoute       on  $projection.DeliveryRoute = _DeliveryRoute.Route



{
      @ObjectModel.foreignKey.association: '_DepartureCountry'
  key aland as DepartureCountry,
      @ObjectModel.foreignKey.association: '_DepartureZone'
  key azone as DepartureZone,
      @ObjectModel.foreignKey.association: '_DestinationCountry'
  key lland as DestinationCountry,
      @ObjectModel.foreignKey.association: '_ReceivingZone'
  key lzone as ReceivingZone,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
  key vsbed as ShippingCondition,
      @ObjectModel.foreignKey.association: '_TransportationGroup'
  key tragr as TransportationGroup,
  key grulg as DeliveryWeightGroup,
      @ObjectModel.foreignKey.association: '_DeliveryRoute'
      cast(route as le_route preserving type) as DeliveryRoute,

      //Associations
      _DepartureCountry,
      _DepartureZone,
      _DestinationCountry,
      _ReceivingZone,
      _ShippingCondition,
      _TransportationGroup,
      _DeliveryRoute

}
```
