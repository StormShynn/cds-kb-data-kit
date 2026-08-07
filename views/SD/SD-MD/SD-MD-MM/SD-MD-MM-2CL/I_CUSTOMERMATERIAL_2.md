---
name: I_CUSTOMERMATERIAL_2
description: Customermaterial 2
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - customer
  - material
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
  - bo:Customer
---
# I_CUSTOMERMATERIAL_2

**Customermaterial 2**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  | `vkorg` |
| `DistributionChannel` | ✓ | |  | `vtweg` |
| `Customer` | ✓ | |  | `kunnr` |
| `Product` | ✓ | |  | `cast( matnr as productnumber preserving type )` |
| `MaterialByCustomer` |  | |  | `kdmat` |
| `MaterialDescriptionByCustomer` |  | |  | `postx` |
| `RoundingProfile` |  | |  | `rdprf` |
| `Plant` |  | |  | `werks` |
| `DeliveryPriority` |  | |  | `lprio` |
| `MinDeliveryQtyInBaseUnit` |  | |  | `minlf` |
| `BaseUnit` |  | |  | `meins` |
| `CustomerMaterialSearchTerm` |  | |  | `sortl` |
| `PartialDeliveryIsAllowed` |  | |  | `kztlf` |
| `MaxNmbrOfPartialDelivery` |  | |  | `antlf` |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  | `untto` |
| `OverdelivTolrtdLmtRatioInPct` |  | |  | `uebto` |
| `UnlimitedOverdeliveryIsAllowed` |  | |  | `uebtk` |
| `CustomerMaterialItemUsage` |  | |  | `vwpos` |
| `SalesUnit` |  | |  | `vrkme_t` |
| `SalesQtyToBaseQtyDnmntr` |  | |  | `umvkn_t` |
| `SalesQtyToBaseQtyNmrtr` |  | |  | `umvkz_t` |
| `LastChangedByUser` |  | |  | `last_changed_by_user` |
| `LastChangeDateTime` |  | |  | `case tstmp_is_valid(cast(upd_tmstmp as abap.dec(15,0))) when 0 then cast( dats_tims_to_tstmp( erdat, '000000', 'UTC', $session.client, 'NULL' ) as last_changed_date_time ) else cast( upd_tmstmp as last_changed_date_time ) end` |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_DeliveryPriority` | | ✓ | | |
| `_BaseUnit` | | ✓ | | |
| `_PartialDeliveryIsAllowed` | | ✓ | | |
| `_CustomerMaterialItemUsage` | | ✓ | | |
| `_AdditionalCustomerMaterial` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_DeliveryPriority` | `I_DeliveryPriority` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PartialDeliveryIsAllowed` | `I_PartialDeliveryItem` | [0..1] |
| `_CustomerMaterialItemUsage` | `I_CustomerMaterialItemUsage` | [0..1] |
| `_AdditionalCustomerMaterial` | `I_AdditionalCustomerMaterial` | [0..*] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_Extension` | `E_CustomerMaterial` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'Customer'
@EndUserText.label: 'Customer Material'
@VDM.viewType: #BASIC
@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: [ '_LastChangedByUser' ]
}
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: [ 'Customer' ]
@AbapCatalog.sqlViewName: 'ISDCUSTMATLINFO2'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Analytics: {
    internalName: #LOCAL,
    dataCategory: #DIMENSION
}
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CustomerMaterial_2
  as select from knmt
  association [0..1] to I_SalesOrganization          as _SalesOrganization          on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel        as _DistributionChannel        on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_Customer                   as _Customer                   on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Product                    as _Product                    on  $projection.Product = _Product.Product
  association [0..1] to I_Plant                      as _Plant                      on  $projection.Plant = _Plant.Plant
  association [0..1] to I_DeliveryPriority           as _DeliveryPriority           on  $projection.DeliveryPriority = _DeliveryPriority.DeliveryPriority
  association [0..1] to I_UnitOfMeasure              as _BaseUnit                   on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_PartialDeliveryItem        as _PartialDeliveryIsAllowed   on  $projection.PartialDeliveryIsAllowed = _PartialDeliveryIsAllowed.PartialDeliveryIsAllowed
  association [0..1] to I_CustomerMaterialItemUsage  as _CustomerMaterialItemUsage  on  $projection.CustomerMaterialItemUsage = _CustomerMaterialItemUsage.CustomerMaterialItemUsage
  association [0..*] to I_AdditionalCustomerMaterial as _AdditionalCustomerMaterial on  $projection.SalesOrganization   = _AdditionalCustomerMaterial.SalesOrganization
                                                                                    and $projection.DistributionChannel = _AdditionalCustomerMaterial.DistributionChannel
                                                                                    and $projection.Customer            = _AdditionalCustomerMaterial.Customer
                                                                                    and $projection.Product             = _AdditionalCustomerMaterial.Product
  association [0..1] to I_User                       as _LastChangedByUser          on  $projection.LastChangedByUser = _LastChangedByUser.UserID

  //Extensibility
  association [0..1] to E_CustomerMaterial           as _Extension                  on  $projection.Product             = _Extension.Material
                                                                                    and $projection.Customer            = _Extension.Customer
                                                                                    and $projection.SalesOrganization   = _Extension.SalesOrganization
                                                                                    and $projection.DistributionChannel = _Extension.DistributionChannel

{
      @ObjectModel.foreignKey.association: '_SalesOrganization'
  key vkorg                                          as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
  key vtweg                                          as DistributionChannel,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
  key kunnr                                          as Customer,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
  key cast( matnr as productnumber preserving type ) as Product,

      // Customer Material
      kdmat                                          as MaterialByCustomer,
      @Semantics.text: true
      postx                                          as MaterialDescriptionByCustomer,
      rdprf                                          as RoundingProfile,

      // Shipping
      @ObjectModel.foreignKey.association: '_Plant'
      werks                                          as Plant,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      lprio                                          as DeliveryPriority,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      minlf                                          as MinDeliveryQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      meins                                          as BaseUnit,
      sortl                                          as CustomerMaterialSearchTerm,
      
      // Partial Delivery
      @ObjectModel.foreignKey.association: '_PartialDeliveryIsAllowed'
      kztlf                                          as PartialDeliveryIsAllowed,
      antlf                                          as MaxNmbrOfPartialDelivery,
      untto                                          as UnderdelivTolrtdLmtRatioInPct,
      uebto                                          as OverdelivTolrtdLmtRatioInPct,
      uebtk                                          as UnlimitedOverdeliveryIsAllowed,

      // Control Data
      @ObjectModel.foreignKey.association: '_CustomerMaterialItemUsage'
      vwpos                                          as CustomerMaterialItemUsage,

      // Units of Measure
      vrkme_t                                        as SalesUnit,
      umvkn_t                                        as SalesQtyToBaseQtyDnmntr,
      umvkz_t                                        as SalesQtyToBaseQtyNmrtr,

      // admin
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      last_changed_by_user                           as LastChangedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      case tstmp_is_valid(cast(upd_tmstmp as abap.dec(15,0)))
        when 0 then cast( dats_tims_to_tstmp( erdat, '000000', 'UTC', $session.client, 'NULL' ) as last_changed_date_time )
        else cast( upd_tmstmp as last_changed_date_time )
      end                                            as LastChangeDateTime,

      _SalesOrganization,
      _DistributionChannel,
      _Customer,
      _Product,
      _Plant,
      _DeliveryPriority,
      _BaseUnit,
      _PartialDeliveryIsAllowed,
      _CustomerMaterialItemUsage,
      _AdditionalCustomerMaterial,
      _LastChangedByUser
}
```
