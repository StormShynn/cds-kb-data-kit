---
name: I_CUSTOMERMATERIALTEXTTP
description: Customermaterialtexttp
app_component: SD-MD-AM-CMI-2CL
software_component: SAPSCORE
release_state: released
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
  - text
  - component:SD-MD-AM-CMI-2CL
  - lob:Sales & Distribution
  - bo:Material
  - bo:Customer
---
# I_CUSTOMERMATERIALTEXTTP

**Customermaterialtexttp**

| Property | Value |
|---|---|
| App Component | `SD-MD-AM-CMI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `LongTextID` | `CustomerMaterialText.LongTextID` |
| key `SalesOrganization` | `CustomerMaterialText.SalesOrganization` |
| key `DistributionChannel` | `CustomerMaterialText.DistributionChannel` |
| key `Customer` | `CustomerMaterialText.Customer` |
| key `Product` | `CustomerMaterialText.Product` |
| key `Language` | `CustomerMaterialText.Language` |
| `LanguageForEdit` | `CustomerMaterialText.LanguageForEdit` |
| `LongTextIDForEdit` | `CustomerMaterialText.LongTextIDForEdit` |
| `LongText` | `CustomerMaterialText.LongText` |
| `_CustomerMaterial` | *Association* |

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Customer Material - Text TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { 
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType:{
      serviceQuality: #C,
      sizeCategory: #L,
      dataClass: #MASTER
    },
    dataCategory: #TEXT
}

define view entity I_CustomerMaterialTextTP 
  as projection on R_CustomerMaterialLongTextTP as CustomerMaterialText
{
  key CustomerMaterialText.LongTextID,
  @EndUserText.label: 'Sales Organization'
  key CustomerMaterialText.SalesOrganization,
  @EndUserText.label: 'Distribution Channel'
  key CustomerMaterialText.DistributionChannel,
  @EndUserText.label: 'Customer'
  key CustomerMaterialText.Customer,
  @EndUserText.label: 'Product'
  key CustomerMaterialText.Product,
      @Semantics.language: true
  key CustomerMaterialText.Language,

      @ObjectModel.editableFieldFor: 'Language'
      CustomerMaterialText.LanguageForEdit,
      @ObjectModel.editableFieldFor: 'LongTextID'
      CustomerMaterialText.LongTextIDForEdit, 
      @Semantics.text:true
      CustomerMaterialText.LongText,

      _CustomerMaterial : redirected to parent I_CustomerMaterialTP_2
}
```
