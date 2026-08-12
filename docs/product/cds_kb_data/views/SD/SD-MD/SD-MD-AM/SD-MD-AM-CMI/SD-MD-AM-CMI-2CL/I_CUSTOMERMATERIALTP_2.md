---
name: I_CUSTOMERMATERIALTP_2
description: "Customermaterialtp 2"
app_component: SD-MD-AM-CMI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-AM
  - interface-view
  - transactional-processing
  - customer
  - material
  - component:SD-MD-AM-CMI-2CL
  - lob:Sales & Distribution
  - bo:Material
  - bo:Customer
---
# I_CUSTOMERMATERIALTP_2

**Customermaterialtp 2**

| Property | Value |
|---|---|
| App Component | `SD-MD-AM-CMI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrganization` | ✓ | |  |  |  |  |
| `DistributionChannel` | ✓ | |  |  |  |  |
| `Customer` | ✓ | |  |  |  |  |
| `Product` | ✓ | |  |  |  |  |
| `SalesOrganizationForEdit` |  | |  |  |  |  |
| `DistributionChannelForEdit` |  | |  |  |  |  |
| `CustomerForEdit` |  | |  |  |  |  |
| `ProductForEdit` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `MaterialDescriptionByCustomer` |  | |  |  |  |  |
| `CustomerMaterialSearchTerm` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `MaxNmbrOfPartialDelivery` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `CustomerMaterialItemUsage` |  | |  |  |  |  |
| `SalesUnit` |  | |  |  |  |  |
| `SalesQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `SalesQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Customer Material - TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
      name: 'CustomerMaterial'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #M,
     dataClass:      #MASTER
   }
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
 }
 
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['CustomerMaterial'],  
  elementSuffix: 'CMR',
  quota: {
    maximumFields: 170, 
    maximumBytes: 3400
  }  
} 
define root view entity I_CustomerMaterialTP_2
provider contract transactional_interface
 as projection on R_CustomerMaterialTP as CustomerMaterial
{
  key CustomerMaterial.SalesOrganization,
  key CustomerMaterial.DistributionChannel,
  key CustomerMaterial.Customer,
  key CustomerMaterial.Product,
      
      @ObjectModel.editableFieldFor: 'SalesOrganization'
      SalesOrganizationForEdit,
      @ObjectModel.editableFieldFor: 'DistributionChannel'      
      DistributionChannelForEdit,
      @ObjectModel.editableFieldFor: 'Customer'      
      CustomerForEdit,
      @ObjectModel.editableFieldFor: 'Product'      
      ProductForEdit,
      
      CustomerMaterial.MaterialByCustomer,
      CustomerMaterial.MaterialDescriptionByCustomer,
      CustomerMaterialSearchTerm,
      CustomerMaterial.Plant,
      CustomerMaterial.DeliveryPriority,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CustomerMaterial.MinDeliveryQtyInBaseUnit,
      CustomerMaterial.BaseUnit,
      PartialDeliveryIsAllowed,
      MaxNmbrOfPartialDelivery,
      UnderdelivTolrtdLmtRatioInPct,
      OverdelivTolrtdLmtRatioInPct,
      UnlimitedOverdeliveryIsAllowed,
      CustomerMaterialItemUsage,
      SalesUnit,
      SalesQtyToBaseQtyDnmntr,
      SalesQtyToBaseQtyNmrtr,
      LastChangedByUser,
      LastChangeDateTime,
      
      //Compositions
      @Semantics.valueRange.maximum: '1' 
      _Text : redirected to composition child I_CustomerMaterialTextTP,
      _Customer
      
}
```
