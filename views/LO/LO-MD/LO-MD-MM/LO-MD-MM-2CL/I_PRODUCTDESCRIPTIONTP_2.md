---
name: I_PRODUCTDESCRIPTIONTP_2
description: Productdescriptiontp 2
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - transactional-processing
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTDESCRIPTIONTP_2

**Productdescriptiontp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `Product` |
| key `Language` | `Language` |
| `ProductDescription` | `ProductDescription` |
| `_Product` | *Association* |
| `_Language` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Description - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductDescriptionTP_2
  as projection on R_ProductDescriptionTP as ProductDescription
{

      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LanguageVH', element : 'Language'} , useAsTemplate: true }]
  key Language,
      @Semantics.text:true
      ProductDescription,
      /* Associations */
      _Product : redirected to parent I_ProductTP_2,
      _Language
}
```
